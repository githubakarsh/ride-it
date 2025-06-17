from flask import Blueprint, jsonify, request


events_bp = Blueprint('events', __name__)

# in-memory event store
events = []
event_id_counter = 1


@events_bp.route('/events', methods=['POST'])
def create_event():
    global event_id_counter
    data = request.json or {}
    event = {
        'id': event_id_counter,
        'name': data.get('name'),
        'status': 'upcoming',
        'members': []
    }
    events.append(event)
    event_id_counter += 1
    return jsonify(event), 201


@events_bp.route('/events/<int:event_id>', methods=['PUT'])
def edit_event(event_id):
    data = request.json or {}
    for event in events:
        if event['id'] == event_id and event['status'] != 'deleted':
            event.update({k: v for k, v in data.items() if k in ['name', 'status']})
            return jsonify(event)
    return jsonify({'error': 'Event not found'}), 404


@events_bp.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    for event in events:
        if event['id'] == event_id and event['status'] != 'deleted':
            event['status'] = 'deleted'
            return jsonify({'message': 'Event deleted'})
    return jsonify({'error': 'Event not found'}), 404


@events_bp.route('/events/my')
def my_events():
    user = request.args.get('user')
    user_events = [e for e in events if user in e['members'] and e['status'] != 'deleted']
    return jsonify(user_events)


@events_bp.route('/events/in-progress')
def in_progress_events():
    return jsonify([e for e in events if e['status'] == 'in_progress'])


@events_bp.route('/events/upcoming')
def upcoming_events():
    return jsonify([e for e in events if e['status'] == 'upcoming'])


@events_bp.route('/events/deleted')
def deleted_events():
    return jsonify([e for e in events if e['status'] == 'deleted'])


@events_bp.route('/events/<int:event_id>/join', methods=['POST'])
def join_event(event_id):
    user = (request.json or {}).get('user')
    for event in events:
        if event['id'] == event_id and event['status'] != 'deleted':
            if user not in event['members']:
                event['members'].append(user)
            return jsonify(event)
    return jsonify({'error': 'Event not found'}), 404


@events_bp.route('/events/<int:event_id>/unjoin', methods=['POST'])
def unjoin_event(event_id):
    user = (request.json or {}).get('user')
    for event in events:
        if event['id'] == event_id and user in event['members']:
            event['members'].remove(user)
            return jsonify(event)
    return jsonify({'error': 'Event not found'}), 404


@events_bp.route('/events/<int:event_id>/members/<int:user_id>', methods=['DELETE'])
def remove_member(event_id, user_id):
    for event in events:
        if event['id'] == event_id and user_id in event['members']:
            event['members'].remove(user_id)
            return jsonify({'message': 'Member removed'})
    return jsonify({'error': 'Event or member not found'}), 404

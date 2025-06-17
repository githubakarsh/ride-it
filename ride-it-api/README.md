This directory is used for development of API's with Python.

Available endpoints (Flask):

- `POST /events` - create event
- `PUT /events/<id>` - edit event
- `DELETE /events/<id>` - soft delete event
- `GET /events/my?user=<user>` - list events joined by user
- `GET /events/in-progress` - list in progress events
- `GET /events/upcoming` - list upcoming events
- `GET /events/deleted` - list deleted events
- `POST /events/<id>/join` - join event
- `POST /events/<id>/unjoin` - unjoin event
- `DELETE /events/<id>/members/<user_id>` - remove member from event
- `GET /auth/google` - placeholder for google sign-in
- `POST /notify/email` - send email
- `POST /notify/sms` - send SMS
- `POST /notify/whatsapp` - send WhatsApp message

Run the app with `python app.py`.

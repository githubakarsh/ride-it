from flask import Blueprint, jsonify, request


notify_bp = Blueprint('notify', __name__)


class NotificationHub:
    def send_email(self, to, subject, body):
        print(f"Sending email to {to} with subject '{subject}'")

    def send_sms(self, to, message):
        print(f"Sending SMS to {to}: {message}")

    def send_whatsapp(self, to, message):
        print(f"Sending WhatsApp to {to}: {message}")


notification_hub = NotificationHub()


@notify_bp.route('/notify/email', methods=['POST'])
def notify_email():
    data = request.json or {}
    notification_hub.send_email(data.get('to'), data.get('subject'), data.get('body'))
    return jsonify({'message': 'Email sent'})


@notify_bp.route('/notify/sms', methods=['POST'])
def notify_sms():
    data = request.json or {}
    notification_hub.send_sms(data.get('to'), data.get('message'))
    return jsonify({'message': 'SMS sent'})


@notify_bp.route('/notify/whatsapp', methods=['POST'])
def notify_whatsapp():
    data = request.json or {}
    notification_hub.send_whatsapp(data.get('to'), data.get('message'))
    return jsonify({'message': 'WhatsApp message sent'})

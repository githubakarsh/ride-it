from flask import Blueprint, jsonify


auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/auth/google')
def google_sign_in():
    # placeholder for Google sign in logic
    return jsonify({'message': 'Signed in with Google'})

from flask import Flask

from events import events_bp
from auth import auth_bp
from notify import notify_bp

app = Flask(__name__)

# register blueprints
app.register_blueprint(events_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(notify_bp)

if __name__ == "__main__":
    app.run()

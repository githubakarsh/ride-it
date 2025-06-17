

from flask import Flask

app = Flask(__name__)

@app.route("/events")
def getEvents() :
    return "events here"


if __name__ == '__main__':
    app.run()



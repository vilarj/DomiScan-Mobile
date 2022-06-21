from flask import Flask

app = Flask(__name__)


@app.route("/")
def photo_api():
    return {"Photo": ["Photo 1", "Photo 2", "Photo 3"]}


if __name__ == "__main__":
    app.run()

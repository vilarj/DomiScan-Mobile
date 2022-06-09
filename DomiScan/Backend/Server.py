from distutils.log import debug
from flask import Flask

app = Flask(__name__)

@app.route("/photo_api")
def photo_api():
    return {"Photo": ["Photo 1","Photo 2"]}


if __name__ == "__main__":
    app.run(debug=True)
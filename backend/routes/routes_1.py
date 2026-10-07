from flask import Blueprint
# from 

app = Blueprint("blue",__name__)



@app.route("/")
def home():
    return "Flask is working!"
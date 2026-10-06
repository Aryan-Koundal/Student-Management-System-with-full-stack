from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql+mysqlconnector://root:%40%23aryan_3039@localhost/student_management"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
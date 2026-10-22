from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from routes.routes_1 import blueprint
from routes import index
from routes import student
from routes import subject
from routes import marks
from models.db import db
from flask_cors import CORS
from sqlalchemy import URL

import os
from dotenv import load_dotenv
# from models.students import Student
# from controller.student_controller import student_controller
load_dotenv()

app = Flask(__name__)
CORS(app)
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")

app.config["SQLALCHEMY_DATABASE_URI"] = URL.create(
    "mysql+pymysql",
    username=DB_USER,
    password=DB_PASSWORD,
    host=DB_HOST,
    database=DB_NAME
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# db = SQLAlchemy(app)
db.init_app(app)


app.register_blueprint(blueprint)

if __name__=="__main__":
    app.run(debug=True)
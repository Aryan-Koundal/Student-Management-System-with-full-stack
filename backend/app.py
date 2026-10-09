from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from routes.routes_1 import blueprint
from routes import student
from routes import subject
from routes import marks
from models.db import db
from flask_cors import CORS
# from models.students import Student
# from controller.student_controller import student_controller
app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql+mysqlconnector://root:%40%23aryan_3039@localhost/student_management"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# db = SQLAlchemy(app)
db.init_app(app)


app.register_blueprint(blueprint)
print(app.url_map)

# with app.app_context():
#     try:
#         db.engine.connect()
#         print("Database connected successfully!")
#     except Exception as e:
#         print("Database connection failed:", e)

if __name__=="__main__":
    app.run(debug=True)



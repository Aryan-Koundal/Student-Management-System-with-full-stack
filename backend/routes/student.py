# from flask import Blueprint
from models.students import Student
from controller.student_controller import student_controller
from .routes_1 import blueprint

# blueprint = Blueprint("blue",__name__)


# @blueprint.route("/")
# def home():
#     return "Flask is working!"

@blueprint.route("/student",methods =["POST"])
def student():
#    student = Student.query.all()
   return student_controller()

@blueprint.route("/student")
def student1():
    student = Student.query.all()
    for i in student:
     print(i)
    return "Students printed in terminal"
# from flask import Blueprint
from models.students import Student
from controller.student_controller import student_controller
from .routes_1 import blueprint
from flask import jsonify

# blueprint = Blueprint("blue",__name__)


# @blueprint.route("/")
# def home():
#     return "Flask is working!"

@blueprint.route("/students",methods =["POST"])
def student():
#    student = Student.query.all()
   return student_controller()

# @blueprint.route("/student",methods=["GET"])
# def student1():
#     student = Student.query.all()
#     for i in student:
#        print("ID:", i.id) 
#        print("Name:", i.name) 
#        print("Roll Number:", i.rollno) 
#        print("Class:", i.class_name) 
#        print("Email:", i.email) 
#        print("Phone:", i.phone) 
#        print("--------------------")
#     return "Students printed in terminal"

@blueprint.route("/students", methods=["GET"])
def student1():
    students = Student.query.all()

    student_list = []

    for i in students:
        student_list.append({
            "id": i.id,
            "name": i.name,
            "rollno": i.rollno,
            "class_name": i.class_name,
            "email": i.email,
            "phone": i.phone
        })

    return jsonify(student_list)
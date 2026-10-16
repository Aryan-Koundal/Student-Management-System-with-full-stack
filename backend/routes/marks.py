from .routes_1 import blueprint
from controller.marks_controller import add_marks_controller,get_student_info_controller,get_subject_info_controller
from models.marks import Marks
from flask import jsonify

@blueprint.route("/performance",methods=["POST"])
def add_marks():
   return add_marks_controller()

@blueprint.route("/performance",methods=["GET"])
def getstudents():
    students = get_student_info_controller()
    subjects = get_subject_info_controller()

    return jsonify({
        "students": students,
        "subjects": subjects
    })
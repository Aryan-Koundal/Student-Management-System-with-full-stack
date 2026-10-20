from .routes_1 import blueprint
from controller.marks_controller import add_marks_controller,get_student_info_controller,get_marks_controller,delete_marks_id_controller,edit_details_controller
from models.marks import Marks
from flask import jsonify

@blueprint.route("/performance",methods=["POST"])
def add_marks():
   return add_marks_controller()

@blueprint.route("/performance",methods=["GET"])
def getstudents():
    return get_marks_controller()

@blueprint.route("/performance/<int:marks_id>",methods=["DELETE"])
def delete_marks_id(marks_id):
    return delete_marks_id_controller(marks_id)

@blueprint.route("/performance/<int:marks_id>",methods=["PUT"])
def edit_details(marks_id):
    return edit_details_controller(marks_id)
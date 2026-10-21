from .routes_1 import blueprint
from flask import jsonify
from models.students import Student
from controller.index_controller import total_students_controller,total_subjects_controller,average_percentage_controller


@blueprint.route("/index",methods=["GET"])
def total_students():
    total_student = total_students_controller()
    total_subejct = total_subjects_controller()
    average = average_percentage_controller()
    return jsonify({
    "total_students": total_student,
    "total_subjects": total_subejct,
    "average_percentage": average
    })

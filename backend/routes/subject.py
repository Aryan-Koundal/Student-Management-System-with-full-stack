from .routes_1 import blueprint
from controller.subject_controller import subject_controller,old_subjects_controller,edit_subject_controller,delete_subject_controller
from models.subjects import Subject

@blueprint.route("/subjects",methods=["POST"])
def subject():
   return subject_controller()

@blueprint.route("/subjects",methods=["GET"])
def oldsubjects():
   return old_subjects_controller()

@blueprint.route("/subjects/<int:subject_Id>",methods=["PUT"])
def editsubject(subject_Id):
   return edit_subject_controller(subject_Id)

@blueprint.route("/subjects",methods=["DELETE"])
def delete_subject():
   return delete_subject_controller()
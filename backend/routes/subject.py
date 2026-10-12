from .routes_1 import blueprint
from controller.subject_controller import subject_controller,old_subjects_controller,edit_subject_controller
from models.subjects import Subject

@blueprint.route("/subjects",methods=["POST"])
def subject():
   return subject_controller()

@blueprint.route("/subjects",methods=["GET"])
def oldsubjects():
   return old_subjects_controller()

@blueprint.route("/subjects",methods=["PUT"])
def editsubject():
   return edit_subject_controller()
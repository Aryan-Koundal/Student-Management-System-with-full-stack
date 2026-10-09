from .routes_1 import blueprint
from controller.subject_controller import subject_controller
from models.subjects import Subject

@blueprint.route("/subjects",methods=["POST"])
def subject():
   return subject_controller()
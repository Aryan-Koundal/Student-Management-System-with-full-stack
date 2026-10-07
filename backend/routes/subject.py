from .routes_1 import blueprint
from controller.subject_controller import subject_controller
from models.subjects import Subject

@blueprint.route("/subject",method=["Post"])
def subject():
   return subject_controller()
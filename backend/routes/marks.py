from .routes_1 import blueprint
from controller.marks_controller import marks_controller
from models.marks import Marks

@blueprint.route("/subject",method=["Post"])
def subject():
   return marks_controller()
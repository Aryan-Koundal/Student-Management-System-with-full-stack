from .routes_1 import blueprint
from controller.marks_controller import marks_controller
from models.marks import Marks

@blueprint.route("/marks",methods=["POST"])
def marks():
   return marks_controller()
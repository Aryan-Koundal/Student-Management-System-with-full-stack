from flask import Blueprint

blueprint = Blueprint("blue",__name__)


@blueprint.route("/")
def home():
    return "Flask is working!"
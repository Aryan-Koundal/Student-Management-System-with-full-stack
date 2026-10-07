from flask import request
from models.marks import Marks
from models.db import db

def marks_controller():
    data = request.json

    student_id = data["student_id"]
    subeject_id = data["subject_id"]
    marks = data["marks"]

    m = Marks(
        student_id = student_id,
        subeject_id = subeject_id,
        marks = marks,
    )
    db.session.add(m)
    db.session.commit()
from flask import request
from models.subjects import Subject
from models.db import db

def subject_controller():
    data = request.json

    subject = data["SUBJECT_name"]
    code = data["SUBJECT_code"]
    type = data["SUBJECT_type"]
    sub_class = data["class_name"]

    sub = Subject(
        SUBJECT_name = subject,
        SUBJECT_code = code,
        SUBJECT_type = type,
        class_name = sub_class
    )
    db.session.add(sub)
    db.session.commit()
from flask import request
from models.subjects import Subject
from models.db import db

def subject_controller():
    data = request.json

    subject = data["name"]
    code = data["code"]
    type = data["type"]
    sub_class = data["class"]

    sub = Subject(
        SUBJECT_name = subject,
        SUBJECT_code = code,
        SUBJECT_type = type,
        class_name = sub_class
    )
    db.session.add(sub)
    db.session.commit()

    return {
        "message":"Added subject successfully !"
    },200
from flask import request
from models.db import db
from models.students import Student


def student_controller():
    data = request.json

    name = data["name"]
    rollno = data["rollno"]
    class_name = data["class"]
    email = data["email"]
    phone = data["phone"]

    st = Student(
        name = name,
        rollno = rollno,
        class_name = class_name,
        email = email,
        phone = phone
    )
    db.session.add(st)
    db.session.commit()


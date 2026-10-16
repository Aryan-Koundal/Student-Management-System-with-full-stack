from flask import request
from flask import jsonify
from models.marks import Marks
from models.students import Student
from models.subjects import Subject
from models.db import db

def add_marks_controller():
    data = request.json

    student_id = data["student_id"]
    subjects= data["subjects"]

    for i in subjects:
        subject_id = i["subject_id"]
        subject_marks = i["marks"]

        mark = Marks(
            student_id = student_id,
            subject_id = subject_id,
            marks = subject_marks
        )

        db.session.add(mark)

    db.session.commit()
    return jsonify({
        "message": "marks added to student successfully"
    }),200

def get_student_info_controller():
    students = Student.query.all()

    student_list = []

    for i in students:
        student_list.append({
            "student_name":i.name,
            "student_rollno":i.rollno,
            "student_class":i.class_name 
        })

    return student_list

def get_subject_info_controller():
    subjects = Subject.query.all()
    subject_list = []

    for i in subjects:
        subject_list.append({
            "subject_id": i.id,
            "subject_name": i.SUBJECT_name,
            "subject_code": i.SUBJECT_code,
        })

    return subject_list

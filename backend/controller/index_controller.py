from flask import request
from flask import jsonify
from models.marks import Marks
from models.students import Student
from models.subjects import Subject
from models.db import db

def total_students_controller():
    data = Student.query.all()
    student_list = []
        
    for i in data:
        student_list.append({
        "student_id":i.id,
        "student_name":i.name,
        "student_rollno":i.rollno,
        "student_class":i.class_name 
        })

    return student_list

def total_subjects_controller():
    data = Subject.query.all()
    subject_list = []

    for i in data:
        subject_list.append({
            "id":i.id
        })

    return subject_list

def average_percentage_controller():
    data = Marks.query.all()
    total_marks = 0
    marks_received = 0
    average_marks = 0

    # id = []
    # marks = []

    for i in data:
     total_marks += 100
     marks_received += i.marks

    # for i in data:
    #     id.append({
    #         "id":i.id,
    #     })

    # for i in id:
    #     total_marks +=100

    # for i in data:
    #     marks.append({
    #         "marks":i.marks
    #     })

    # for i in marks:
    #     marks_received += i["marks"]

    average_marks = marks_received/total_marks*100

    return average_marks
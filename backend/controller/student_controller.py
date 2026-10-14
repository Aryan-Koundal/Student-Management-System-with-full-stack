from flask import request
from models.db import db
from models.students import Student
from flask import jsonify

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

    return {
        "message": "Successfully added student !"
    },200


def old_students_controller():
    students = Student.query.all()

    student_list = []

    for i in students:
        student_list.append({
            "id": i.id,
            "name": i.name,
            "rollno":i.rollno,
            "class_name": i.class_name,
            "email": i.email,
            "phone": i.phone
        })

    return jsonify(student_list)

def delete_student_controller(student_id):
    student = db.session.get(Student,student_id)

    if student is None:
        return jsonify({"error": "Student not found"}), 404

    db.session.delete(student)
    db.session.commit()

    return jsonify({
        "message": "Student deleted successfully"
        }), 200

def edit_student_controller(student_id):

    data = request.json
    student = db.session.get(Student,student_id)

    if student is None:
        return jsonify({
            "message": "Student not found"
        }),404

    name = data["name"]
    rollno = data["rollno"]
    student_class = data["class"]
    email = data["email"]
    phone = data["phone"]

    student.name = name
    student.rollno = rollno
    student.class_name = student_class
    student.email = email
    student.phone = phone 

    db.session.commit()

    return jsonify({"message": "Student updated successfully!"}), 200
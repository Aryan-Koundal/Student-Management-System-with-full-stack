from flask import request
from models.subjects import Subject
from models.db import db
from flask import jsonify

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

def old_subjects_controller():
    subjects = Subject.query.all()

    old_subjects = []

    for i in subjects :
        old_subjects.append({
            "id":i.id,
            "SUBJECT_name":i.SUBJECT_name,
            "SUBJECT_code":i.SUBJECT_code,
            "SUBJECT_type":i.SUBJECT_type,
            "class_name":i.class_name
        })

    return jsonify(old_subjects),200


def edit_subject_controller(subject_Id):
    data = request.json

    subject = db.session.get(Subject,subject_Id)

    if subject is None:
        return jsonify({
            "message":"Subject not found"
        }),404

    name = data["name"]
    code = data["code"]
    type = data["type"]
    new_class = data["class"]

    subject.SUBJECT_name = name
    subject.SUBJECT_code = code
    subject.SUBJECT_type = type
    subject.class_name = new_class

    db.session.commit()

    return jsonify({
        "message":"Subject updated successfuly!"
    }),200


def delete_subject_controller():
    data = request.json

    subject_id = data["id"]

    subject = db.session.get(Subject, subject_id)

    if subject is None :
        return jsonify({"error": "Subject not found"}), 404

    db.session.delete(subject)
    db.session.commit()

    return jsonify({
            "message": "Subject deleted successfully"
            }), 200
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

    student_info = []
    data = Marks.query.all()
    marks = []

    for i in data:
        marks.append({
            "student_id":i.student_id,
            "subject_id":i.subject_id,
            "student_marks": i.marks
        })

    students = Student.query.all()
    
    student_list = []
    
    for i in students:
        student_list.append({
            "student_id":i.id,
            "student_name":i.name,
            "student_rollno":i.rollno,
            "student_class":i.class_name 
        })

    for mark in marks:
      for student in student_list:
        if (mark["student_id"]==student["student_id"]):
          student_info.append({
            "student_name":student["student_name"],
            "student_rollno":student["student_rollno"],
            "student_class":student["student_class"]
         })
          
    return student_info

# def get_subject_info_controller():
#     subjects = Subject.query.all()
#     subject_list = []

#     for i in subjects:
#         subject_list.append({
#             "subject_id": i.id,
#             "subject_name": i.SUBJECT_name,
#             "subject_code": i.SUBJECT_code,
#         })

#     return subject_list

def get_marks_controller():

    student_info = []

    data = Marks.query.all()
    marks = []

    for i in data:
        marks.append({
           "marks_id": i.id,
            "student_id":i.student_id,
            "subject_id":i.subject_id,
            "student_marks": i.marks
        })

    
    students = Student.query.all()
        
    student_list = []
        
    for i in students:
        student_list.append({
                "student_id":i.id,
                "student_name":i.name,
                "student_rollno":i.rollno,
                "student_class":i.class_name 
        })
    
    subjects = Subject.query.all()
    subject_list = []
    
    for i in subjects:
        subject_list.append({
            "subject_id": i.id,
            "subject_name": i.SUBJECT_name,
            "subject_code": i.SUBJECT_code,
        })


    for mark in marks:
            for student in student_list:
             if (mark["student_id"]==student["student_id"]):
                existing_student = None
    
                for s in student_info:
                    if s["student_id"]==student["student_id"]:
                        existing_student = s
                        break
                if existing_student is None: 
                  existing_student ={
                    "student_id": student["student_id"],
                    "student_name":student["student_name"],
                    "student_rollno":student["student_rollno"],
                    "student_class":student["student_class"],
                    "subjects":[]
                 }
                  student_info.append(existing_student)

                for subject in subject_list:
                 if(mark["subject_id"]==subject["subject_id"]):
                  existing_student["subjects"].append({
                    "marks_id":mark["marks_id"],
                    "subject_id":subject["subject_id"],
                    "subject_name":subject["subject_name"],
                    "subject_code":subject["subject_code"],
                    "subject_marks":mark["student_marks"]
                  })

               
    

    return jsonify(student_info)

def delete_marks_id_controller(marks_id):
   id = db.session.get(Marks,marks_id)

   if id is None:
      return jsonify({
         "error":"not found"
      }),404

   db.session.delete(id)
   db.session.commit()
   return jsonify({
      "message":"deleted successfully"
   }),200
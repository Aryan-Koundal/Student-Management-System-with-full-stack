from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Student(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.string(100),nullable=False)
    roll_no = db.Column(db.Integer,nullable=False)
    class_name = db.Column(db.string(50),nullable = False) 
    email = db.Column(db.string(100),nullable = True)
    phone = db.Column(db.string(20),nullable = False)

class Subject(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.string(100),nullable=False)
    code = db.Column(db.string(100),nullabale=False)
    type = db.Column(db.string(50),nullable = False) 
    class_name = db.Column(db.string(100),nullable = True)

class Marks(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    student_id = db.Column(db.Integer,db.ForeignKey("student.id"),nullable=False)
    subject_id = db.Column(db.Integer,db.ForeignKey("subject.id"),nullabale=False)
    marks = db.Column(db.Integer,nullable = False) 
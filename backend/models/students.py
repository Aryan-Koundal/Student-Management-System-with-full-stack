from .db import db

class Student(db.Model):
    __tablename__ = "students"
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(100),nullable=False)
    rollno = db.Column(db.Integer,nullable=False)
    class_name = db.Column("class",db.String(50),nullable = False) 
    email = db.Column(db.String(100),nullable = True)
    phone = db.Column(db.String(20),nullable = False)
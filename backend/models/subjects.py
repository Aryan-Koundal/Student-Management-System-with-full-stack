from .db import db

class Subject(db.Model):
    __tablename__ = "subjects"
    id = db.Column(db.Integer,primary_key = True)
    SUBJECT_name = db.Column(db.String(100),nullable=False)
    SUBJECT_code = db.Column(db.String(100),nullable=False)
    SUBJECT_type = db.Column(db.String(50),nullable = False) 
    class_name = db.Column(db.String(100),nullable = True)
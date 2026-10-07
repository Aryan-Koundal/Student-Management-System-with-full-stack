from .db import db


class Marks(db.Model):
    __tablename__ = "marks"
    id = db.Column(db.Integer,primary_key = True)
    student_id = db.Column(db.Integer,db.ForeignKey("students.id"),nullable=False)
    subject_id = db.Column(db.Integer,db.ForeignKey("subjects.id"),nullable=False)
    marks = db.Column(db.Integer,nullable = False) 
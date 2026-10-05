-- === The Name of Data Base===
CREATE DATABASE student_management;
-- ===using the database to create tables===
USE student_management;
-- ===table for storing students details===
create Table students(
id INT AUTO_INCREMENT PRIMARY KEY,
name varchar(30),
rollno int,
class varchar(20),
email varchar(255),
phone varchar(15)
);


-- ===table for storing subjects details===
CREATE TABLE subjects(
id INT AUTO_INCREMENT PRIMARY KEY ,
SUBJECT_name VARCHAR(50),
SUBJECT_code VARCHAR(20),
SUBJECT_type VARCHAR(30),
class varchar(40)
);

-- ===table for storing marks of students===
CREATE TABLE marks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject_id INT,
    marks INT,

    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);


-- ===for seeing the details of table===
select * from students;

select *from subjects;

select *from marks;
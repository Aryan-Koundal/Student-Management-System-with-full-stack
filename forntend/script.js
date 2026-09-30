// === Add student popup window ===
const addStudent = document.getElementById("add-student");
if (addStudent) {
    const studentModal = document.getElementById("student-modal");
    const close_Student_Modal = document.getElementById("close-modal");
    const cancel_Student_Modal = document.getElementById("cancel-modal");
    
    addStudent.addEventListener("click", function () {
        studentModal.style.display = "flex";
    });
    
    close_Student_Modal.addEventListener("click", function () {
        studentModal.style.display = "none";
    });
    
    cancel_Student_Modal.addEventListener("click", function () {
        studentModal.style.display = "none";
    });
}

// ===Add student details===
const studentForm = document.getElementById("student-form");
const studentName = document.getElementById("student-name");
const studentRollno = document.getElementById("roll-number");
const studentClass = document.getElementById("student-class");
const studentEmail = document.getElementById("student-email");
const studentPhoneNo = document.getElementById("student-phone");
console.log(studentForm);
if (studentForm){
    studentForm.addEventListener("submit",async function(event){
        event.preventDefault();
        const data ={
            name:studentName.value,
            rollno:studentRollno.value,
            class:studentClass.value,
            email:studentEmail.value,
            phone:studentPhoneNo.value
        };
        console.log(data.name);
        console.log(studentName.value);
    })
}

// ===Add Subject popup Window===
const addSubject = document.getElementById("add-subject");
if (addSubject) {
    const subjectModal = document.getElementById("subject-modal");
    const close_Subject_Modal = document.getElementById("close-subject-modal");
    const cancel_Subject_Modal = document.getElementById("cancel-subject");

    addSubject.addEventListener("click", function() {
        subjectModal.style.display = "flex";
    });
    
    close_Subject_Modal.addEventListener("click", function() {
        subjectModal.style.display = "none";
    });
    
    cancel_Subject_Modal.addEventListener("click", function() {
        subjectModal.style.display = "none";
    });
}

// ===Add Subject details===
const subjectForm = document.getElementById("subject-form");
const subjectName = document.getElementById("subject-name");
const subjectCode = document.getElementById("subject-code");
const subjectDescription = document.getElementById("subject-description");
console.log(subjectForm);
if (subjectForm){
    subjectForm.addEventListener("submit",async function(event){
        event.preventDefault();
        const data ={
            name:subjectName.value,
            code:subjectCode.value,
            description:subjectDescription.value
        };
        console.log(data.name);
        console.log(data);
    })
}
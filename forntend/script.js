// ===Add student popup window===
const addStudent = document.getElementById("add-student");
const studentModal = document.getElementById("student-modal");
const closeModal = document.getElementById("close-modal");
const cancelModal = document.getElementById("cancel-modal");

addStudent.addEventListener("click", function () {
    studentModal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
    studentModal.style.display = "none";
});

cancelModal.addEventListener("click", function () {
    studentModal.style.display = "none";
});

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

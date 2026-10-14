// === Add student popup window ===
const addStudent = document.getElementById("add-student");
if (addStudent) {
    const studentModal = document.getElementById("student-modal");
    const close_Student_Modal = document.getElementById("close-modal");
    const cancel_Student_Modal = document.getElementById("cancel-modal");
    // const add_Student_Modal = document.getElementById("add-modal")
    
    addStudent.addEventListener("click", function () {
        studentModal.style.display = "flex";
    });
    
    close_Student_Modal.addEventListener("click", function () {
        studentModal.style.display = "none";
    });
    
    cancel_Student_Modal.addEventListener("click", function () {
        studentModal.style.display = "none";
    });

    // add_Student_Modal.addEventListener("submit",function(event){
    //     event.preventDefault();
    //     studentModal.style.display = "none";
    // });
}

// ===Add student details===
const studentForm = document.getElementById("student-form");
const studentId = document.getElementById("student-id");
const studentName = document.getElementById("student-name");
const studentRollno = document.getElementById("roll-number");
const studentClass = document.getElementById("student-class");
const studentEmail = document.getElementById("student-email");
const studentPhoneNo = document.getElementById("student-phone");
const studentTableBody = document.getElementById("studentTableBody");
// console.log(studentForm);
// ===GETTING THE STUDENTS FROM BACKEND===
async function getStudents() {
    if (!studentTableBody) return;
    const response = await fetch("http://127.0.0.1:5000/students", {
     method: "GET"
    });
    const students = await response.json();
    console.log(students);
    studentTableBody.innerHTML = "";
    students.forEach(function(student) {
        const Student = document.createElement("tr");
        Student.innerHTML=`
        <td class="student-id">${student.id}</td>
        <td class="student-name">${student.name}</td>
        <td class="student-roll">${student.rollno}</td>
        <td class="student-class">${student.class}</td>
        <td class="student-email">${student.email}</td>
        <td class="student-phone">${student.phone}</td>
        <td>
        <button class="view-btn">👁View</button>
        <button class="edit-btn">✎Edit</button>
        <button class="delete-btn">🗑</button>
        </td>
        `;
        studentTableBody.appendChild(Student);
    });
}
getStudents();
// let studentId = 2;
if (studentForm){
    studentForm.addEventListener("submit",async function(event){
        event.preventDefault();
        const data ={
            // id:studentId.value,
            name:studentName.value,
            rollno:studentRollno.value,
            class:studentClass.value,
            email:studentEmail.value,
            phone:studentPhoneNo.value
        };
        console.log(data.name);
        console.log(studentName.value);

        // ===SENDING THE DATA TO THE BACKEND OF STUDENTS===
        const response = await fetch("http://127.0.0.1:5000/students",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);

        // ===Add the student details in the table===
        const newStudent = document.createElement("tr");
        newStudent.innerHTML=`
        <td class=".student-id">${studentId}</td>
        <td class=".student-name">${data.name}</td>
        <td class=".student-roll">${data.rollno}</td>
        <td class=".student-class">${data.class}</td>
        <td class="student-email">${data.email}</td>
        <td class="student-phone">${data.phone}</td>
        <td>
        <button class="view-btn">👁View</button>
        <button class="edit-btn">✎Edit</button>
        <button class="delete-btn">🗑</button>
        </td>
        `;
        studentTableBody.appendChild(newStudent);
        // studentId ++;
    })
    // ===Remove or delete an Student===
    studentTableBody.addEventListener("click", async function(event) {

       if (event.target.classList.contains("delete-btn")) {
          const row = event.target.closest("tr");
          const studentId = row.cells[0].textContent;
          const response = await fetch(`http://127.0.0.1:5000/students/${studentId}`,{
            method:"DELETE",
          });
          row.remove();
        }
        });

    // ===View the student details===
    studentTableBody.addEventListener("click", function(event) {

    if (event.target.classList.contains("view-btn")) {

        const row = event.target.closest("tr");
        const name = row.querySelector(".student-name").textContent;
        const roll = row.querySelector(".student-roll").textContent;
        const studentClass = row.querySelector(".student-class").textContent;
        const email = row.querySelector(".student-email").textContent;
        const phone = row.querySelector(".student-phone").textContent;

        alert(
            "Name: " + name +
            "\nRoll No: " + roll +
            "\nClass: " + studentClass +
            "\nEmail: " + email +
            "\nPhone: " + phone
        );
        }
        });

}

// ===To close the edit form===
const editStudent = document.getElementById("edit-student-modal");
const closeEditModal = document.getElementById("close-edit-modal");
const cancelEditModal = document.getElementById("cancel-edit-modal");

if (editStudent) {

    closeEditModal.addEventListener("click", function () {
        editStudent.style.display = "none";
    });

    cancelEditModal.addEventListener("click", function () {
        editStudent.style.display = "none";
    });

}
// ===To open the edit form===
// console.log("table")
// if (studentTableBody){
// studentTableBody.addEventListener("click", function(event) {
//     if (event.target.classList.contains("edit-btn")) {

//         editStudent.style.display = "flex";

//     }

// });
// }

// ===Edit student details===
const editStudentName = document.getElementById("edit-student-name");
const editRollNumber = document.getElementById("edit-roll-number");
const editStudentClass = document.getElementById("edit-student-class");
const editStudentEmail = document.getElementById("edit-student-email");
const editStudentPhone = document.getElementById("edit-student-phone");
let editingRow = null;
let student_Id;
if(studentTableBody){
studentTableBody.addEventListener("click",function(event){
    if(event.target.classList.contains("edit-btn")){
        const row = event.target.closest("tr");
        student_Id = row.cells[0].textContent;
        editingRow = row;
        const name = row.querySelector(".student-name").textContent;
        const roll = row.querySelector(".student-roll").textContent;
        const studentClass = row.querySelector(".student-class").textContent;
        const email = row.querySelector(".student-email").textContent;
        const phone = row.querySelector(".student-phone").textContent;

        editStudentName.value = name;
        editRollNumber.value = roll;
        editStudentClass.value = studentClass;
        editStudentEmail.value = email;
        editStudentPhone.value = phone;

        editStudent.style.display = "flex";
    }
})

// ===save changes===
const editStudentForm = document.getElementById("edit-student-form");
editStudentForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const newName = editStudentName.value;
    const newRoll = editRollNumber.value;
    const newClass = editStudentClass.value;
    const newEmail = editStudentEmail.value;
    const newPhone = editStudentPhone.value;

    const data = {
        "name":editStudentName.value,
        "rollno":editRollNumber.value,
        "class":editStudentClass.value,
        "email":editStudentEmail.value,
        "phone":editStudentPhone.value
    };
    const response = await fetch(`http://127.0.0.1:5000/students/${student_Id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    });

    editingRow.querySelector(".student-name").textContent = newName;
    editingRow.querySelector(".student-roll").textContent = newRoll;
    editingRow.querySelector(".student-class").textContent = newClass;
    editingRow.querySelector(".student-email").textContent = newEmail;
    editingRow.querySelector(".student-phone").textContent = newPhone;

    editStudent.style.display = "none";
});
}
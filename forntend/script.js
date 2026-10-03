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
// const studentId = document.getElementById("student-id");
const studentName = document.getElementById("student-name");
const studentRollno = document.getElementById("roll-number");
const studentClass = document.getElementById("student-class");
const studentEmail = document.getElementById("student-email");
const studentPhoneNo = document.getElementById("student-phone");
const studentTableBody = document.getElementById("studentTableBody");
console.log(studentForm);
let studentId = 2;
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
        studentId ++;
    })
    // ===Remove or delete an Student===
    studentTableBody.addEventListener("click", function(event) {

       if (event.target.classList.contains("delete-btn")) {

          const row = event.target.closest("tr");

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
console.log("table")
if (studentTableBody){
studentTableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-btn")) {

        editStudent.style.display = "flex";

    }

});
}

// ===Edit student details===
const editStudentName = document.getElementById("edit-student-name");
const editRollNumber = document.getElementById("edit-roll-number");
const editStudentClass = document.getElementById("edit-student-class");
const editStudentEmail = document.getElementById("edit-student-email");
const editStudentPhone = document.getElementById("edit-student-phone");
let editingRow = null;
if(studentTableBody){
studentTableBody.addEventListener("click",function(event){
    if(event.target.classList.contains("edit-btn")){
        const row = event.target.closest("tr");
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
}

// ===save changes===
const editStudentForm = document.getElementById("edit-student-form");
if(studentTableBody){
editStudentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newName = editStudentName.value;
    const newRoll = editRollNumber.value;
    const newClass = editStudentClass.value;
    const newEmail = editStudentEmail.value;
    const newPhone = editStudentPhone.value;

    editingRow.querySelector(".student-name").textContent = newName;
    editingRow.querySelector(".student-roll").textContent = newRoll;
    editingRow.querySelector(".student-class").textContent = newClass;
    editingRow.querySelector(".student-email").textContent = newEmail;
    editingRow.querySelector(".student-phone").textContent = newPhone;

    editStudent.style.display = "none";
});
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
// const subjectId = document.getElementById("subject-id");
const subjectName = document.getElementById("subject-name");
const subjectCode = document.getElementById("subject-code");
const subjectType = document.getElementById("subject-type");
const subjectClass = document.getElementById("subject-class");
const subjectTable = document.getElementById("subjectTableBody");
console.log(subjectForm);
let subjectId = 2;
if (subjectForm){
    subjectForm.addEventListener("submit",async function(event){
        event.preventDefault();
        const data ={
            // id : subjectId.value,
            name:subjectName.value,
            code:subjectCode.value,
            type:subjectType.value,
            class:subjectClass.value
        };
        console.log(data.name);
        console.log(data);
         // ===Add the subject details in the table===
        const newSubject = document.createElement("tr");
        newSubject.innerHTML=`
        <td class=".subject-id">${subjectId}</td>
        <td class=".subject-name">${data.name}</td>
        <td class=".subject-code">${data.code}</td>
        <td class=".subject-type">${data.type}</td>
        <td class=".subject-class">${data.class}</td>
        <td>
        <button class="view-btn">👁View</button>
        <button class="edit-btn">✎Edit</button>
        <button class="delete-btn">🗑</button>
        </td>
        `;
        subjectTable.appendChild(newSubject);
        subjectId++;
    })
    // ===Remove or delete an Subject===
    subjectTable.addEventListener("click", function(event) {
      console.log("Something was clicked");
      console.log("Clicked element:", event.target);

       if (event.target.classList.contains("delete-btn")) {

          const row = event.target.closest("tr");

          row.remove();
        }
        });

    // ===View the subject details===
    subjectTable.addEventListener("click", function(event) {

    if (event.target.classList.contains("view-btn")) {

        const row = event.target.closest("tr");
        const id = row.querySelector(".subject-id").textContent;
        const subjectName = row.querySelector(".subject-name").textContent;
        const subjectCode = row.querySelector(".subject-code").textContent;
        const subjectType = row.querySelector(".subject-type").textContent;
        const subjectClass = row.querySelector(".subject-class").textContent;

        alert(
            "Id: " + id +
            "\nSubject Name: " + subjectName +
            "\nSubject Code: " + subjectCode +
            "\nSubject Type: " + subjectType +
            "\nSubject Class: " + subjectClass
        );
        }
        });
}

// ===edit subject details===
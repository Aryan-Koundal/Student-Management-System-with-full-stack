// === Add student popup window ===
const addStudent = document.getElementById("add-student");
if (addStudent) {
    const studentModal = document.getElementById("student-modal");
    const close_Student_Modal = document.getElementById("close-modal");
    const cancel_Student_Modal = document.getElementById("cancel-modal");
    const add_Student_Modal = document.getElementById("add-modal")
    
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
        <td>${studentId}</td>
        <td>${data.name}</td>
        <td>${data.rollno}</td>
        <td>${data.class}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
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
        <td>${subjectId}</td>
        <td>${data.name}</td>
        <td>${data.code}</td>
        <td>${data.type}</td>
        <td>${data.class}</td>
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


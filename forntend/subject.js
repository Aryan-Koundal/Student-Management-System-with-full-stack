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
// console.log(subjectForm);
async function getsubjects() {
    if(!subjectTable) return;
    const response = await fetch("http://127.0.0.1:5000/subjects",{
        method: "GET",
    });
    const subjects = await response.json()
    console.log(subjects);
    subjectTable.innerHTML = "";
    for(let i=0;i<subjects.length;i++)
    {
        const subject = subjects[i];
        const oldsubjects = document.createElement("tr");
        oldsubjects.innerHTML = `
        <td class="subject-id">${subject.id}</td>
        <td class="subject-name">${subject.SUBJECT_name}</td>
        <td class="subject-code">${subject.SUBJECT_code}</td>
        <td class="subject-type">${subject.SUBJECT_type}</td>
        <td class="subject-class">${subject.class_name}</td>
        <td>
        <button class="view-btn">👁View</button>
        <button class="edit-btn">✎Edit</button>
        <button class="delete-btn">🗑</button>
        </td>
        `;
        subjectTable.appendChild(oldsubjects);
    }
    
}
getsubjects();

// let subjectId = 2;
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

        // ===SENDING THE DATA TO THE BACKEND OF SUBJECTS===
        const response = await fetch("http://127.0.0.1:5000/subjects",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);


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
        // subjectId++;
    })
    // ===Remove or delete an Subject===
    subjectTable.addEventListener("click",async function(event) {
      console.log("Something was clicked");
      console.log("Clicked element:", event.target);


       if (event.target.classList.contains("delete-btn")) {


          const row = event.target.closest("tr");
          const subjectId = row.cells[0].textContent;

          const response = await fetch("http://127.0.0.1:5000/subjects",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({id:Number(subjectId)})
          });
          if (response.ok){
          row.remove();
        }}
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
const editSubject = document.getElementById("edit-subject-modal");
if(editSubject){
    // const openEdit = document.querySelector(".edit-btn");
    const closeEditModal = document.getElementById("close-edit-modal");
    const cancelEditModal = document.getElementById("cancel-edit-modal");

    closeEditModal.addEventListener("click",function(){
        editSubject.style.display = "none";
    })
    cancelEditModal.addEventListener("click",function(){
        editSubject.style.display = "none";
    })

    // openEdit.addEventListener("click",function(){
    //     editStudent.style.display = "flex";
    // })
     
}
const editSubject_name = document.getElementById("edit-subject-name");
const editSubject_code = document.getElementById("edit-subject-code");
const editSubject_type = document.getElementById("edit-subject-type");
const editSubject_class = document.getElementById("edit-subject-class");
let subject_Id;
if(subjectTable){
    subjectTable.addEventListener("click",function(event){
        if(event.target.classList.contains("edit-btn")){
            const row = event.target.closest("tr");
            subject_Id = row.cells[0].textContent;
            editingRow = row;
            console.log(row.innerHTML);
            const subjectName = row.querySelector(".subject-name").textContent;
            const subjectCode = row.querySelector(".subject-code").textContent;
            const subjectType = row.querySelector(".subject-type").textContent;
            const subjectClass = row.querySelector(".subject-class").textContent;
            console.log(editSubject_name);
            console.log(editSubject_code);
            console.log(editSubject_type);
            console.log(editSubject_class);

            editSubject_name.value = subjectName;
            editSubject_code.value = subjectCode;
            editSubject_type.value = subjectType;
            editSubject_class.value = subjectClass;


            editSubject.style.display = "flex";
        }
    })
const editSubject_form = document.getElementById("edit-subject-form");
    editSubject_form.addEventListener("submit",async function(event){
        event.preventDefault();
        const newName = editSubject_name.value;
        const newCode = editSubject_code.value;
        const newType = editSubject_type.value;
        const newClass = editSubject_class.value;
        const data = {
            "name": editSubject_name.value,
            "code": editSubject_code.value,
            "type":editSubject_type.value,
            "class":editSubject_class.value
        }
        console.log(data);
        const response = await fetch(`http://127.0.0.1:5000/subjects/${subject_Id}` ,{
        method : "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        });
        if (!response.ok) {
    console.log("Failed to update subject:", response.status);
    return;
    }
        editingRow.querySelector(".subject-name").textContent = newName;
        editingRow.querySelector(".subject-code").textContent = newCode;
        editingRow.querySelector(".subject-type").textContent = newType;
        editingRow.querySelector(".subject-class").textContent = newClass;
        
        editSubject.style.display = "none";
    });
    
}
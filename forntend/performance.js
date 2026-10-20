// ===Add student marks popup window===
const add_marks = document.getElementById("add-marks");

if(add_marks)
{
    const marks_modal = document.getElementById("marks-modal");
    const close_modal = document.getElementById("close-modal");
    const cancel_modal = document.getElementById("cancel-marks");
    const save_modal = document.getElementById("save-marks");


    add_marks.addEventListener("click",function(){
        marks_modal.style.display="flex";
    })

    close_modal.addEventListener("click",function(){
        marks_modal.style.display="none";
    })

    cancel_modal.addEventListener("click",function(){
        marks_modal.style.display="none";
    })

    save_modal.addEventListener("submit",function(){
        marks_modal.style.display="none";
    })
}

// ===add subject in marks form===
const marks_form = document.getElementById("marks-form");
const add_subject = document.getElementById("add-subject");
if(add_subject)
{
    add_subject.addEventListener("click",function(){
        const subject = document.createElement("div");
        subject.className = "form-group";
        subject.id = "form-group";
        subject.innerHTML=`
        <label for="subject-id">Subject ID</label>
        <input type="number" id="subject-id" name="subject-id" placeholder="Enter subject ID" required>
        `;
        add_subject.before(subject);
        // marks_form.appendChild(subject);
        const subject_marks = document.createElement("div");
        subject_marks.className="form-group";
        subject_marks.id="form-group";
        subject_marks.innerHTML=`
        <label for="subject-marks">Marks</label>
        <input type="number" id="subject-marks" name="subject-marks" placeholder="Enter marks obtained" min="0" required>
        `;
        add_subject.before(subject_marks);
        // marks_form.appendChild(subject_marks);
    });
}

// ===show the marks table===
const student_info = document.querySelector(".student-info");
const show_button = document.querySelector(".toggle-marks-btn");
const marks_table = document.querySelector(".marks-table-container");
const marks_container = document.getElementById("marks-container");

if (marks_container) {
    marks_container.addEventListener("click", function (event) {
        const button = event.target.closest(".toggle-marks-btn");

        if (!button) return;

        const studentCard = button.closest(".student-marks-card");
        const marksTable = studentCard.querySelector(".marks-table-container");

        marksTable.hidden = !marksTable.hidden;
        button.textContent = marksTable.hidden ? "▼" : "▲";
    });
}
// ===adding the marks===
const marks_modal = document.getElementById("marks-modal");
const student_id = document.getElementById("student-id");
if(marks_form)
{
    marks_form.addEventListener("submit",async function(event){
        event.preventDefault();
        const subjects =[];
        const subject_ids = document.querySelectorAll('input[name="subject-id"]');
        const subject_marks = document.querySelectorAll('input[name="subject-marks"]');
        // const save = document.getElementById("save-marks");
        for (let i = 0; i < subject_ids.length; i++) {
         subjects.push({
         subject_id: Number(subject_ids[i].value),
         marks: Number(subject_marks[i].value)
        });
        }
        const data ={
            student_id:student_id.value,
            subjects:subjects
        };
        console.log(data);

        const response = await fetch("http://127.0.0.1:5000/performance",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),
        });

       console.log(response);
       const tableBody = document.querySelector(".marksTableBody");

    //    data.subjects.forEach(function(subject) {
    //    const row = document.createElement("tr");

    //    row.innerHTML = `
    //     <td class="subject-id">${subject.subject_id}</td>
    //     <td class="subject-name">-</td>
    //     <td class="subject-code">-</td>
    //     <td class="subject-marks">${subject.marks}</td>
    //     <td class="student-actions">
    //         <button type="button" class="edit-btn">✎ Edit</button>
    //         <button type="button" class="delete-btn">🗑</button>
    //     </td>
    //     `;

    //     tableBody.appendChild(row);
    //  });
        
    });
}

// ===delete subject details===

// const subject_table = document.querySelector(".marksTableBody");
// const subject_table = document.getElementById("marksTableBody")
// const marks_container = document.querySelector(".marks-container");
// const delete_button = document.querySelectorAll(".delete-btn");
// if(marks_container)
// {
//     marks_container.addEventListener("click",function(event){
//         if(event.target.classList.contains("delete-btn")){
//             const row = event.target.closest("tr");
//             row.remove();
//         }
//     });
// }



// ===getting existing students===

// const marks_form = document.getElementById("marks-form");
// const marks_modal = document.getElementById("marks-modal");
// const student_id = document.getElementById("student-id");
const subject_id = document.getElementById("subject-id");
const subject_marks = document.getElementById("subject-marks");
// const marks_container = document.getElementById("marks-container");


async function getStudents(){
    if(!marks_container) return;
    const response = await fetch("http://127.0.0.1:5000/performance",{
        method : "GET",
    });
    const data = await response.json();
    console.log(data);
    marks_container.innerHTML="";
    marks_table.innerHTML="";
    data.forEach(function(student_detail){
    const student = document.createElement("div");
    student.className="student-marks-card";
    student.innerHTML=`

                <div class="student-marks-header" student-toggle>

                    <div class="student-info">
                        <h3 class="student-name">${student_detail.student_name}</h3>
                        <p class="student-rollno">${student_detail.student_rollno}</p>
                        <p class="student-class">${student_detail.student_class}</p>
                    </div>

                    <div class="student-performance">

                        <div class="total-marks">
                            <span>Total Marks</span>
                            <h3 class="total-marks-value">0</h3>
                        </div>

                        <div class="percentage">
                            <span>Percentage</span>
                            <h3 class="percentage-value">0%</h3>
                        </div>

                    </div>

                    <div>

                       <button type="button" class="toggle-marks-btn" aria-label="Show subject marks">
                           ▼
                       </button>

                    </div>

                </div>

                <div class="marks-table-container" hidden>

                    <table class="marks-table">

                        <thead>
                            <tr>
                                <th>Subject ID</th>
                                <th>Subject Name</th>
                                <th>Subject Code</th>
                                <th>Marks</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody class="marksTableBody"></tbody>

                    </table>

                </div>
            `;
        marks_container.appendChild(student);

        const subject_table_body = student.querySelector(".marksTableBody");
        student_detail.subjects.forEach(function(subject){
            const subjects = document.createElement("tr");
            subjects.dataset.marksId = subject.marks_id;
            subjects.innerHTML=`
                            <td class="subject-id">${subject.subject_id}</td>
                            <td class="subject-name">${subject.subject_name}</td>
                            <td class="subject-code">${subject.subject_code}</td>
                            <td class="subject-marks">${subject.subject_marks}</td>
                            <td class="student-actions">
                            
                                <button class="edit-btn" data-action="edit">
                                ✎ Edit
                                </butgit ton>

                                <button class="delete-btn" data-action="delete">
                                🗑
                                </button>
                            </td>
        `;
        subject_table_body.appendChild(subjects);
        });


        // ===calculating total marks and percentage===
        let totalMarks = 0;

       student_detail.subjects.forEach(function(subject) {
       totalMarks += Number(subject.subject_marks);
       });

      const maximumMarks = student_detail.subjects.length * 100;
      const percentage = maximumMarks > 0 ? (totalMarks / maximumMarks) * 100 : 0;
      student.querySelector(".total-marks-value").textContent = `${totalMarks} / ${maximumMarks}`;
      student.querySelector(".percentage-value").textContent = `${percentage.toFixed(2)}%`;


        // ===delete student subject marks===
        subject_table_body.addEventListener("click",async function(event){
           if(event.target.classList.contains("delete-btn"))
           {
            const row = event.target.closest("tr");
            const marks_id = row.dataset.marksId;
            if (confirm("Are you sure you want to delete these marks?"))
            {
                const response = await fetch(`http://127.0.0.1:5000/performance/${marks_id}`,{
                    method:"DELETE",

            })
            }
            row.remove();
        }});
        });
}
getStudents();

// ===edit subject marks form===
const open_form = document.getElementById("edit-marks-modal");
// const edit_button = document.querySelector(".edit-btn");
const edit_subject_id = document.getElementById("edit-subject-id");
const edit_subject_marks = document.getElementById("edit-subject-marks");
let editingRow = null;
// console.log(edit_button);
if(marks_container)
{
    marks_container.addEventListener("click",function(event){
        const edit_button = event.target.closest(".edit-btn")
        if(!edit_button) return;
        const row = event.target.closest("tr");
        editingRow = row;
        const subject_id = row.querySelector(".subject-id").textContent;
        const subject_marks = row.querySelector(".subject-marks").textContent;

        edit_subject_id.value = subject_id;
        edit_subject_marks.value = subject_marks;

        open_form.style.display="flex";
    });

}

// ===save edit===
const edit_form = document.querySelector("#edit-marks-form");
const save_button = document.querySelector(".save-btn");
if (edit_form)
{
    edit_form.addEventListener("submit", async function(event){
        event.preventDefault();

        const new_id = edit_subject_id.value;
        const new_marks = edit_subject_marks.value;
        const marks_id = editingRow.dataset.marksId;
        const data = {
            "subject_id": new_id,
            "new_marks": new_marks,
        };

        const response = await fetch(`http://127.0.0.1:5000/performance/${marks_id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data),
        });
        console.log(response);

        editingRow.querySelector(".subject-id").textContent = new_id;
        editingRow.querySelector(".subject-marks").textContent = new_marks;

        open_form.style.display="none";
    });
}

// close,cancel edit modal
if(open_form)
{
    const close_edit_modal = document.querySelector(".close-edit-modal");
    close_edit_modal.addEventListener("click",function(){
        open_form.style.display="none";
    });

    const cancel_edit_modal = document.querySelector(".cancel-edit-btn");
    cancel_edit_modal.addEventListener("click",function(){
        open_form.style.display="none";
    });
}

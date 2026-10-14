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

const marks_modal = document.getElementById("marks-modal");
const student_id = document.getElementById("student-id");
const subjects =[];
if(marks_form)
{
    marks_form.addEventListener("submit",function(event){
        event.preventDefault();
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

        const student = document.createElement("div");
        student.className="student-marks-card";
        student.innerHTML=`

                <div class="student-marks-header" student-toggle>

                    <div class="student-info">
                        <h3 class="student-name">${student.name}</h3>
                        <p class="student-rollno">${student.rollno}</p>
                        <p class="student-class">${student.class}</p>
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

                        <tbody class="marksTableBody">
                            <td class="subject-id"></td>
                            <td class="subject-name"></td>
                            <td class="subject-code"></td>
                            <td class="subject-marks"></td>
                            <td class="student-actions">
                                <button class="view-btn" data-action="view">
                                👁 View
                                </button>

                                <button class="edit-btn" data-action="edit">
                                ✎ Edit
                                </button>

                                <button class="delete-btn" data-action="delete">
                                🗑
                                </button>
                            </td>
                        </tbody>

                    </table>

                </div>
            `;
            marks_container.appendChild(student);
        
    });
}

// ===Add marks to student===

// const marks_form = document.getElementById("marks-form");
// const marks_modal = document.getElementById("marks-modal");
// const student_id = document.getElementById("student-id");
const subject_id = document.getElementById("subject-id");
const subject_marks = document.getElementById("subject-marks");
// const marks_container = document.getElementById("marks-container");

// function getStudents(){
//     if(!marks_container) return;
//     const student = document.createElement("div");
//     student.className="student-marks-card";
//     student.innerHTML=`

//                 <div class="student-marks-header" student-toggle>

//                     <div class="student-info">
//                         <h3 class="student-name">${student.name}</h3>
//                         <p class="student-rollno">${student.rollno}</p>
//                         <p class="student-class">${student.class}</p>
//                     </div>

//                     <div class="student-performance">

//                         <div class="total-marks">
//                             <span>Total Marks</span>
//                             <h3 class="total-marks-value">0</h3>
//                         </div>

//                         <div class="percentage">
//                             <span>Percentage</span>
//                             <h3 class="percentage-value">0%</h3>
//                         </div>

//                     </div>

//                     <div>

//                        <button type="button" class="toggle-marks-btn" aria-label="Show subject marks">
//                            ▼
//                        </button>

//                     </div>

//                 </div>

//                 <div class="marks-table-container" hidden>

//                     <table class="marks-table">

//                         <thead>
//                             <tr>
//                                 <th>Subject ID</th>
//                                 <th>Subject Name</th>
//                                 <th>Subject Code</th>
//                                 <th>Marks</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>

//                         <tbody class="marksTableBody">
//                             <td class="subject-id"></td>
//                             <td class="subject-name"></td>
//                             <td class="subject-code"></td>
//                             <td class="subject-marks"></td>
//                             <td class="student-actions">
//                                 <button class="view-btn" data-action="view">
//                                 👁 View
//                                 </button>

//                                 <button class="edit-btn" data-action="edit">
//                                 ✎ Edit
//                                 </button>

//                                 <button class="delete-btn" data-action="delete">
//                                 🗑
//                                 </button>
//                             </td>
//                         </tbody>

//                     </table>

//                 </div>
//             `;
//             marks_container.appendChild(student);
// }
// getStudents();
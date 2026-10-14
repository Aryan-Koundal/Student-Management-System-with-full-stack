// ===Add student marks popup window===
const add_marks = document.getElementById("add-marks");

if(add_marks)
{
    const marks_modal = document.getElementById("marks-modal");
    const close_modal = document.getElementById("close-modal");
    const cancel_modal = document.getElementById("cancel-modal");
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

// ===Add marks to student===
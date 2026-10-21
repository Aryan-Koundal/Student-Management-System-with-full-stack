// const stats = document.querySelector(".stats");
// const total_students = document.querySelector("total-students");

async function dashboard()
{
    const response = await fetch("http://127.0.0.1:5000/index",{
        method:"GET",
    })
    const data = await response.json();
    console.log(data);

    let total_student = data.total_students.length;
    const count = document.querySelector(".student-count");
    count.textContent = total_student;
    let total_subject = data.total_subjects.length;
    const count2 = document.querySelector(".subject-count");
    count2.textContent = total_subject;
    let average_percentage = data.average_percentage;
    const average = document.querySelector(".average");
    average.textContent =  `${Number(average_percentage).toFixed(2)}%`;
}
dashboard();
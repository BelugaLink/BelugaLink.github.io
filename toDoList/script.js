{/* <input type="text" id="inputTask">
<button id="submitBtn">submit</button> */}
const doc = {
    inputTask: document.getElementById("inputTask"),
    submitBtn: document.getElementById("submitBtn"),
    taskContainer: document.getElementById("taskContainer")
}
let taskList = [
    {tugas: "Tugas bindo"},
    {tugas: "Tugas binggris"},
    {tugas: "Tugas kk"}
];
function deleteTask (indeks) {
    taskList.splice(indeks, 1);
    rendering()
}
function creatDeleteTask () {
    const deleteBtns = document.querySelectorAll(".deleteBtn")
    deleteBtns.forEach((button, indeks) => {
        button.addEventListener('click', () => {deleteTask(indeks)})
    })
}

function rendering () {
    doc.taskContainer.innerHTML = ''
    taskList.forEach((item, indeks) => {
        doc.taskContainer.innerHTML += `
        <p>${indeks + 1}. ${item.tugas}</p>j
        <button class="deleteBtn">Delete</button>
        `
    })
    creatDeleteTask()
} 
function submitTask(task) {
    if (typeof task !== 'string' || task === '') {
        doc.taskContainer.innerHTML = '<p>Masukkan nilai yang valid</p>'
        return
    }
    let cleanValue = task.charAt(0).toUpperCase() + task.slice(1).toLowerCase();
    cleanValue = cleanValue.replace(/\s+/g, ' ').trim()
    taskList.push({tugas: cleanValue})
    rendering()
}
doc.submitBtn.addEventListener('click', () => {submitTask(doc.inputTask.value)})
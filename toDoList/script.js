{/* <input type="text" id="inputTask">
<button id="submitBtn">submit</button> */}
const doc = {
    inputTask: document.getElementById("inputTask"),
    submitBtn: document.getElementById("submitBtn"),
    taskContainer: document.getElementById("taskContainer")
}
let taskList = [];

function deleteTask (indeks) {
    let yesNo = confirm('Apakah anda yakin ingin menghapus tugas ini?')
    if (!yesNo) {
        return
    }
    taskList.splice(indeks, 1);
    rendering()
}
function creatDeleteTask () {
    const deleteBtns = document.querySelectorAll(".deleteBtn")
    deleteBtns.forEach((button, indeks) => {
        button.addEventListener('click', () => {deleteTask(indeks)})
    })
}

function editTask (indeks) {
    let newValue = prompt('Masukkan isi baru')
    if (newValue == '') {
        alert('Tidak boleh kosong')
        return
    }
    if (!newValue) {
        return
    }
    taskList[indeks].tugas = newValue
    rendering()
}

function createEditTask () {
    const editBtns = document.querySelectorAll(".editBtn")
    editBtns.forEach((button, indeks) => {
        button.addEventListener('click', () => {editTask(indeks)})
    })
}

function rendering () {
    doc.taskContainer.innerHTML = ''
    taskList.forEach((item, indeks) => {
        doc.taskContainer.innerHTML += `
        <p>${indeks + 1}. ${item.tugas}</p>
        <button class="deleteBtn">Delete</button> <button class="editBtn">Edit</button>
        `
    })
    creatDeleteTask()
    createEditTask()
} 
function submitTask(task) {
    doc.inputTask.value = ''
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
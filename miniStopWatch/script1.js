    // <p id="display"></p>
    // <button id="startBtn">start</button>
    // <button id="stopBtn">stop</button>
    // <button id="resetBtn">reset</button>
const doc = { 
    display: document.getElementById("display"),
    startBtn: document.getElementById("startBtn"),
    stopBtn: document.getElementById("stopBtn"),
    resetBtn: document.getElementById("resetBtn"),
}
const time = {
    detik: 57,
    menit: 59,
    jam: 0
}
let interval;
let isRunning = true
function showTimer(detik, menit, jam) {
    const formatDetik = String(detik).padStart(2, "0")
    const formatMenit = String(menit).padStart(2, "0")
    const formatJam = String(jam).padStart(2, "0")
    doc.display.textContent = `${formatJam}:${formatMenit}:${formatDetik}`
}
function startTimer() {
    if (isRunning) {
    let detik = time.detik
    let menit = time.menit
    let jam = time.jam
    interval = setInterval(() => {
    detik++
    if(detik === 60) {
        detik = 0
        menit++
    }
    if(menit === 60) {
        menit = 0
        jam++
    }
    showTimer(detik, menit, jam)
    }, 1000)
    }
    isRunning = false
}
function stopTimer() {
    clearInterval(interval)
    isRunning = true
}
function resetTimer() {

}
doc.startBtn.addEventListener('click', startTimer)
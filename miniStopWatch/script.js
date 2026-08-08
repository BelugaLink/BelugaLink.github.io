const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let detik = 58;
let menit = 59;
let jam = 0;
let timer;
let isRunning = false;
startBtn.addEventListener('click', () => {
    if (!isRunning) {
    timer = setInterval( ()=> {
    detik++
    if (detik === 60) {
        detik = 0
        menit ++
    }
    if (menit === 60) {
        menit = 0
        jam++
    }
    const formatDetik = String(detik).padStart(2, "0")
    const formatMenit = String(menit).padStart(2, "0")
    const formatJam = String(jam).padStart(2, "0")
    display.textContent = `${formatJam}:${formatMenit}:${formatDetik}`
    }, 1000)
    }
    isRunning = true;
})
stopBtn.addEventListener('click',() => {
    isRunning = false
    clearInterval(timer)
})
resetBtn.addEventListener("click", () => {
    clearInterval(timer);

    jam = menit = detik = 0;

    isRunning = false;

    display.textContent = "00:00:00";
});
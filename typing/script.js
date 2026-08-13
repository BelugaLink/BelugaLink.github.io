let kumpulanKata = [
    'Kucing itu sedang tidur di bawah meja',
    'Saya sedang belajar pemrograman JavaScript',
    'Latihan setiap hari dapat meningkatkan kemampuan',
    'Programmer harus terbiasa memecahkan berbagai masalah',
    'Membuat proyek adalah cara yang bagus untuk belajar coding',
    'Jangan takut melakukan kesalahan ketika sedang belajar',
    'Kode yang sederhana biasanya lebih mudah dipahami',
    'JavaScript dapat digunakan untuk membuat berbagai aplikasi',
    'Saya ingin menjadi seorang programmer yang hebat',
    'Belajar pemrograman membutuhkan kesabaran dan konsistensi',
    'Setiap masalah dalam pemrograman pasti memiliki solusi',
    'Debugging adalah bagian penting dalam proses membuat program',
    'Semakin sering berlatih semakin cepat kita memahami konsep baru',
    'Membaca dokumentasi dapat membantu kita memahami sebuah teknologi',
    'Jangan menyerah hanya karena kode yang dibuat mengalami error',
    'Kemampuan memecahkan masalah sangat penting bagi seorang programmer',
    'Membuat proyek sendiri dapat membantu meningkatkan kemampuan coding',
    'Pemrograman mengajarkan kita untuk berpikir secara logis dan sistematis',
    'Kesalahan dalam kode bukanlah kegagalan tetapi kesempatan untuk belajar',
    'Dengan latihan yang konsisten kemampuan pemrograman akan terus berkembang'
]

const tempatKata = document.getElementById('tampilKata')
const tempatInput = document.getElementById('inputUser')
const tempatRespon = document.getElementById('response')
const timerContainer = document.getElementById('timerContainer')
const randomNumberArr = Math.floor(Math.random() * kumpulanKata.length);
const randomKata = kumpulanKata[randomNumberArr]

tempatKata.innerText = `${randomKata}`

let interval
let detik = 15
let isRunning = false
let benar = 0
let diketik = randomKata.length
function timer() {
    if (!isRunning) {
        interval = setInterval(() => {
        detik--
        if (detik <= 0) {
            selesai()
            timerContainer.textContent = "Waktu habis"
            return
        }
        timerContainer.textContent = detik
    },1000)
        isRunning = true
    }
}
function selesai() {
    clearInterval(interval)
    let akurasi = Math.round(benar/diketik*100)
    timerContainer.textContent = "Selesai"
    tempatKata.innerText = `Selesai, akurasi = ${akurasi}%`
    if (akurasi > 100) {
    tempatKata.innerText = `Selesai, akurasi = 100%`
    }
    tempatInput.style.display = 'none'
}
tempatInput.addEventListener('input', (event) => {
    timer()
const input = event.target.value
    if (event.inputType === 'deleteContentBackward') {
        tempatRespon.lastChild.remove()
        return
    }
    if (input[input.length-1] == randomKata[input.length-1]) {
        benar++
        tempatRespon.innerHTML += `<span style="color: green;">${event.target.value[event.target.value.length-1]}</span>`
    }
    else {
        tempatRespon.innerHTML += `<span style="color: red;">${event.target.value[event.target.value.length-1]}</span>`
    }
    if (input.length >= randomKata.length) {
        selesai()
    }
})
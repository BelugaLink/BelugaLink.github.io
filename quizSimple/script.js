const doc = {
    quizContainer: document.getElementById("quizContainer"),
    questionPlace: document.getElementById("questionPlace"),
    inputUser: document.getElementById("inputUser"),
    submitBtn: document.getElementById("submitBtn"),
    result: document.getElementById("result"),
    selesai: document.getElementById("selesai"),
    matematika: document.getElementById("matematika"),
    javascript: document.getElementById("javascript"),
    categoryTitle: document.getElementById("categoryTitle"),
    scor: document.getElementById("scor"),
    timer: document.getElementById("timer")
}

const quizData = [
  {
    category: "Matematika",
    questions: [
      { question: "Berapakah hasil dari 12 dikali 12?", answer: "144" },
      { question: "Berapakah akar kuadrat dari 81?", answer: "9" },
      { question: "Hasil dari 50 dibagi 2 adalah...?", answer: "25" },
      { question: "Berapakah hasil dari 15 ditambah 27?", answer: "42" },
      { question: "Jumlah sudut dalam sebuah segitiga adalah... derajat?", answer: "180" }
    ]
  },
  {
    category: "Programming",
    questions: [
      { question: "Kata kunci untuk mendeklarasikan variabel konstan di JavaScript adalah...?", answer: "const" },
      { question: "Bahasa markah yang digunakan untuk membuat struktur web adalah...?", answer: "html" },
      { question: "Tipe data yang hanya bernilai true atau false adalah...?", answer: "boolean" },
      { question: "Fungsi bawaan JavaScript untuk mencetak ke konsol adalah console...?", answer: "log" },
      { question: "Bahasa yang digunakan untuk merancang tampilan/gaya web adalah...?", answer: "css" }
    ]
  }
];
let time = {
    detik: 0,
    menit: 0,
    jam: 0
}
let categoryMapel;
let index = 0;
let benar = 0;
let interval;
function startTimer () {
    interval = setInterval(() => {
    time.detik++
    if(time.detik === 60) {
        time.detik = 0
        time.menit ++
    }
    if(time.menit === 60) {
        time.menit = 0
        time.jam ++
    }
    formatTimer()
    }, 1000)
}
function formatTimer (finish) {
    if (finish) {
        return doc.timer.textContent
    }
    const formatDetik = String(time.detik).padStart(2, "0")
    const formatMenit = String(time.menit).padStart(2, "0")
    const formatJam = String(time.jam).padStart(2, "0")
    doc.timer.textContent = `${formatJam}:${formatMenit}:${formatDetik}`
}
function selectMapel(mapel) {
    let iyaTidak = confirm('Apakah anda yakin ingin masuk mapel ini?')
    if (iyaTidak) {
        startTimer()
        categoryMapel = mapel
        doc.categoryTitle.textContent = quizData[mapel].category
        doc.scor.classList.add('hidden');
        doc.matematika.classList.add('hidden')
        doc.javascript.classList.add('hidden')
        doc.quizContainer.classList.remove('hidden')
        showQuiz()
    }
}
doc.matematika.addEventListener('click', () => {
    selectMapel(0)
})
doc.javascript.addEventListener('click', () => {
    selectMapel(1)
})
 
function clearInputF (rawInput) {
    let clearInput;
    if(typeof rawInput !== 'string') {
        return false;
    };
    clearInput = rawInput.toLowerCase();
    return clearInput.replace(/\s+/g, '')
};

function selesaiQuiz() {
    clearInterval(interval)
    doc.quizContainer.classList.add('hidden');
    doc.scor.classList.remove('hidden')
    doc.scor.textContent = `
    Anda telah menyelesaikan quiz dengan
    Skor: ${benar}/${quizData[categoryMapel].questions.length} Waktu: ${`${formatTimer(true)}`} Ulasan: ${ulasan(benar)}`
    categoryMapel = null
    index = benar = 0
}

function showQuiz () {
    if (index >= quizData[categoryMapel].questions.length) {
        setTimeout(() => {
            selesaiQuiz()
        }, 850);
        return
        doc.javascript.classList.add('hidden')
    }
    doc.questionPlace.innerHTML = `No.${index+1} ${quizData[categoryMapel].questions[index].question}`
}

function notifikasi(status, variabel) {
    if (status == 'benar') {
        variabel.className = 'correct'
        variabel.textContent = 'Jawaban benar!!';
    }
        else if (status == 'invalid') {
            variabel.className = 'invalid'
            variabel.textContent = 'Masukkan Nilai Yang valid';
    }
            else {
                variabel.className = 'wrong'
                variabel.textContent = 'Jawaban salah!!';
    }
    setTimeout(() => {
        variabel.textContent = '';
        variabel.className = ''
    }, 1250);
    return variabel
}
function ulasan(benar) {
    if (benar >= 5) {
        return "deh jago mi"
    } else if (benar > 4) {
        return "sedikitpi tapi bagusmi"
    } else if (benar > 3) {
        return "Lumayan lah tapi masih harus diperbaiki"
    } else if (benar > 2) {
        return "apanaji anak telkom?"
    } else if(benar > 1) {
        return "belajar moko dulu"
    } else {
        return "orang asbun"
    }
}
function quizCek () {
    const clearInput = clearInputF(doc.inputUser.value);
    const result = doc.result;
    if(clearInput == false){
        notifikasi('invalid', result)
        return
    };
    if(clearInput == quizData[categoryMapel].questions[index].answer) {
        notifikasi('benar', result)
        doc.inputUser.value = ''
        benar = index += 1
        showQuiz() 
        return
    }else {
        notifikasi('salah', result)
        doc.inputUser.value = ''
        index++
        showQuiz()
    }
};
doc.submitBtn.addEventListener('click', quizCek);
doc.inputUser.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        quizCek()
    }
})
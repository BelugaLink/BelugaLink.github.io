const doc = {
    inputUser: document.getElementById("inputUser"),
    submitBtn: document.getElementById("submitBtn"),
    result: document.getElementById("result"),
    questionPlace: document.getElementById("questionPlace"),
    selesai: document.getElementById("selesai"),
    quizContainer: document.getElementById("quizContainer"),
    matematika: document.getElementById("matematika"),
    javascript: document.getElementById("javascript"),
    categoryTitle: document.getElementById("categoryTitle"),
    scor: document.getElementById("scor")
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
let categoryMapel;
let index = 0;
let benar = 0;

doc.matematika.addEventListener('click', () => {
    let iyaTidak = confirm('Apakah anda yakin ingin masuk mapel ini?')
    if (iyaTidak) {
    doc.scor.classList.add('hidden');
    doc.categoryTitle.textContent = quizData[1].category
    categoryMapel = 0
    doc.matematika.classList.add('hidden')
    doc.javascript.classList.add('hidden')
    showQuiz()
    doc.quizContainer.classList.remove('hidden')
    }
})

doc.javascript.addEventListener('click', () => {
    let iyaTidak = confirm('Apakah anda yakin ingin masuk mapel ini?')
    if (iyaTidak) {
    doc.scor.classList.add('hidden');
    doc.categoryTitle.textContent = quizData[1].category
    categoryMapel = 1
    doc.matematika.classList.add('hidden')
    doc.javascript.classList.add('hidden')
    doc.quizContainer.classList.remove('hidden')
    showQuiz()
    }
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
    doc.quizContainer.classList.add('hidden');
    doc.scor.classList.remove('hidden')
    doc.scor.textContent = `
    Anda telah menyelesaikan quiz dengan
    Skor: ${benar}/${quizData[categoryMapel].questions.length}`
    categoryMapel = null
    index = 0;
    benar = 0
}

function showQuiz () {
    if (index >= quizData[categoryMapel].questions.length) {
        selesaiQuiz()
        return
        doc.javascript.classList.add('hidden')
    }
    doc.questionPlace.innerHTML = `No.${index+1} ${quizData[categoryMapel].questions[index].question}`
}

function notifikasi(status, variabel) {
    if (status == 'benar') {
        variabel.className = 'correct'
        variabel.textContent = 'Jawaban benar!!';
    setTimeout(() => {
        variabel.textContent = '';
        variabel.className = ''
        }, 1250);
    }
        else if (status == 'invalid') {
            variabel.className = 'invalid'
            variabel.textContent = 'Masukkan Nilai Yang valid';
            setTimeout(() => {
            variabel.textContent = '';
            variabel.className = ''
            }, 1250);

    }
            else {
                variabel.className = 'wrong'
                variabel.textContent = 'Jawaban salah!!';
                setTimeout(() => {
                variabel.textContent = '';
                variabel.className = ''
                }, 1250);
    }

    return variabel
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
        benar++
        index++
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
doc.inputUser.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        quizCek()
    }
})
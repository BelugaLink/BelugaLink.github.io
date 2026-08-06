const doc = {
    inputUser: document.getElementById("inputUser"),
    submitBtn: document.getElementById("submitBtn"),
    result: document.getElementById("result"),
    quiz: document.getElementById("quiz"),
    selesai: document.getElementById("selesai")
}
const quizData = [
    {
        id: 1,
        question: "Apa nama ibu kota Indonesia?",
        answer: "jakarta"
    },
    {
        id: 2,
        question: "Apa nama planet terdekat dari matahari?",
        answer: "merkurius"
    },
    {
        id: 3,
        question: "Berapakah hasil dari 5 dikali 5?",
        answer: "25"
    },
    {
        id: 4,
        question: "Lautan terluas di dunia adalah samudera...?",
        answer: "pasifik"
    },
    {
        id: 5,
        question: "Hewan mamalia terbesar di bumi saat ini adalah...?",
        answer: "pausbiru"
    }
];

function clearInputF (rawInput) {
    let clearInput;
    if(typeof rawInput !== 'string') {
        return false;
    };
    clearInput = rawInput.toLowerCase();
    return clearInput.replace(/\s+/g, '')
};

let index = 0
let benar = 0

function selesaiQuiz() {
        doc.submitBtn.style.display = 'none'
        doc.inputUser.style.display = 'none'
        doc.result.style.display = 'none'
        doc.quiz.innerHTML = `Skor: ${benar}/${quizData.length}`
    }

function showQuiz () {
    if (index >= quizData.length) {
        selesaiQuiz()
        return
    }
    doc.quiz.innerHTML = `No.${index+1} ${quizData[index].question}`
}

function notifikasi(status, variabel) {
    if (status == 'benar') {
        variabel.className = 'correct'
        variabel.innerHTML = 'Jawaban benar!!';
    setTimeout(() => {
        variabel.innerHTML = '';
        variabel.className = ''
        }, 1250);
    }
        else if (status == 'invalid') {
            variabel.className = 'invalid'
            variabel.innerHTML = 'Masukkan Nilai Yang valid';
            setTimeout(() => {
            variabel.innerHTML = '';
            variabel.className = ''
            }, 1250);

    }
            else {
                variabel.className = 'wrong'
                variabel.innerHTML = 'Jawaban salah!!';
                setTimeout(() => {
                variabel.innerHTML = '';
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
    if(clearInput == quizData[index].answer) {
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

showQuiz()
doc.submitBtn.addEventListener('click', quizCek);
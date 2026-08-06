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

function cekIndex() {
    if (index >= quizData.length) {
        doc.submitBtn.style.display = 'none'
        doc.quiz.innerHTML = 'quiz sudah selesai'
    }
}

function showQuiz () {
    doc.quiz.innerHTML = quizData[index].question
}

function quizCek () {
    const clearInput = clearInputF(doc.inputUser.value);
    const result = doc.result;
    if(clearInput == false){
        result.innerHTML = 'Masukkan Nilai Yang valid';
        return
    };
    if(clearInput == quizData[index].answer) {
        result.innerHTML = 'Jawaban benar!!';
        doc.inputUser.value = ''
        index++ 
        cekIndex()
        showQuiz()
        return
    }else {
        result.innerHTML = 'Jawaban Salah!!';
    }
};

showQuiz()
doc.submitBtn.addEventListener('click', quizCek);
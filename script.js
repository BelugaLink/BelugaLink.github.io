const projekContainer = document.getElementById('adalah');
const totalProjekElem = document.getElementById('totalProjek');

const listProjek = [
    { namaProjek: 'Cari user github', path: '/githubUser/index.html', desc: 'Pencarian profil GitHub via API' },
    { namaProjek: 'Latihan API', path: '/randomUser/index.html', desc: 'Generate data pengguna secara acak' },
    { namaProjek: 'Typing Test', path: '/typing/index.html', desc: 'Uji ketepatan mengetik dalam kurun waktu' },
    { namaProjek: 'Tic Tac Toe Vs Bot', path: '/Tictac/index.html', desc: 'Game tik tak tu tapi melawan bot' },
    { namaProjek: 'Tic Tac Toe Vs Orang', path: '/TicTacVS/index.html', desc: 'Game tik tak tu' },
    { namaProjek: 'Quiz', path: '/quizSimple/index.html', desc: 'Quiz sederhana' },
    { namaProjek: 'Batu Gunting Kertas', path: '/Rps/index.html', desc: 'Batu gunting kertas' },
    { namaProjek: 'To do list', path: '/toDoList/index.html', desc: 'Todolist pada umumnya' },
    { namaProjek: 'Stopwatch', path: '/miniStopWatch/index.html', desc: 'BELUMM JADIII' }
];

// Menampilkan total projek secara otomatis pada statistik
if (totalProjekElem) {
    totalProjekElem.innerText = listProjek.length;
}

// Render daftar projek
projekContainer.innerHTML = '';
listProjek.forEach(projek => {
    projekContainer.innerHTML += `
        <a href="${projek.path}" class="card-projek">
            <div class="card-title">${projek.namaProjek}</div>
            <div class="card-desc">${projek.desc}</div>
        </a>
    `;
});
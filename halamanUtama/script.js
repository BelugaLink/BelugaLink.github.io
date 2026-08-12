const projekContainer = document.getElementById('adalah')

const listProjek = [
    {namaProjek: 'Tic Tac Toe', path: '/Tictac/index.html'},
    {namaProjek: 'Quiz', path: '/quizSimple/index.html'},
    {namaProjek: 'Batu Gunting Kertas', path: '/Rps/index.html'},
    {namaProjek: 'To do list', path: '/toDoList/index.html'},
    {namaProjek: 'Stopwatch', path: '/miniStopWatch/index.html'},
]

for (let i = 0; i < listProjek.length; i++) {
    console.log('halo')
    projekContainer.innerHTML += `<a href="${listProjek[i].path}">${listProjek[i].namaProjek}</a><br>`
}

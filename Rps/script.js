    // <p id="result">This would be the container</p>
    // <button id="rock">rock</button>
    // <button id="paper">paper</button>
    // <button id="scissor">scissor</button>
const doc = {
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissor: document.getElementById("scissor"),
    result: document.getElementById("result")
}
const pattern = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
}
function computer () {
    const randomNum = Math.floor(Math.random() * 10)
    if (randomNum >= 6) {
        return "rock"
    }else if (randomNum >= 3) {
        return "paper"
    }else {
        return "scissor"
    }
}
function start (player) {
    const computerMove = computer()
    if (computerMove == pattern[player]) {
        return doc.result.innerHTML = 
        `Kamu menang!<br>
        computer: ${computerMove}<br>
        kamu: ${player}`
    }else if (player == pattern[computerMove]) {
        return doc.result.innerHTML = 
        `Kamu kalah!<br>
        computer: ${computerMove}<br>
        kamu: ${player}`
    }else {
        return doc.result.innerHTML = 
        `Kamu seri!<br>
        computer: ${computerMove}<br>
        kamu: ${player}`
    }
}
doc.rock.addEventListener('click', () => {
    start("rock")
})
doc.paper.addEventListener('click', () => {
    start("paper")
})
doc.scissor.addEventListener('click', () => {
    start("scissor")
})
let papan = [
    '','','',
    '','','',
    '','',''
]

let winPatterns = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertikal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
]
const container = document.getElementById('container')

function cekSeri() {
    return papan.every((item) => item != '')
}

function cekKemenangan() {
    const menang = winPatterns.some((item) => {
        const [a, b, c] = item
        if (papan[a] == '' &&
            papan[b] == '' &&
            papan[c] == '') {
            return
        } 
        if (papan[a] === papan[b] &&
            papan[b] === papan[c]) {
            container.innerHTML = `${papan[a]} menang`
            return true
        }
    })
        
    return menang


}

function start() {
    papan.forEach((item, indeks) => {
        if (indeks == 2 || indeks == 5) {
            container.innerHTML += `<button id="${indeks}">${papan[indeks]}</button><br>`
            return
        }
        container.innerHTML += `<button id="${indeks}">${papan[indeks]}</button>`
    })
}
start()
container.addEventListener('click', (event) => {
    if (papan[event.target.id] == 'X' || papan[event.target.id] == 'O') {
        console.log(1)
        return
    }
    papan[event.target.id] = "X"
    container.innerHTML = ""
    const menang = cekKemenangan()
    if (menang) {
        return
    }
    const seri = cekSeri()
    if (seri) {
        container.innerHTML =  `seri`
        return
    }
    computerMove()
    const menangg = cekKemenangan()
    if (menangg) {
        return
    }
    const serii = cekSeri()
    if (serii) {
        container.innerHTML =  `seri`
        return
    }
    start()
})
function computerMove () {
    const minArr = 0;
    const randomNumberArr = Math.floor(Math.random() * (8 - 0 + 1)) + minArr;
    if (papan[randomNumberArr] != 'X' && papan[randomNumberArr] != 'O') {
        papan[randomNumberArr] = "O"
    }else {
        computerMove()
    }
}
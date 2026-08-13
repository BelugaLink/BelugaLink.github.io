const button = document.getElementById('tombol')
const container = document.getElementById('container')
const inputUser = document.getElementById('inputUser')

function rapihkanInput() {
    let cleanInput = inputUser.value.toLowerCase().trim()
    inputUser.value = ''
    return cleanInput
}

async function ambilRepositories(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        if (!response.ok) {
            throw new Error(`Api bermasalah`)
        }
        const repos = await response.json()
        if (repos.length == 0) {
            return 'User tidak memiliki repo'
        }
        return repos
    } catch (error) {
        throw new Error(`Api bermasalah`)
    }
}

async function searchUsers() {
    try {
        const response = await fetch(`https://api.github.com/users/${rapihkanInput()}`)
        if (!response.ok) {
            throw new Error('Username tidak ditemukan')
        }
        const dataUser = await response.json()
        const repoUser = await ambilRepositories(dataUser.login)
        container.innerHTML = 
        `<img src="${dataUser.avatar_url}"> <br>
        Username: ${dataUser.login} <br>
        Name: ${dataUser.name || '-'} <br>
        Location: ${dataUser.location || '-'} <br>
        Followers: ${dataUser.followers} <br>
        Following: ${dataUser.following} <br>
        Repository: ${dataUser.public_repos} <br>
        <a href="https://github.com/${dataUser.login}">Lihat profil</a>
        Repository User: <br>`
        if (repoUser == 'User tidak memiliki repo') {
            container.innerHTML += `User tidak memiliki repository`
            return
        }
        if (repoUser.length <= 3) {
            for (let i = 0; i < repoUser.length; i++) {
            container.innerHTML += `<a href="${repoUser[i].html_url}">${repoUser[i].name}</a>`
        }
        }
        
        else {
            for (let i = 0; i < 3; i++) {
            container.innerHTML += `<a href="${repoUser[i].html_url}">${repoUser[i].name}</a>`
        }
        }
        
    } catch (error) {
        container.innerHTML = `<h1>${error.message}</h1>`
    }
}

 button.addEventListener('click', () => {
    container.innerHTML = '<h1>Loading....</h1>'
    searchUsers()
})
inputUser.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        container.innerHTML = '<h1>Loading....</h1>'
    searchUsers()
    }
})
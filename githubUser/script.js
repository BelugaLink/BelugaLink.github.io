const button = document.getElementById('tombol')
const container = document.getElementById('container')
const inputUser = document.getElementById('inputUser')

function rapihkanInput() {
    let cleanInput = inputUser.value.toLowerCase().trim()
    inputUser.value = ''
    return cleanInput
}

async function searchUsers() {
    try {
        const response = await fetch(`https://api.github.com/users/${rapihkanInput()}`)
        if (!response.ok) {
            throw new Error('Username tidak ditemukan')
        }
        const dataUser = await response.json()
        container.innerHTML = 
        `<img src="${dataUser.avatar_url}"> <br>
        Username: ${dataUser.login} <br>
        Name: ${dataUser.name || '-'} <br>
        Location: ${dataUser.location || '-'} <br>
        Followers: ${dataUser.followers} <br>
        Following: ${dataUser.following} <br>
        Repository: ${dataUser.public_repos} <br>
        <a href="https://github.com/${dataUser.login}">Lihat profil</a>`
    } catch (error) {
        container.innerHTML = `<h1>${error.message}</h1>`
    }
}

 button.addEventListener('click', () => {
    container.innerHTML = '<h1>Loading....</h1>'
    searchUsers()
})
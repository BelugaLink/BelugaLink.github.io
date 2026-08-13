const button = document.getElementById('tombol')
const container = document.getElementById('container')

async function getRandomUser() {
    try {
    const response = await fetch('https://randomuser.me/api/')
    const user = await response.json()
    container.innerHTML = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last} <br>`
    container.innerHTML += `${user.results[0].email} <br>`
    container.innerHTML += `${user.results[0].location.country} <br>`
    container.innerHTML += `<img src="${user.results[0].picture.large}">`
    } catch (error) {
        container.innerHTML = `<h2>Error: ${error.message}</h2>`
    }
    finally {
        console.log('user ditampilkan')
}}

button.addEventListener('click', () => {
    container.innerText = 'Loading.....'
    getRandomUser()
})
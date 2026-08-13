const button = document.getElementById('tombol')
const inputUser = document.getElementById('input')
const container = document.getElementById('container')

async function ambilGeo() {
    try{
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputUser.value}`)
    if (!response.ok) {
        throw new Error('Kota tidak ditemukan')
    }
    const dataGeo = await response.json()
    if (!dataGeo.results) {
        return
    }
        return dataGeo
    }
    catch (error){
     container.innerHTML = `<h2>Error: ${error.message}</h2>`
    }

}

async function ambilCuaca() {
    try {
    const lokasi = await ambilGeo()
    if (!lokasi) {
        container.innerHTML = `<h2>Kota tidak ditemukan</h2>`
        return
    }
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lokasi.results[0].latitude}&longitude=${lokasi.results[0].longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    if (!response.ok) {
            throw new Error('Ada kesalahan')
    }
    const dataCuaca = await response.json()
    const dataCuacaObj = dataCuaca.current
    container.innerHTML = `
    <h2>Nama kota: ${lokasi.results[0].name}</h2> <br>
    <h2>Temperatur suhu: ${dataCuacaObj.temperature_2m}</h2> <br>
    <h2>Kelembapan udara: ${dataCuacaObj.relative_humidity_2m}</h2> <br>
    <h2>Kecepatan angin: ${dataCuacaObj.wind_speed_10m}</h2>`
    }
    catch (error) {
        container.innerHTML = `<h2>Error: ${error.message}</h2>`
    }
}

button.addEventListener('click', () => {
    container.innerHTML = '<h2>Loading....</h2>'
    ambilCuaca()
    inputUser.value = ''
})
inputUser.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        container.innerHTML = '<h1>Loading....</h1>'
    ambilCuaca()
    inputUser.value = ''
    }
})
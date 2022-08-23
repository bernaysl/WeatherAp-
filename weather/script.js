const url = 'https://api.openweathermap.org/data/3.0/'
const key = 'd179594d2e19e661aa65e9a83ee17104'

const setQuery =(e) =>{
    if (e.keyCode =='13')  /*enter'a basilmis demektir */
    getResult(searchBar.value)
}


const getResult = (cityName) => {
    let query =`${url}weather?q=${cityName}?appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}



const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp =document.querySelector('.temp')
    temp.innerText= `${Math.round(result.main.temp)}C` /*yuvarlama islemi yaptik virgullü olmasin diye */

    let desc = document.querySelector('desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('minmax')
    minmax.innerText= `${Math.round(result.main.temp_min)}C /${Math.round(result.main.temp_max)}C ` 
}
const searchBar= document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery) /*enter'a basildiginda istenilen sehri yakalamak istiyoruz. set query ile hangi fonk kullanacagimi belirledim*/
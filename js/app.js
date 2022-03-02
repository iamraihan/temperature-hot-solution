const api_key = `33d8a7ea3327f2d3f499548242b542be`
const weatherTemperture = () => {
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const setInnerTxt = (id, text) => {
    document.getElementById(id).innerText = text
}
const displayTemperature = (temp) => {
    setInnerTxt('city', temp.name)
    setInnerTxt('temperture', temp.main.temp)
    setInnerTxt('cloud', temp.weather[0].main)
    // set icon 
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)

    // console.log(temp)
}
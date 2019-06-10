let weatherapi= "3fc77026b7614185821e726e77985336";
let units = "imperial"

function getPortlandWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=portland&APPID=${weatherapi}&units=imperial`).then(result => {
        return result.json();
    }).then(result => {
        init(result)
    })

}

function init(weatherResult){
    console.log(weatherResult);




    let weatherdescription = document.getElementById('weatherDescriptionHeader')
    let temperature = document.getElementById('temperature')
    let humidity = document.getElementById('humidity')
    let cityname = document.getElementById('cityHeader')
    let weathericon = document.getElementById('weatherIcon')



    //weather description
    weatherdescription.innerText = weatherResult.weather[0].description;
    //city
    cityname.innerHTML = weatherResult.name
    //weather icon
    weathericon.src = 'http://openweathermap.org/img/w/' + weatherResult.weather[0].icon + '.png';
    //temp
    temperature.innerHTML = Math.floor(weatherResult.main.temp) + "&#176 F"
    //humidity
    humidity.innerHTML = 'Humidity: ' + weatherResult.main.humidity + "%"

}

document.getElementById('refresh-twitter-button').addEventListener('click', () => {
    let twitterTL = document.getElementById('twitter-timeline')
    twitterTL.href = "https://twitter.com/" + document.getElementById('change-twitter').value;
})


getPortlandWeather()

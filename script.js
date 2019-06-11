let weatherapi= "3fc77026b7614185821e726e77985336";
let GOOGLEAPIKEY = "AIzaSyDnZVO88mEMd8F6xv2KdJ818mAsiHouHk0"
let units = "imperial"



function getPortlandWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=portland&APPID=${weatherapi}&units=imperial`).then(result => {
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
    weathericon.src = 'https://openweathermap.org/img/w/' + weatherResult.weather[0].icon + '.png';
    //temp
    temperature.innerHTML = Math.floor(weatherResult.main.temp) + "&#176 F"
    //humidity
    humidity.innerHTML = 'Humidity: ' + weatherResult.main.humidity + "%"

    console.log(document.getElementById('twitter-timeline').href)
 
}
getPortlandWeather()







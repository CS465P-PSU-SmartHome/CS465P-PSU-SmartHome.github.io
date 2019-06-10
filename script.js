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
}

getPortlandWeather()
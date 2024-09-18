const apiKey = "7c10c6829b334e03399b381da280a441";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=bhimavaram&units=metric&appid=";
document.getElementById(cityName).value;
async function checkWeather() {
    const photos = document.querySelector("photo")
    const response = await fetch(apiUrl + apiKey);
    var data = await response.json();

    console.log(data);
    document.querySelector(".temp").innerHTML = data.main.temp+'°C'
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidityvalue").innerHTML = data.main.humidity+"% <br>Humidity"
    document.querySelector(".windvalue").innerHTML = data.wind.speed + "Km/h <br>Wind Speed"

    if(data.weather[0].main == "Clouds"){
        photos.src = "images/clouds.png"
    }
    
    else if(data.weather[0].main == "Clouds"){
        photos.src = "images/clouds.png"
    }
}
checkWeather();
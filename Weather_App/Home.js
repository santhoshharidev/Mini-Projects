window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);
  });

function hasNetwork(online){
    console.log(online);
    if(online){
        let textbox =  document.querySelector('.search input');
        textbox.addEventListener("keyup", function (event) {
            if (event.keyCode == 13) {
                let cityname = document.querySelector('.search input').value;
                weather(`${cityname}`);
            }
        });
    }
    else{
        document.querySelector(".offline").style.display = "block";
        document.querySelector(".weather").style.display='none';
        document.querySelector(".invalid").style.display='none';
        document.querySelector(".search input").value = '';
    }
}

async function weather(city) {
    const apikey = "7bc41291851dd992ae8053f82085a359";
    let apisearch = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    let weatherDetails = await fetch(apisearch);
        if(weatherDetails.status == 404){
            document.querySelector(".weather").style.display='none';
            document.querySelector(".invalid").style.display='block';
            document.querySelector(".search input").value = '';
        }
        else{
            let display = await weatherDetails.json();
            console.log(display);
            document.querySelector('.cityName').innerHTML=display.name;
            document.querySelector('.temp').innerHTML=Math.round(display.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML=display.main.humidity + "%";
            document.querySelector('.windspeed').innerHTML=display.wind.speed + " km/hr";

                if(display.weather[0].main == 'Clear'){
                    document.querySelector('.weatherImg').src = "weather-app-img/images/clear.png";
                }
                else if(display.weather[0].main == 'Clouds'){
                    document.querySelector('.weatherImg').src = "weather-app-img/images/clouds.png";
                }
                else if(display.weather[0].main == 'Rain'){
                    document.querySelector('.weatherImg').src = "weather-app-img/images/rain.png";
                }
                else if(display.weather[0].main == 'Drizzle'){
                    document.querySelector('.weatherImg').src = "weather-app-img/images/drizzle.png";
                }
                else if(display.weather[0].main == 'Mist'){
                    document.querySelector('.weatherImg').src = "weather-app-img/images/mist.png";
                }

                document.querySelector(".weather").style.display='block';
                document.querySelector(".invalid").style.display='none';
                document.querySelector(".search input").value = '';
                document.querySelector(".offline").style.display = "none";
        }
}
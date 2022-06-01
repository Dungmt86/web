// lay duoc du lieu tu API
function loadingWeather () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // console.log("change state:"+this.readyState);
        if (this.readyState == 4 && this.status == 200) { //da gui len hoan thanh va nhan dc ket qua
            var currentWeather = JSON.parse(xhttp.responseText);
            console.log(currentWeather)

            var city = document.getElementById("city");
            var country = document.getElementById("country");
            var temp = document.getElementById("temp");
            var humi = document.getElementById("humidity");
            var wind = document.getElementById("speed");
            var descrip = document.getElementById("des");

            city.innerText = currentWeather.name;
            country.innerText = currentWeather.sys.country;
            temp.innerText = currentWeather.main.temp;
            humi.innerText = currentWeather.main.humidity;
            wind.innerText = currentWeather.wind.speed;
            descrip.innerText = currentWeather.weather[0].description;

        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();
}

loadingWeather();
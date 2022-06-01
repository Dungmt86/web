// lay duoc du lieu tu API
function loadingWeather () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // console.log("change state:"+this.readyState);
        if (this.readyState == 4 && this.status == 200) { //da gui len hoan thanh va nhan dc ket qua
            var currentWeather = JSON.parse(xhttp.responseText);
            console.log(currentWeather)


            var day = document.getElementById("day");
            var temp = document.getElementById("temp");
            var weather = document.getElementById("weather");


            // day.innerText = currentWeather.list[0].dt_txt;
            // temp.innerText = currentWeather.list[0].main.temp;
            //
            // weather.innerText = currentWeather.list[0].weather[0].description;


            for(var i=0;i<currentWeather.list.length;i++){
                day.innerText = currentWeather.list[i].dt_txt;
                temp.innerText = currentWeather.list[i].main.temp;
                weather.innerText = currentWeather.list[i].weather[i].description;
            }

        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();
}

loadingWeather();
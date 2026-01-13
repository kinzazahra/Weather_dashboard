const apiKey = "api_key_here";

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Enter city name");
        return;
    }
    fetchWeather(`q=${city}`);
}

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        fetchWeather(`lat=${lat}&lon=${lon}`);
    });
}

function fetchWeather(query) {
    document.getElementById("loading").style.display = "block";

    fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(data.message);
                return;
            }
            showWeather(data);
            getForecast(data.coord.lat, data.coord.lon);
        });
}

function showWeather(data) {
    document.getElementById("loading").style.display = "none";

    const dewPoint = calculateDewPoint(data.main.temp, data.main.humidity);

    document.getElementById("location").innerText =
        `${data.name}, ${data.sys.country}`;

    document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("temp").innerText =
        `🌡️ Temp: ${data.main.temp} °C`;

    document.getElementById("condition").innerText =
        `☁️ ${data.weather[0].description}`;

    document.getElementById("humidity").innerText =
        `💧 Humidity: ${data.main.humidity}%`;

    document.getElementById("dew").innerText =
        `🌫️ Dew Point: ${dewPoint.toFixed(1)} °C`;

    document.getElementById("wind").innerText =
        `💨 Wind: ${data.wind.speed} m/s`;

    document.getElementById("sunrise").innerText =
        `🌅 Sunrise: ${formatTime(data.sys.sunrise)}`;

    document.getElementById("sunset").innerText =
        `🌇 Sunset: ${formatTime(data.sys.sunset)}`;
}

function getForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            const forecastDiv = document.getElementById("forecast");
            forecastDiv.innerHTML = "";

            for (let i = 0; i < data.list.length; i += 8) {
                const day = data.list[i];
                const div = document.createElement("div");
                div.className = "forecast-card";
                div.innerHTML = `
                    <p>${new Date(day.dt_txt).toDateString()}</p>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
                    <p>${day.main.temp}°C</p>
                `;
                forecastDiv.appendChild(div);
            }
        });
}

function calculateDewPoint(temp, humidity) {
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
    return (b * alpha) / (a - alpha);
}

function formatTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString();
}

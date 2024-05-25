function getWeather() {
  const apiKey = "48fee1fcb4c975e93b3c1b6d9c2978d4";
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city");
    return;
  }
  console.log(city);
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey} `;
  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current weather data. please try again. " + error);
    });
  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      displayHourlyForecast(data.list);
    })
    .catch((error) => {
      console.error("Error fetching hourly weather data:", error);
      alert("Error fetching hourly weather data. please try again. ");
    });
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById("temp__div");
  const weatherDivInfo = document.getElementById("weather__info");
  const weatherIcon = document.getElementById("hourly__forecast");

  if (data.cod === "404") {
    weatherDivInfo.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.message;
    console.log(cityName);
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    const temperatureHtml = `<p>${temperature} &#8451</p>`;
    const weatherHtml = `<p>${cityName} </p>
    <p>${description} </p>`;
    tempDivInfo.innerHTML = temperatureHtml;
    weatherDivInfo.innerHTML = weatherHtml;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
    showImage();
  }
}

function displayHourlyForecast(hourlyData) {
  const hourlyForecastDiv = document.getElementById("temp__div");
  const next24Hours = hourlyData.slice(0, 8);
  next24Hours.forEach((item) => {
    const dataTime = new Date(item.dt * 1000);
    const hour = dataTime.getHours();
    const temperature = Math.round(item.main.temp - 273.15);
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const hourlyItemHtml = `<div class="hourly-item">
    <span>${hour}:00</span>
    <img src="${iconUrl}" alt="Hourly Weather Icon" />
    <span>${temperature} &#8451</span>
  </div>
  `;
    hourlyForecastDiv.innerHTML += hourlyItemHtml;
  });
}

function showImage() {
  const weatherIcon = document.getElementById("weather__icon");
  weatherIcon.style.display = "block";
}

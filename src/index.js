//Challenge 1


function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
function displayWeatherCondition(response) {
  document.querySelectorAll(".displayCity").forEach(function(singleElement){
    singleElement.innerHTML = response.data.name;
  });
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute ("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute ("alt", "#description");
    celsiusTemperature = response.data.main.temp;
}

function searchCity(displayCity) {
    let units = `metric`;
    let apiKey = "9561e0b8516730d7561152d7deb2d27b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${displayCity}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "9561e0b8516730d7561152d7deb2d27b";
        let units = `metric`;
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;


  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#write-city");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Bratislava");
let celsiusTemperature = null;

function celsiaConvesion (event) {
  event.preventDefault();
  celsiusElement.classList.add("active");
    fahrenheitElement.classList.remove("active");
   let temperatureElement = document.querySelector("#temperature");
   temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function fahrenheitConversion (event) {
    event.preventDefault();
    celsiusElement.classList.remove("active");
    fahrenheitElement.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature * 1.8) + 32;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    
}


let fahrenheitElement = document.querySelector("#fahrenheit-link");
fahrenheitElement.addEventListener("click", fahrenheitConversion);

let celsiusElement = document.querySelector("#celsius-link");
celsiusElement.addEventListener("click", celsiaConvesion);




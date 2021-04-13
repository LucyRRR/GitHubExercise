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

//     

//     // function citySearch (event){ 
//     // event.preventDefault();
//     // let input = document.querySelector("#cityInput").value; {

    

// //     document.querySelector("#city").innerHTML = input;
// // }

// // function citySearch (event){ 
// //     event.preventDefault();
    
// //     let input = document.querySelector("#cityInput").value;
// //     document.querySelector("#city").innerHTML = input;
// // }
// function changeCelsia(){
//     let numberCelsia = document.querySelector("#degrees");
//     numberCelsia.innerHTML = "16";
// }

    
    
//     let degreesCelsia = document.querySelector("#celsia");
//     degreesCelsia.addEventListener("click", changeCelsia);



// ///API
// //Challenge 1

//     let searchButton = document.querySelector("#search");
//     searchButton.addEventListener("click", citySearch);

// function showCity(response){
//     let weatherCity = document.querySelector("#city");
//     let input = document.querySelector("#cityInput").value;
//     weatherCity.innerHTML = `${response.data.name}`;
    
//     let cityTemperature = document.querySelector("#degrees");
//     let temperature = Math.round(response.data.main.temp);
//     cityTemperature.innerHTML = `${temperature}`;

//     //DOROB SAYING A LISTY//
//     // let citySaying = document.querySelector("#saying");
//     // citySaying.innerHTML = `A bad weather in ${weatherCity} is still better than a good day in enywhere else.`;
                                            
//     // let cityHumidity = document.querySelector("#humidity");
//     // let humidity = (response.data.main.humidity);
//     // cityTemperature.innerHTML = `${humidity}`;


// }

// function citySearch (event) {
//     event.preventDefault();
//     let apiKey = `9561e0b8516730d7561152d7deb2d27b`;
//     let units = `metric`;
//     let input = ("#cityInput");
//     input = document.querySelector("#cityInput").value;
//     let apiUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${units}&appid=${apiKey}`);
//     console.log(apiUrl);
//     axios.get(apiUrl).then(showCity);
// }


//     // Challenge 2


//     function showWeather(response) {
//         let currentTemperature = document.querySelector("#degrees");
//         let temperature = Math.round(response.data.main.temp);
//         currentTemperature.innerHTML = `${temperature}`;
//     }

//     function currentPosition(position){
//         let apiKey = "9561e0b8516730d7561152d7deb2d27b";
//         let units = `metric`;
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;
//         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
//         console.log(url);
//         axios.get(url).then(showWeather);
//     }

//         let currentButton = document.querySelector("#current");
//         currentButton.addEventListener("submit", (navigator.geolocation.getCurrentPosition(currentPosition)));

    

    
////


function displayWeatherCondition(response) {
  document.querySelectorAll(".displayCity").forEach(function(singleElement){
    singleElement.innerHTML = response.data.name;
  });
  document.querySelector("#temperatures").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(displayCity) {
    let units = `metric`;
    let apiKey = "9561e0b8516730d7561152d7deb2d27b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${displayCity}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherCondition);
    console.log(apiUrl);
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


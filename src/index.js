let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let time = `${day} ${hours}:${minutes}`;
document.getElementById("date-time").innerHTML = time;

function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city-input");
  h2 = document.querySelector("h2");
  h2.innerHTML = newCity.value;
  let apiKey = "71d19b8996a6f036f4262dd935db1604";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${apiKey}&units=metric`;
  function callTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let h1 = document.querySelector("h1");
    h1.innerHTML = temperature;
    let tempDescription = response.data.weather[0].description;
    let description = document.querySelector("#description");
    description.innerHTML = tempDescription;
    let newHumidity = Math.round(response.data.main.humidity);
    let humidity = document.querySelector("#humid");
    humidity.innerHTML = `Humidity: ${newHumidity}`;
    let newPressure = Math.round(response.data.main.pressure);
    let pressure = document.querySelector("#press");
    pressure.innerHTML = `Pressure: ${newPressure}`;
    let newWind = Math.round(response.data.wind.deg);
    let wind = document.querySelector("#breeze");
    wind.innerHTML = `Wind: ${newWind}`;
    function celNumber(event) {
      event.preventDefault;
      let celcius = Math.round(response.data.main.temp);
      let h1 = document.querySelector("h1");
      h1.innerHTML = celcius;
    }
    let defaultNumber = document.querySelector("#celcius");
    defaultNumber.addEventListener("click", celNumber);
    function fahrNumber(event) {
      event.preventDefault;
      let number = Math.round(response.data.main.temp);
      let convertNumber = Math.round((number * 9) / 5 + 32);
      let fahrenhiet = document.querySelector("h1");
      fahrenhiet.innerHTML = convertNumber;
    }
    let fNumber = document.querySelector("#farenhiet");
    fNumber.addEventListener("click", fahrNumber);
  }
  axios.get(`${apiUrl}`).then(callTemp);
}
let city = document.querySelector("#new-city");
city.addEventListener("submit", changeCity);

function getCity() {
  function myLocation(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let apiKey = "71d19b8996a6f036f4262dd935db1604";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    function getCurrentLocation(response) {
      let yourLocation = document.querySelector("#search");
      h2 = document.querySelector("h2");
      h2.innerHTML = response.data.name;
      let localTemp = Math.round(response.data.main.temp);
      let h1 = document.querySelector("h1");
      h1.innerHTML = localTemp;
      let localDescription = response.data.weather[0].description;
      let description = document.querySelector("#description");
      description.innerHTML = localDescription;
      let newHumidity = Math.round(response.data.main.humidity);
      let humidity = document.querySelector("#humid");
      humidity.innerHTML = `Humidity: ${newHumidity}`;
      let newPressure = Math.round(response.data.main.pressure);
      let pressure = document.querySelector("#press");
      pressure.innerHTML = `Pressure: ${newPressure}`;
      let newWind = Math.round(response.data.wind.deg);
      let wind = document.querySelector("#breeze");
      wind.innerHTML = `Wind: ${newWind}`;
      function celcius(event) {
        event.preventDefault;
        let celNumber = Math.round(response.data.main.temp);
        let h1 = document.querySelector("h1");
        h1.innerHTML = celNumber;
      }
      let defaultNumber = document.querySelector("#celcius");
      defaultNumber.addEventListener("click", celcius);
      function farenhietNumber(event) {
        event.preventDefault;
        let fahrNumber = Math.round(response.data.main.temp);
        let convertFahrNumber = Math.round((fahrNumber * 9) / 5 + 32);
        let newFahrenhiet = document.querySelector("h1");
        newFahrenhiet.innerHTML = convertFahrNumber;
      }
      let fNumber = document.querySelector("#farenhiet");
      fNumber.addEventListener("click", farenhietNumber);
    }
    axios.get(`${apiUrl}&${apiKey}`).then(getCurrentLocation);
  }
  navigator.geolocation.getCurrentPosition(getCity);
}
let locateCity = document.querySelector("#search-city");
locateCity.addEventListener("click", getCity);

const $weather = document.getElementById("weather");
const $weatherImage = $weather.querySelector("img");
const $weatherTemp = $weather.querySelector("div:last-child");
const $location = document.getElementById("location");

function success(position) {
  const API_KEY = "699aae8690fb9e9401caf949a0eb244c";
  const { latitude, longitude } = position.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $weatherImage.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      $weatherTemp.innerText = data.main.temp;
      $location.innerText = data.name;
    });
}

function failure(error) {
  console.log("Failure :", error);
}

var options = {
  enableHighAccuracy: true,
};
navigator.geolocation.getCurrentPosition(success, failure, options);

const API_KEY = "699aae8690fb9e9401caf949a0eb244c";
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.lat;
    const lon = position.coords.lon;
    console.log("You line in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    /*  [ Using API ]
        - fetch(url) : JavaScript 내장 API fetch function
        - then() : Promise에 정의된 response 처리 function?
        - Promise : 응답을 받기 까지 시간이 걸리는 비동기 작업을 위한 모듈
    */
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherContainer = document.querySelector(
          "#weather span:first-child"
        );
        const cityContainer = document.querySelector(
          "#weather span:last-child"
        );
        cityContainer.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
  },
  (error) => {
    console.log(error);
    alert("Can't find you. No weather for you.");
  }
);

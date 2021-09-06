let weabtn = document.getElementById("btn");
let inp = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let minmax = document.getElementById("minmax");
let visibility = document.getElementById("visibility");
let txt = document.getElementById("weathertext");
let background = document.getElementById("outer-part");
weabtn.addEventListener("click", (e) => {
    e.preventDefault();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=3d044a250241b395a843403572a0e966&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = data.main.temp + "°C";
      minmax.innerText = `${data.main.temp_min}°C(min)/ ${data.main.temp_max}°C(max)`;
      visibility.innerText = parseInt(data.visibility) / 1000 + "Kms";
      txt.innerText = data.weather[0].main;
      //console.log(data.weather[0].id);
      if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
        console.log("Thunderstorm");
        background.style.backgroundImage = "url('images/thunderstorm.jpg')";
      } else if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
        console.log("Drizzle");
        background.style.backgroundImage = "url('images/drizzle.jpg')";
      } else if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
        console.log("Rain");
        background.style.backgroundImage = "url('images/rain.jpg')";
      } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
        console.log("Snow");
        background.style.backgroundImage = "url('images/Snow.jpg')";
      } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
        console.log("Atmosphere"); //Atmosphere
        background.style.backgroundImage = "url('images/fog.jpg')";
      } else if (data.weather[0].id === 800) {
        console.log("Clear"); ///Clear
        background.style.backgroundImage = "url('images/clear.jpg')";
      } else if (data.weather[0].id >= 801 && data.weather[0].id < 900) {
        console.log("Clouds"); //Clouds
        background.style.backgroundImage = "url('images/clouds.jpg')";
      }
    })
    .catch(() => {
      city.innerText = "City not found";
    });
});

//main.temp

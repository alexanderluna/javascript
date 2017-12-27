let temperature, windspeed, description, weather = ""
let farenheit = true
const weatherList = {
  rainy: {
    color: "#366ae2",
    image: "https://s3-us-west-2.amazonaws.com/hyouka2/public/rain.svg"
  },
  sunny: {
    color: "#ffd04f",
    image: "https://s3-us-west-2.amazonaws.com/hyouka2/public/sun.svg"
  },
  cloudy: {
    color: "#666784",
    image: "https://s3-us-west-2.amazonaws.com/hyouka2/public/cloud.svg"
  },
  snowy: {
    color: "#b9d3ee",
    image: "https://s3-us-west-2.amazonaws.com/hyouka2/public/snow.svg"
  },
  clearly: {
    color: "#666784",
    image: "https://s3-us-west-2.amazonaws.com/hyouka2/public/sun.svg"
  }
}

if ("geolocation" in navigator) {
  console.log("we got geo")
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude)
  })
} else {
  console.log("no geo on this site")
}


function getWeather(longitude, latitude) {
  fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
    .then(response => response.json())
    .then(result => {
      temperature = result.main.temp
      windspeed   = result.wind.speed
      description = result.weather[0].description
      weather     = result.weather[0].main
      configureUI()
      console.log(temperature, windspeed, description, weather);
      console.log(result);
    })
}

function configureUI() {
  const currentState = configureByWeather()
  document.getElementById('temperature').innerHTML = temperature + " F&#176;"
  document.getElementById('description').innerHTML = description
  document.getElementById('windspeed').innerHTML = windspeed + " knots"
  document.getElementById('icon').src = currentState.image
  document.body.style.backgroundColor = currentState.color
}

function configureByWeather() {
  switch (weather) {
    case "Rain":
      return weatherList.rainy
    case "Clear":
      return weatherList.clearly
    case "Clouds":
      return weatherList.cloudy
    case "Sun":
      return weatherList.sunny
    case "Snow":
      return weatherList.snowy
    default:
      return weatherList.snowy
  }
}

function convertTemp(e) {
  let temp = (farenheit) ? (temperature - 32)/1.8 : temperature
  let tempString = (farenheit) ? Math.round(temp) + " C&#176;" : temp + " F&#176;"
  document.getElementById('temperature').innerHTML = tempString
  farenheit = !farenheit
}

var input;
var weather;

function setup() {
  var canvas = createCanvas(750,480);
  canvas.parent('canvas-holder');

  var button = select('#weather-submit');
  button.mousePressed(getWeather);

  input = select('#weather-city');
}

function draw() {
  background(40);
  if (weather) {
    var temp = map(weather.main.temp, -20, 50, 0, width/2);
    var humidity = map(weather.main.humidity, 0, 100, 0, width/2);
    ellipse(100,height/2,temp,temp);
    ellipse(500,height/2,humidity,humidity);
  }
}

function getWeather() {
  url = `/weather/${input.value()}`
  loadJSON(url,gotData);
}

function gotData(data) {
  weather = data;
}

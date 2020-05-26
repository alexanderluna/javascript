/*
  create a random number of cirlces
  without overlapping
*/

var circles = [];

function setup() {
  createCanvas(640,480);
  var protection = 0;

  while(circles.length < 500) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random(5,30)
    }
    var overlapping = false;

    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    if (protection > 10000)
      break;
  }
}

function draw() {
  background(40);
  for (var i = 0; i < circles.length; i++) {
    fill(random(250), 0, random(255));
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

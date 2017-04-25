var circle;
var box;

function setup() {
  createCanvas(640,480);
}

function draw() {
  background(40);
  fill(128,0,128);
  box = rect(250,250,50,50)

  fill(0,255,0);
  circle = ellipse(mouseX, mouseY, 100,100);

  // circle.collide(box);
}

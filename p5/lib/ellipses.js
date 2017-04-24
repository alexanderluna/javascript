function setup(){
  // setup code
  createCanvas(640, 450);
  background(40);
}

function draw(){
  frameRate(60);
  rect(100,200,100,150);
  line(10,20,110,120);
  line(12,20,112,120);

  // x, y, w, h
  if (mouseIsPressed) {
    fill(0, 255, 0);
    stroke(0,255,0);
  } else {
    stroke(128,0,128);
    fill(128, 0, 128);
  }
  ellipse(mouseX, mouseY, 10, 10);
}

function setup(){
  createCanvas(600, 400);
}

function draw(){
  col = map(mouseX, 0, 600, 0, 255);
  background(col);
}

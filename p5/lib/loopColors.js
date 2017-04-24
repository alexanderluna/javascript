function setup(){
  createCanvas(620,480);
  noStroke();
}

function draw(){
  background(40);
  for (var x = 0; x < mouseX; x+=50) {
    for (var y = 0; y < mouseY; y+=50) {
      fill(random(250), 0, random(255));
      ellipse(x , y, 30, 30);
    }
  }
}

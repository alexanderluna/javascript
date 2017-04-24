// modules/Ball.js
// modules/Brick.js

const PADDLE_W    = 100;
const PADDLE_H    = 10;
const PADDLE_HALF = PADDLE_W/2;

const BRICK_W     = 105;
const BRICK_H     = 55;
const BRICK_GAP   = 5;
const BRICK_COL   = 7;
const BRICK_ROW   = 5;
var ball;
var brick_list = [];

function setup(){
  createCanvas(700, 450);
  noStroke();
  ball = new Ball();
  for (var row = 0; row < BRICK_ROW; row++) {
    for (var col = 0; col < BRICK_COL; col++) {
      brick_list[col] = true;
      // if(random() < 0.5){
      //   brick_list[col] = true;
      // } else {
      //   brick_list[col] = false;
      // }
    }
  }
}

function draw() {
  background(40);
  for (var row = 0; row < BRICK_ROW; row++) {
    for (var col = 0; col < BRICK_COL; col++) {
      if (brick_list[col]) {
        var brick = new Brick(BRICK_W * col, BRICK_H * row);
        brick.drawBrick();
      }
    }
  }

  fill(0,200,0);
  rect(mouseX - PADDLE_W/2, height - 20, PADDLE_W, PADDLE_H);

  ball.renderBall();

  textSize(20);
  text(Math.floor(mouseX/BRICK_W) + "," + Math.floor(mouseY/BRICK_H), mouseX, mouseY);
}

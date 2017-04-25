// modules/Ball.js
// modules/Brick.js

const PADDLE_W    = 100;
const PADDLE_H    = 10;
const PADDLE_HALF = PADDLE_W/2;

const BRICK_W     = 72;
const BRICK_H     = 22;
const BRICK_COL   = 10;
const BRICK_ROW   = 10;

var ball;
var brick_list = [];

function setup(){
  createCanvas(720, 450);
  frameRate(30);
  noStroke();
  ball = new Ball();
  for (var i = 0; i < BRICK_ROW * BRICK_COL; i++)
    if(random() < 0.5)
      brick_list[i] = true;
    else
      brick_list[i] = false;
}


function draw() {
  background(40);

  for (var row = 0; row < BRICK_ROW; row++)
    for (var col = 0; col < BRICK_COL; col++)
      if (brick_list[rowColIndex(col,row)]){
        var b = new Brick(BRICK_W * col, BRICK_H * row);
        b.drawBrick();
      }// check true:false for each brick

  rect(mouseX - PADDLE_W/2, height - 20, PADDLE_W, PADDLE_H);

  ball.renderBall();
  ball.inBrickField(BRICK_W, BRICK_H, BRICK_COL, BRICK_ROW, brick_list)

  mouseActions();
}

function rowColIndex(col,row){
  return BRICK_COL * row + col
}

function mouseActions() {
  textSize(15);
  var mouseCol = Math.floor(mouseX/BRICK_W);
  var mouseRow = Math.floor(mouseY/BRICK_H);
  var mouseBrickIndex = rowColIndex(mouseCol, mouseRow);
  text(mouseCol + "," + mouseRow + ":" + mouseBrickIndex, mouseX, mouseY);

  if (mouseBrickIndex >= 0 && mouseBrickIndex < BRICK_COL * BRICK_ROW)
    brick_list[mouseBrickIndex] = false;
}

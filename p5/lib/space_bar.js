// modules/Ball.js
// modules/Brick.js

const PADDLE_W    = 100;
const PADDLE_H    = 10;
const PADDLE_HALF = PADDLE_W/2;

const BRICK_W     = 72;
const BRICK_H     = 22;
const BRICK_COL   = 10;
const BRICK_ROW   = 12;
const BRICK_GAP   = 2;

var curBallCol, curBallRow, ball;
var brick_list = [];
var brick_count = 0;

function setup(){
  createCanvas(720, 450);
  noStroke();
  ball = new Ball();
  generateBrickGrid();
}

function draw() {
  background(40);
  renderBricks();
  // render paddle
  rect(mouseX - PADDLE_W/2, height - 20, PADDLE_W, PADDLE_H);

  if (brick_count == 0)
    resetGame();
  else
    ball.renderBall();

  if (ballinBrickField())
    checkBallCollision();
  // mouseActions();  // for debugging
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
  if (mouseIsPressed) {
    ball.x = mouseX;
    ball.y = mouseY;
  }
}

function generateBrickGrid() {
  for (var i = 0; i < BRICK_COL * 3; i++) // skip first 3 rows
    brick_list[i] = false;
  for (var i = BRICK_COL * 3; i < BRICK_ROW * BRICK_COL; i++) {
    brick_list[i] = true;
    brick_count++;
  }
    // if(random() < 0.5) {
    //   brick_list[i] = true;
    //   brick_count++;
    // } else {
    //   brick_list[i] = false;
    // }
}

function renderBricks() {
  for (var row = 0; row < BRICK_ROW; row++)
    for (var col = 0; col < BRICK_COL; col++)
      if (brick_list[rowColIndex(col,row)]){
        var b = new Brick(BRICK_W*col, BRICK_H*row, BRICK_W, BRICK_H, BRICK_GAP);
        b.drawBrick();
      }
}

function resetGame(){
    brick_count = 0;
    brick_list = [];
    generateBrickGrid();
    renderBricks();
    ball.x = ball.y = 300;
    ball.speed_x = ball.speed_y = 5;
}

function ballinBrickField() {
  curBallCol = Math.floor((ball.x)/BRICK_W);
  curBallRow = Math.floor((ball.y)/BRICK_H);
  var ballRowCol = rowColIndex(curBallCol,curBallRow);
  if (curBallCol >= 0 && curBallCol < BRICK_COL && curBallRow >= 0 && curBallRow < BRICK_ROW)
    if (brick_list[ballRowCol]){
      brick_list[ballRowCol] = false;
      return true;
    }
}

function checkBallCollision() {
  var failedBothConditions = true;
  var prevBallX = ball.x - ball.speed_x;
  var prevBallY = ball.y - ball.speed_y;
  var prevBallCol = Math.floor(prevBallX/BRICK_W);
  var prevBallRow = Math.floor(prevBallY/BRICK_H);
  var adjBrickSide = rowColIndex(curBallCol, prevBallRow);
  var adjBrickTop = rowColIndex(prevBallCol, curBallRow);
  if (prevBallCol != curBallCol)
    if (brick_list[adjBrickSide] == false) {
      ball.speed_x *= -1;
      brick_count--;
      failedBothConditions = false;
    }
  if (prevBallRow != curBallRow)
    if (brick_list[adjBrickTop] == false) {
      ball.speed_y *= -1;
      brick_count--;
      failedBothConditions = false;
    }
  if (failedBothConditions) { // ball went through brick corner
    ball.speed_x *= -1;
    ball.speed_y *= -1;
    brick_count--;
  }
}

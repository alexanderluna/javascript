function Ball(){
  this.x    = 300;
  this.y    = 300;
  this.speed_x = 5;
  this.speed_y = 5;
  this.rowColIndex;

  this.renderBall = () => {
    fill(128,0,128);
    ellipse(this.x, this.y, 20, 20);
    // check for left and right bounce
    if (this.x < 10 || this.x > width - 10)
      this.speed_x *= -1;
    // check bottom bounce
    if (this.y > height - 30)
      if (this.x > mouseX - PADDLE_HALF && this.x < mouseX + PADDLE_HALF) {
        this.speed_x = (this.x - mouseX) * 0.35;
        this.speed_y *= -1;
      } else {
        this.resetBall();
      }
    // check top bounce
    if (this.y < 10)
     this.speed_y *= -1;

    this.x += this.speed_x;
    this.y += this.speed_y;
  }

  this.inBrickField = (brick_w,brick_h,brick_c,brick_r,brick_list) => {
    var ballCol = Math.floor((this.x)/brick_w);
    var ballRow = Math.floor((this.y)/brick_h);
    this.rowColIndex = brick_c * ballRow + ballCol;
    // if (this.rowColIndex >= 0 && this.rowColIndex < brick_c * brick_r)
    if (ballCol >= 0 && ballCol < brick_c && ballRow >= 0 && ballRow < brick_r)
      if (brick_list[this.rowColIndex]){
        brick_list[this.rowColIndex] = false;
        this.checkCollision(brick_w,brick_h,ballCol,ballRow);
      }
  }

  this.checkCollision = (brick_w,brick_h,curBallCol,curBallRow) => {
    var prevBallX = this.x - this.speed_x;
    var prevBallY = this.y - this.speed_y;
    var prevBallCol = Math.floor(prevBallX/brick_w);
    var prevBallRow = Math.floor(prevBallY/brick_h);
    if (prevBallCol != curBallCol)
      this.speed_x *= -1;
    if (prevBallRow != curBallRow)
      this.speed_y *= -1;
  }

  this.resetBall = () => {
    this.x        = this.y        = 300;
    this.speed_x  = this.speed_y  = 5;
  }
}

function Ball(){
  this.x    = 300;
  this.y    = 300;
  this.speed_x = 8;
  this.speed_y = 8;
  this.rowColIndex;

  this.renderBall = () => {
    this.drawBall();
    this.moveBall();
  }

  this.drawBall = () => {
    fill(128,0,128);
    ellipse(this.x, this.y, 20, 20);
  }

  this.moveBall = () => {
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

  // this.checkCollision = (bx,by,bw,bh) => {
    // box collision bottom
    // if (this.y - 10 < by + bh && this.x > bx && this.x < bx + bw) {
    //  console.log("Bounce Bottom: " + by, this.y);
    //  this.speed_y = this.speed_y * -1;
    // }

    // box collision left
    // if (this.y < by + bh && this.y > by && this.x > bx && this.x < bx + bw) {
    //   console.log("Bounce Left: " + bx, this.x);
    //   this.speed_x = this.speed_x * -1;
    // }

    // box collision right
    // if (this.y < by + bh && this.y > by && this.x > bx) {
    //   console.log("Bounce Left: " + bx, this.x);
    //   this.speed_x = this.speed_x * -1;
    // }

  //}

  this.inBrickField = (brick_w,brick_h,brick_c,brick_r,brick_list) => {
    var ballCol = Math.floor((this.x-10)/brick_w);
    var ballRow = Math.floor((this.y-10)/brick_h);
    this.rowColIndex = brick_c * ballRow + ballCol;
    if (this.rowColIndex >= 0 && this.rowColIndex < brick_c * brick_r)
      if (brick_list[this.rowColIndex]){
        brick_list[ball.rowColIndex] = false;
        this.speed_y = this.speed_y * -1;
      }
  }

  this.resetBall = () => {
    this.x = 300;
    this.y = 300;
    this.speed_x = 5;
    this.speed_y = 5;
  }
}

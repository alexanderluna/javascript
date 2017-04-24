function Ball(){
  this.x    = 250;
  this.y    = 250;
  this.speed_x = 6;
  this.speed_y = 6;

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
    if (this.x < 10 || this.x > width - 10) {
      this.speed_x = this.speed_x * -1;
    }

    // check bottom bounce
    if (this.y > height - 30) {
      if (this.x > mouseX - PADDLE_HALF && this.x < mouseX + PADDLE_HALF) {
        this.speed_x = (this.x - mouseX) * 0.35;
        this.speed_y = this.speed_y * -1;
      } else {
       this.resetBall();
      }
    }

    // check top bounce
    if (this.y < 10) {
     this.speed_y = this.speed_y * -1;
    }

    this.x += this.speed_x;
    this.y += this.speed_y;

  }

  this.resetBall = () => {
    this.x = 250;
    this.y = 250;
    this.speed_x = 5;
    this.speed_y = 5;
  }
}

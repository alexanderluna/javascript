function Brick(x,y){
  this.x = x;
  this.y = y;
  this.w = 70;
  this.h = 20;

  this.drawBrick = () => {
    fill(0,200,0);
    rect(this.x, this.y, this.w, this.h);
  }
}

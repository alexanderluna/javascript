function Brick(x,y){
  this.x = x;
  this.y = y;
  this.w = 100;
  this.h = 50;

  this.drawBrick = () => {
    fill(0,200,0);
    rect(this.x, this.y, this.w, this.h);
  }
}

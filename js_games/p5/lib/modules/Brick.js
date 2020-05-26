function Brick(x,y,w,h,gap){
  this.x = x;
  this.y = y;
  this.w = w - gap;
  this.h = h - gap;

  this.drawBrick = () => {
    fill(0,200,0);
    rect(this.x, this.y, this.w, this.h);
  }
}

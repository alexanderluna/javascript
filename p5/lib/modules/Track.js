function Track(x,y,w,h,gap) {
  this.x = x;
  this.y = y;
  this.w = w - gap;
  this.h = h - gap;

  this.renderTrack = () => {
    fill(128,0,128);
    rect(this.x,this.y,this.w,this.h);
  }
}

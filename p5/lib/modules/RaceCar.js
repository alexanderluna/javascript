function RaceCar(x,y,w,h,img) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = img;

  this.renderCar = () => {
    fill(0,250,0);
    imageMode(CENTER);
    rotate(PI/3.0);
    var img = image(this.img, this.x,this.y,this.w,this.h);
  }
}

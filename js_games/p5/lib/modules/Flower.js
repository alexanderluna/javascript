function Flower(x,y,img) {
  this.x = x;
  this.y = y;
  this.img = img

  this.display = () => {
    imageMode(CENTER);
    image(this.img, this.x, this.y);
  }
}

// declare variables

const WIDTH = 480;
const HEIGHT = 720;
const FRAMES = 1000/30;
var canvas;
var context;

window.onload = () => {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  setInterval(draw(), FRAMES);

}

function draw() {
  console.log("This is working");
  createRec
}

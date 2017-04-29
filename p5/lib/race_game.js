// modules/Track.js

const TRACK_H = 40;
const TRACK_W = 40;
const TRACK_GAP = 2;
const TRACK_COL = 20;
const TRACK_ROW = 15;

var track_list = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                  1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                  1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
                  1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,
                  1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,
                  1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,
                  1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,
                  1,0,2,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,
                  1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,
                  1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,
                  1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,
                  1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,
                  1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,
                  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var raceCar;
var carImg;
function preload(){
  carImg = loadImage('images/Car1.png')
}
function setup() {
  createCanvas(800,600);
  noStroke();
  setupRaceCar();
}

function draw() {
  background(40);
  renderTrackGrid();

  raceCar.renderCar();
}

function renderTrackGrid() {
  for (var row = 0; row < TRACK_ROW; row++)
    for (var col = 0; col < TRACK_COL; col++) {
      if (track_list[rowColIndex(col,row)] == 1) {
        var track = new Track(TRACK_W*col,TRACK_H*row,TRACK_W,TRACK_H,TRACK_GAP);
        track.renderTrack();
      }
    }
}

function setupRaceCar() {
  for (var row = 0; row < TRACK_ROW; row++)
    for (var col = 0; col < TRACK_COL; col++) {
      if (track_list[rowColIndex(col,row)] == 2) {
        track_list[rowColIndex(col,row)] = 0;
        var carX = (TRACK_W * col) + TRACK_W/2;
        var carY = (TRACK_H * row) + TRACK_H/2;
        raceCar = new RaceCar(carX,carY,20,20,carImg);
      }
    }
}

function rowColIndex(col,row){
  return TRACK_COL * row + col
}



/***************************************
Old code that might be used later on
will go after this comment
***************************************/

function generateTrackGrid() {
  for (var i = 0; i < TRACK_COL * TRACK_ROW; i++)
    track_list[i] = true;
}

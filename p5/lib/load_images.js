// lib/modules/bubble.js
var flowers = [];
var flower_list = [];

function preload(){
  for (var i = 0; i < 3; i++)
    flowers[i] = loadImage('images/flower'+i+'.png');
}

function setup(){
  createCanvas(720,480);
}

function mousePressed(){
  var r = floor(random(0,flowers.length));
  var f = new Flower(mouseX, mouseY, flowers[r]);
  flower_list.push(f);
}

function draw(){
  background(40);
  for (var i = flower_list.length -1; i >= 0; i--)
    flower_list[i].display();
}

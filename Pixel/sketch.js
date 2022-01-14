

let vehicles = [];
let vehicles2 = [];
let myImage;
var colors = [];
var colors2 = [];
var locations = [];
var locations2 = [];
function preload() {

  myImage = loadImage('Sword.png');

}

function setup() {
  createCanvas(300,300);
  myImage.loadPixels();



colors = [];
locations = [];


  for (var gridY = 0; gridY < myImage.height; gridY++) {
    for (var gridX = 0; gridX < myImage.width; gridX++) {
      var id = (gridY * myImage.width + gridX) * 4;
      var c = color(myImage.pixels[id], myImage.pixels[id + 1], myImage.pixels[id + 2], myImage.pixels[id + 3]);
      colors.push(c);
    }
  }
  

  for (var GridY = 0; GridY < 200; GridY+=10) {
    for (var GridX = 0; GridX < 200; GridX+=10) {
      var loc=createVector(GridX, GridY);
      locations.push(loc);
    }
  }
  
  

  var Pixelnumber=myImage.width*myImage.height;

    
  for (var i = 0; i < Pixelnumber; i++) {
    var vehicle = new Vehicle(locations[i].x+50, locations[i].y+50,2,0.3);
    vehicles.push(vehicle);
  }

}
function draw() {
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].behaviors();
    vehicles[i].update();
    fill(colors[i]);
    vehicles[i].show();
  }


}
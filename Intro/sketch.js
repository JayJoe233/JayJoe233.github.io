

let font;
let vehicles = [];
let myImage;
var colors = [];
var locations = [];
function preload() {
  font = loadFont('Exo-Bold.ttf');
  myImage = loadImage('Intro.png');

}

function setup() {
  createCanvas(800, 700);
  background(0);
  //myImage.loadPixels();
  textFont(font);
  textSize(192);
  fill(255);
  noStroke();
 
  var points = font.textToPoints('Jingzhou Li', 282, 370, 40, {
    sampleFactor: 1
  });

  
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}
function draw() {
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    stroke(120);
    v.show();
  }
  noStroke();
  textSize(50);
   text('Interaction Designer', 160, 450);
  image(myImage, 160, 470);
 // fill(colors[885]);
  //rect(400,400,40,40);
}
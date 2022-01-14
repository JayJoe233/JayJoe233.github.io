let img = [];
let Imgnumber = [];
let Pinfo = [];
let sizeinfo = [];
let maxsize = [];
let lifespan = [];
let rotateinfo=[];
let size;
let dnumber;

function preload() {
  img[0] = loadImage("Png/0.png");
  img[1] = loadImage("Png/1.png");
  img[2] = loadImage("Png/2.png");
  img[3] = loadImage("Png/3.png");
  img[4] = loadImage("Png/4.png");
  img[5] = loadImage("Png/5.png");
  img[6] = loadImage("Png/6.png");
  img[7] = loadImage("Png/7.png");
  img[8] = loadImage("Png/8.png");
  img[9] = loadImage("Png/9.png");
  //   for(i=0;i<9;i++){

  //     img[i]=loadImage('Png/'+i+'.png');
  //   }
}

function setup() {
  dnumber = 0;
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (i = 0; i < dnumber; i++) {
    //First stage, grow the img

    if (sizeinfo[i] < maxsize[i]) {
      if (lifespan[i] == 0) {
        sizeinfo[i] += 20;
      }
    }

    //when img big enough, start to count lifespan, when reach life limits, started to thrink.Then set to -1 when thrink is finished

    if (lifespan[i] < 80) {
      if (sizeinfo[i] > maxsize[i]) {
        lifespan[i]++;
      }
    } else {
      if (sizeinfo[i] > 0) {
        sizeinfo[i] -= 10;
      } else {
        sizeinfo[i] = -0.1;
      }
    }

    //display everything
    //translate the canvas to the mouseclicked position then rotate the thing
  push();
    translate(Pinfo[i].x,Pinfo[i].y);
    rotate(rotateinfo[i]);
    image(img[Imgnumber[i]], 0,0, sizeinfo[i], sizeinfo[i]);
  pop();  
  }
}

function mouseClicked() {
  //whenever mouseclicked, create one sets of data of the new generated img
  lifespan[dnumber] = 0;
  maxsize[dnumber] = random(60, 200);
  sizeinfo[dnumber] = 1;
  Imgnumber[dnumber] = int(random(0, 10)); //depends on how many pictures are there
  Pinfo[dnumber] = createVector(mouseX, mouseY);
  rotateinfo[dnumber]=random(-PI/4,PI/4);
  dnumber++;
}

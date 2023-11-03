var p = 100;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(50);

}

function draw() {
  background('snow');
  tekenRechthoek(p);
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke('green');
  line();
  line();
  line();
  line();

  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke('red');
  line();
  line();
  line();
  line();

  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0,p,width,p);
  line(0,height - p,width,height - p);
  pop();
}
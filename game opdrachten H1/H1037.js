var aantalLagen = 5;
var breedte = 90;
var hoogte;

function setup() {
  hoogte = breedte / 2;
  canvas = createCanvas(800,600);
//  canvas.parent('processing');
  noLoop();
}

function draw() {
    tekenKamer(1);
}

function tekenKamer(s) {
    scale(s);
    fill('skyblue');
    noStroke();
    rect(0,0,800,600);
    fill('#C9B3E6');
    rect(0,0,400,600);
    stroke(1);
    fill('blue');
    circle(500,525,150);
    fill('#A1B3E6');
    rect(50,200,250,400);
    fill('#A18AE6');
    rect(70,220,210,160);
    noStroke();
    fill('sienna');
    rect(650,515,30,85);
    fill('olive');
    ellipse(665,470,80,120);
    fill('black');
    rect(340,90,420,320);
    //
    translate(350,100);
    tekenKamer(0.5);
 
}


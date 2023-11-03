function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
   noStroke();
   fill('darkred');
   triangle(225,0,0,450,450,450);
  
  strokeWeight(5);
  stroke('pink');
  fill('pink');
  beginShape();
  vertex(450,0);
  vertex(450,225);
  vertex(450,450);
  vertex(0,225);
  endShape(CLOSE);
  
  strokeWeight(5);
  stroke('purple');
  fill('purple');
  beginShape();
  vertex(0,450);
  vertex(0,450);
  vertex(450,225);
  vertex(0,0);
  endShape(CLOSE);
  
//  strokeWeight(5);
// stroke('pink');
// fill('darkred');
// beginShape();
// vertex(225,115);
// vertex(300,225);
// vertex(225,335);
// vertex(0,225);
// endShape(CLOSE);
}

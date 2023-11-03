function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('green');
  ellipse(225,225,400);
  
   noStroke();
  fill('white');
  ellipse(225,225,300);
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);
}

//als je de regels van ellipse omdraait krijg je een witte cirkel en een goene vierkant
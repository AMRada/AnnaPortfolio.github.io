var spriteSheet;
var rij = 0;
var aantalSpriteRijen = 4;
var aantalSpriteKolommen = 12;

var schaal = 2.0;
var breedte;
var hoogte;
var sBr;
var sHo;
var br;
var ho;
var x = 190;
var y = 100;
var kolom;

function preload() {
  spriteSheet = loadImage("images/sprites/Pony.png");
}

function setup() {
  canvas = createCanvas(460,280);
 // canvas.parent('processing');
  textFont("Georgia");
  textSize(18);
  noStroke();
  frameRate(10);
  breedte = spriteSheet.width;
  hoogte = spriteSheet.height;
  sBr = breedte / aantalSpriteKolommen;
  sHo = hoogte / aantalSpriteRijen;
  br = sBr*schaal;
  ho = sBr*schaal;
  kolom = 0;
}

function draw() {
  background('lavender');
  image(spriteSheet,x,y,br,ho,kolom*sBr,rij*sHo,sBr,sHo);
  
   if (keyIsDown(LEFT_ARROW)) {
    x -= 10;
    rij = 1;
    kolom = (frameCount % aantalSpriteKolommen);
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    x += 10;
    rij=2;
    kolom = (frameCount % aantalSpriteKolommen);
  }
  else if (keyIsDown(UP_ARROW)) {
    y -= 10;
    rij = 3;
    kolom = (frameCount % aantalSpriteKolommen);
  }
  else if (keyIsDown(DOWN_ARROW)) {
    y += 10;
    rij = 0;
    kolom = (frameCount % aantalSpriteKolommen);
  }
  else {
    frameCount = kolom;
  }
  
  x = constrain(x,0,canvas.width - br);
  y = constrain(y,0,canvas.height - ho);
}
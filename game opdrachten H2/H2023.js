var speler = {
  getrokkenKaarten: [],
  
  trekKaart(spel) {
      volgNummer = floor(random(0,spel.length));
      if(!this.getrokkenKaarten.includes(volgNummer)) {
        this.getrokkenKaarten.push(spel[volgNummer]);
      }
  },
  
  toonKaarten() {
    for(var i = 0; i < this.getrokkenKaarten.length; i++) {
      image(this.getrokkenKaarten[i],225 * i,0);
    }
  }
}

var kaartSpel = [];
var kaartSoorten = new Array("S","K","H","R");

function preload() {
  for (var s = 0;s < kaartSoorten.length;s++) {
    for (var k = 1;k <= 13;k++) {
      kaart = loadImage("images/speelkaarten/"+kaartSoorten[s] + k + ".png");
      kaartSpel.push(kaart);
    }
  }
}

function setup() {
  canvas = createCanvas(226*4,315);
//  canvas.parent('processing');
  textFont("Georgia");
  textSize(40);
  textAlign(CENTER,CENTER);
  noStroke();
  frameRate(5);
}

function draw() {
  background('white');
  speler.toonKaarten();
  if(mouseIsPressed === true){
    if(speler.getrokkenKaarten.length < 4){
      speler.trekKaart(kaartSpel);
    } else {
      text ("er zijn al 4 kaarten getrokken", 226*2, 315/2);
    }
  }

}
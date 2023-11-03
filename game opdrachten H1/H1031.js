
function setup() {
  canvas = createCanvas(451,451);
//  canvas.parent('processing');
  background('coral');
}

function draw() {
  kleur='black';

  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      if (kleur == 'white' ) {
        fill ('black');
        kleur = 'black';
      }
      else {
        fill ('white');
        kleur = 'white';
      }
  
      rect(kolom,rij,50,50);
    }
  }
}
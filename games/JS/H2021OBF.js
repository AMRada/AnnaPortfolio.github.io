(function(_0x4902a8,_0x41b05e){var _0x1ba1f2=_0x557e,_0x548e8e=_0x4902a8();while(!![]){try{var _0x651ab=-parseInt(_0x1ba1f2(0x138))/0x1*(parseInt(_0x1ba1f2(0x12e))/0x2)+parseInt(_0x1ba1f2(0x13e))/0x3+parseInt(_0x1ba1f2(0x134))/0x4*(parseInt(_0x1ba1f2(0x135))/0x5)+-parseInt(_0x1ba1f2(0x13d))/0x6+parseInt(_0x1ba1f2(0x140))/0x7*(parseInt(_0x1ba1f2(0x13f))/0x8)+-parseInt(_0x1ba1f2(0x13c))/0x9*(-parseInt(_0x1ba1f2(0x13a))/0xa)+-parseInt(_0x1ba1f2(0x136))/0xb;if(_0x651ab===_0x41b05e)break;else _0x548e8e['push'](_0x548e8e['shift']());}catch(_0x2dbcd5){_0x548e8e['push'](_0x548e8e['shift']());}}}(_0x4d5e,0x6b582));var cirkel={'diameter':0x28,'straal':null,'x':null,'y':null,'alpha':0.8,'aantalRaak':0x0,'teken'(){var _0x5543a0=_0x557e;push(),noStroke(),fill(0xf6,0xb5,0x4f,this[_0x5543a0(0x142)]),ellipse(this['x'],this['y'],this[_0x5543a0(0x132)]),pop();},'kiesEenPlek'(){var _0x5d6095=_0x557e;cirkel['x']=random(this[_0x5d6095(0x132)],canvas[_0x5d6095(0x130)]-this[_0x5d6095(0x132)]),cirkel['y']=random(this[_0x5d6095(0x132)],canvas[_0x5d6095(0x12f)]-this['diameter']);},'controleerRaak'(){var _0x52f982=_0x557e;afstandMuisCirkel=dist(mouseX,mouseY,this['x'],this['y']),mouseIsPressed===!![]&&afstandMuisCirkel<=this[_0x52f982(0x132)]&&(this[_0x52f982(0x142)]*=0.8,this[_0x52f982(0x132)]*=0.8,this['aantalRaak']++,this[_0x52f982(0x143)]());}};function preload(){var _0x177bb9=_0x557e;achtergrond=loadImage(_0x177bb9(0x13b));}function _0x4d5e(){var _0x1b9994=['94gOMZOL','height','width','Verdana','diameter','straal','8zHOpYa','2175335bCDyTo','12294051VFailT','aantalRaak','12247pfVZSj','controleerRaak','20euYyGa','images/choco.jpg','2498571ltSNel','4839552VVZdjB','2141652YtDzvA','76216tZSzNH','588mbliii','black','alpha','kiesEenPlek'];_0x4d5e=function(){return _0x1b9994;};return _0x4d5e();}function _0x557e(_0x2330f1,_0x24cf39){var _0x4d5e3b=_0x4d5e();return _0x557e=function(_0x557ee1,_0x3b667a){_0x557ee1=_0x557ee1-0x12e;var _0x54a56c=_0x4d5e3b[_0x557ee1];return _0x54a56c;},_0x557e(_0x2330f1,_0x24cf39);}function setup(){var _0x2c90c5=_0x557e;canvas=createCanvas(0x1c2,0x1c2),colorMode(RGB,0xff,0xff,0xff,0x1),frameRate(0xa),textFont(_0x2c90c5(0x131)),textSize(0x1e),cirkel[_0x2c90c5(0x133)]=cirkel[_0x2c90c5(0x132)]/0x2,cirkel[_0x2c90c5(0x143)]();}function draw(){var _0x48cfba=_0x557e;background(achtergrond),keyIsPressed&&background(_0x48cfba(0x141)),cirkel[_0x48cfba(0x139)](),cirkel['teken'](),text(cirkel[_0x48cfba(0x137)],0xa,0x28);}
var _0x599007=_0x5273;function _0x5273(_0x1a9c98,_0x10867f){var _0x539c14=_0x539c();return _0x5273=function(_0x52732e,_0x24a844){_0x52732e=_0x52732e-0x66;var _0x262324=_0x539c14[_0x52732e];return _0x262324;},_0x5273(_0x1a9c98,_0x10867f);}(function(_0x27c274,_0x1d44eb){var _0x12bcfa=_0x5273,_0x3c8447=_0x27c274();while(!![]){try{var _0x4e6b21=-parseInt(_0x12bcfa(0x68))/0x1*(-parseInt(_0x12bcfa(0x6e))/0x2)+parseInt(_0x12bcfa(0x6a))/0x3*(-parseInt(_0x12bcfa(0x72))/0x4)+-parseInt(_0x12bcfa(0x6c))/0x5+-parseInt(_0x12bcfa(0x67))/0x6*(parseInt(_0x12bcfa(0x69))/0x7)+-parseInt(_0x12bcfa(0x7d))/0x8*(parseInt(_0x12bcfa(0x75))/0x9)+-parseInt(_0x12bcfa(0x7a))/0xa+parseInt(_0x12bcfa(0x6f))/0xb*(parseInt(_0x12bcfa(0x7c))/0xc);if(_0x4e6b21===_0x1d44eb)break;else _0x3c8447['push'](_0x3c8447['shift']());}catch(_0xd4a4de){_0x3c8447['push'](_0x3c8447['shift']());}}}(_0x539c,0x81259));class Knikker{constructor(_0x28e04b,_0x58f133,_0x37fd8b){var _0x55ffcf=_0x5273;this['diameter']=0x28,this[_0x55ffcf(0x71)]=this[_0x55ffcf(0x76)]/0x2,this['x']=_0x28e04b,this['y']=_0x58f133,this[_0x55ffcf(0x74)]=random(0x1,0xa),this[_0x55ffcf(0x6d)]=random(0x1,0xa),this[_0x55ffcf(0x70)]=_0x37fd8b;}[_0x599007(0x77)](){var _0x410400=_0x599007;this['x']+=this[_0x410400(0x74)],this['y']+=this[_0x410400(0x6d)],(this['x']<this['straal']||this['x']>canvas[_0x410400(0x6b)]-this[_0x410400(0x71)])&&(this[_0x410400(0x74)]*=-0x1),(this['y']<this['straal']||this['y']>canvas[_0x410400(0x66)]-this[_0x410400(0x71)])&&(this['snelheidY']*=-0x1);}[_0x599007(0x73)](){fill(this['kleur']),ellipse(this['x'],this['y'],this['diameter']);}}var knikkerVerzameling=[];function _0x539c(){var _0x16e608=['height','162420dgWigD','15859DAqFxO','231LAvOGh','60IWNzqK','width','594360COOgvM','snelheidY','98mwQaPM','11qJEHPp','kleur','straal','185524pWmKhc','teken','snelheidX','23472bkvejE','diameter','beweeg','push','length','5264330ySfEBr','red','30028812cWAFLK','872ktGbbd'];_0x539c=function(){return _0x16e608;};return _0x539c();}function setup(){var _0x37488c=_0x599007;canvas=createCanvas(0x3e8,0x12c),frameRate(0x32),colorMode(RGB,0xff,0xff,0xff,0x1),background(0x0,0x0,0x4b,0x1),noStroke();for(var _0x59e08a=0x0;_0x59e08a<0xa;_0x59e08a++){knikkerVerzameling[_0x37488c(0x78)](new Knikker(random(0x14,0x3d4),random(0x14,0x118),'white'));}}function draw(){var _0x4e7f93=_0x599007;background(0x0,0x0,0x4b,0.2);for(var _0xb72ab4=0x0;_0xb72ab4<knikkerVerzameling[_0x4e7f93(0x79)];_0xb72ab4++){knikkerVerzameling[_0xb72ab4]['beweeg'](),knikkerVerzameling[_0xb72ab4][_0x4e7f93(0x73)]();}if(mouseIsPressed){for(var _0xb72ab4=0x0;_0xb72ab4<knikkerVerzameling['length'];_0xb72ab4++){knikkerVerzameling[_0xb72ab4]['beweeg']();}knikkerVerzameling['push'](new Knikker(floor(mouseX),floor(mouseY),_0x4e7f93(0x7b)));}}
function _0x356d(){var _0x539b38=['tijd','straal','green','black','beweeg','teken','72081FCEEAB','height','35156BDhRxQ','detecteer','ikVoelIets','powderblue','53240LoxNYt','70326ByaQeA','diameter','27QwheyP','orange','7ggAZFO','275450EIWnaD','stand','bepaalStand','959040swwuwy','grey','red','960846yFYysO','width','44WHfrDR','wheat','430zUoZgC'];_0x356d=function(){return _0x539b38;};return _0x356d();}(function(_0x224906,_0x480b9){var _0x25edbe=_0x574e,_0x33c119=_0x224906();while(!![]){try{var _0x4d155b=-parseInt(_0x25edbe(0x1dd))/0x1+-parseInt(_0x25edbe(0x1e2))/0x2+parseInt(_0x25edbe(0x1f3))/0x3*(parseInt(_0x25edbe(0x1ea))/0x4)+-parseInt(_0x25edbe(0x1e5))/0x5+parseInt(_0x25edbe(0x1e8))/0x6*(parseInt(_0x25edbe(0x1e1))/0x7)+parseInt(_0x25edbe(0x1dc))/0x8*(-parseInt(_0x25edbe(0x1df))/0x9)+parseInt(_0x25edbe(0x1ec))/0xa*(parseInt(_0x25edbe(0x1d8))/0xb);if(_0x4d155b===_0x480b9)break;else _0x33c119['push'](_0x33c119['shift']());}catch(_0x1077a){_0x33c119['push'](_0x33c119['shift']());}}}(_0x356d,0x22ada));function _0x574e(_0x4ea99e,_0x3f5a39){var _0x356d6e=_0x356d();return _0x574e=function(_0x574eab,_0xf3b3e){_0x574eab=_0x574eab-0x1d7;var _0x45e7a4=_0x356d6e[_0x574eab];return _0x45e7a4;},_0x574e(_0x4ea99e,_0x3f5a39);}var bal={'diameter':0x50,'straal':null,'x':0x0,'y':null,'snelheid':0x3,'beweeg'(){var _0x4fb0e8=_0x574e;this['x']+=this['snelheid'],this['x']>canvas[_0x4fb0e8(0x1e9)]+this[_0x4fb0e8(0x1de)]&&(this['x']=0x0);},'teken'(){fill('dodgerblue'),ellipse(this['x'],this['y'],this['diameter']);}},detectielus={'x':0x96,'lengte':0xfa,'ikVoelIets':![],'detecteer'(_0x35d92b){var _0x9b348c=_0x574e;_0x35d92b['x']>=this['x']&&_0x35d92b['x']<=this['x']+this['lengte']?this[_0x9b348c(0x1da)]=!![]:this[_0x9b348c(0x1da)]=![];},'teken'(){var _0x5dc61f=_0x574e;fill(_0x5dc61f(0x1e6)),rect(this['x'],0xfa,this['lengte'],0x1e);}},stoplicht={'stand':0x0,'teller':0x0,'tijd':0x0,'bepaalStand'(_0x4dbf4d){var _0x47e671=_0x574e;if(_0x4dbf4d)this['stand']=0x2,this[_0x47e671(0x1ed)]=0x0;else{if(this[_0x47e671(0x1ed)]>0x32&&this['tijd']<0x96)this[_0x47e671(0x1e3)]=0x1;else this[_0x47e671(0x1ed)]>=0x96&&(this[_0x47e671(0x1e3)]=0x0);}},'teken'(){var _0x4db738=_0x574e;push(),fill(_0x4db738(0x1f0)),rect(0x1d6,0x14,0x3c,0x8c);if(this[_0x4db738(0x1e3)]===0x0)fill(_0x4db738(0x1e7)),ellipse(0x1f4,0x2d,0x28);else this[_0x4db738(0x1e3)]==0x1?(fill(_0x4db738(0x1e0)),ellipse(0x1f4,0x5a,0x28)):(fill(_0x4db738(0x1ef)),ellipse(0x1f4,0x87,0x28));pop(),this[_0x4db738(0x1ed)]++;}};function setup(){var _0x56053c=_0x574e;canvas=createCanvas(0x3e8,0x12c),frameRate(0x32),noStroke(),bal[_0x56053c(0x1ee)]=bal[_0x56053c(0x1de)]/0x2,bal['y']=0xfa-bal[_0x56053c(0x1ee)];}function draw(){var _0x3c0deb=_0x574e;background(_0x3c0deb(0x1db)),fill(_0x3c0deb(0x1eb)),rect(0x0,0xfa,canvas[_0x3c0deb(0x1e9)],canvas[_0x3c0deb(0x1d7)]-0xfa),detectielus['teken'](),bal[_0x3c0deb(0x1f1)](),bal[_0x3c0deb(0x1f2)](),detectielus[_0x3c0deb(0x1d9)](bal),stoplicht[_0x3c0deb(0x1e4)](detectielus[_0x3c0deb(0x1da)]),stoplicht['teken']();}
(function(_0x2651d3,_0x49b7b1){var _0x4ac30b=_0x22cb,_0x3cf868=_0x2651d3();while(!![]){try{var _0x49b19d=parseInt(_0x4ac30b(0x152))/0x1+-parseInt(_0x4ac30b(0x14e))/0x2*(parseInt(_0x4ac30b(0x159))/0x3)+-parseInt(_0x4ac30b(0x156))/0x4*(-parseInt(_0x4ac30b(0x15b))/0x5)+parseInt(_0x4ac30b(0x151))/0x6*(parseInt(_0x4ac30b(0x154))/0x7)+parseInt(_0x4ac30b(0x14f))/0x8*(-parseInt(_0x4ac30b(0x158))/0x9)+-parseInt(_0x4ac30b(0x157))/0xa*(-parseInt(_0x4ac30b(0x153))/0xb)+-parseInt(_0x4ac30b(0x155))/0xc;if(_0x49b19d===_0x49b7b1)break;else _0x3cf868['push'](_0x3cf868['shift']());}catch(_0x50fba8){_0x3cf868['push'](_0x3cf868['shift']());}}}(_0x31d3,0xa7f02));var N=0x6,grijstint=0x0,Tx,Ty,Lx,Ly,Rx,Ry,breedteCanvas=0x1f4,hoogteCanvas=null;function setup(){var _0x25523d=_0x22cb;hoogteCanvas=breedteCanvas*sqrt(0x3)/0x2,canvas=createCanvas(breedteCanvas,hoogteCanvas),noLoop(),background(_0x25523d(0x15a)),fill(_0x25523d(0x150)),noStroke(),N=constrain(N,0x1,0xa);}function draw(){Tx=width/0x2,Ty=0x0,Lx=0x0,Ly=height,Rx=width,Ry=height,sierpinski(Tx,Ty,Lx,Ly,Rx,Ry,N);}function _0x22cb(_0x4e9990,_0x21b3a8){var _0x31d3fe=_0x31d3();return _0x22cb=function(_0x22cb2c,_0x533aa7){_0x22cb2c=_0x22cb2c-0x14e;var _0x231ae9=_0x31d3fe[_0x22cb2c];return _0x231ae9;},_0x22cb(_0x4e9990,_0x21b3a8);}function sierpinski(_0x3adabb,_0x1d6ecc,_0x5b33df,_0x12dace,_0x5d3007,_0xcb74ca,_0x3ddf92){if(_0x3ddf92>0x0){var _0x1c20ad=(_0x3adabb+_0x5b33df)/0x2,_0x4863f9=(_0x1d6ecc+_0x12dace)/0x2,_0x19976e=(_0x3adabb+_0x5d3007)/0x2,_0x5270ac=(_0x1d6ecc+_0xcb74ca)/0x2,_0x300405=(_0x5b33df+_0x5d3007)/0x2,_0x3a30d1=_0x12dace;sierpinski(_0x3adabb,_0x1d6ecc,_0x1c20ad,_0x4863f9,_0x19976e,_0x5270ac,_0x3ddf92-0x1),sierpinski(_0x1c20ad,_0x4863f9,_0x5b33df,_0x12dace,_0x300405,_0x3a30d1,_0x3ddf92-0x1),sierpinski(_0x19976e,_0x5270ac,_0x300405,_0x3a30d1,_0x5d3007,_0xcb74ca,_0x3ddf92-0x1);}else veranderKleur(),grijstint+=0x9,kiesKleur(),triangle(_0x3adabb,_0x1d6ecc,_0x5b33df,_0x12dace,_0x5d3007,_0xcb74ca);}function _0x31d3(){var _0x2cea54=['black','6pKTGhk','504277BOpJmQ','231JfyNJJ','2851247dHPPxS','1091124SDptHS','20yPPjWC','316950CDLdfR','19269YWcQEf','9JwQXhp','white','309835wevLRs','610358xprZWl','720VbZfuj'];_0x31d3=function(){return _0x2cea54;};return _0x31d3();}function veranderKleur(_0xaf08d6){var _0x478078=grijstint;fill(_0x478078);}function kiesKleur(){R=random(0x0,0xff),G=random(0x0,0xff),B=random(0x0,0xff),fill(R,G,B);}
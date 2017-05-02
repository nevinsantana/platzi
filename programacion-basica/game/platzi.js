var vp  = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");
var vp2  = document.getElementById("wolf");
var paper2 = vp2.getContext("2d");
var back = { url: "tile.png" };
var cow = { url: "vaca.png" };
var pig = { url: "cerdo.png" };
var chick = { url: "pollo.png" };
var wolf = { url: "lobo.png" };

back.object = new Image();
back.object.src = back.url;
back.object.addEventListener("load", loader("back"));


cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", loader("cow"));

pig.object = new Image();
pig.object.src = pig.url;
pig.object.addEventListener("load", loader("pig"));

chick.object = new Image();
chick.object.src = chick.url;
chick.object.addEventListener("load", loader("chick"));

wolf.object = new Image();
wolf.object.src = wolf.url;
wolf.object.addEventListener("load", printWolf());

function loader(item) {
	var toLoad = eval(item);
	var literal = item;
	toLoad.loadOk = true;
	print(item, toLoad.loadOk)
}

function print(item, status) {
	var itemTo = eval(item);
	var forDm = rdm(1, 10);
	if(item == "back" && status)
		paper.drawImage(itemTo.object, 0, 0);
	if(item != "back" && status) {
		for(var i = 1; i <= forDm; i++) {
			paper.drawImage(itemTo.object, rdm(0, 420), rdm(0, 420));
		}
		console.log(item + " : " + forDm);
	}
}

function printWolf() {
	paper2.drawImage(wolf.object, 0, 0);
}

document.addEventListener( "keydown", dibujarTeclado );

function dibujarTeclado(e) {
	if(e.key == "ArrowUp") {
		vp2.style.top = vp2.style.top.replace('px','') - 3 + "px";
	}
	if(e.key == "ArrowDown") {
		vp2.style.top = (vp2.style.top.replace('px','') * 1) + 3 + "px";
	}
	if(e.key == "ArrowLeft") {
		vp2.style.left = vp2.style.left.replace('px','') - 3 + "px";
	}
	if(e.key == "ArrowRight") {
		vp2.style.left = (vp2.style.left.replace('px','') * 1) + 3 + "px";
	}
}

function dl(c, xi, yi, xf, yf, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.lineWidth = 10;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

function rdm(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
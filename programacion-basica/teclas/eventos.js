x : 196
y : 215

var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

document.getElementById("areaDeDibujo").addEventListener( "mousedown", dibujarTeclado );
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


function dl(c, xi, yi, xf, yf, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.lineWidth = 10;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(e) {
	var canvasx = cuadrito.getBoundingClientRect().left;
	var canvasy = cuadrito.getBoundingClientRect().top;
	var mousex = e.x - canvasx;
	var mousey = e.y - canvasy;
	console.log(mousex);
	var colorcito = "green";
	dl(colorcito, mousex-1, mousey-1, mousex+1, mousey+1, papel);
}
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

for(i=1;i<=300;i+50) {
	if(i % 2 == 0) var color = "red";
	else	color = "black"
	dibujarLinea(color, 0, i, 300-i, 0);
}

function dibujarLinea(c, xi, yi, xf, yf) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

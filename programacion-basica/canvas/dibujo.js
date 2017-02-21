var
	texto = document.getElementById("texto_lineas"),
	boton = document.getElementById("botoncito"),
	d = document.getElementById("dibujito"),
	lienzo = d.getContext("2d"),
	ancho = d.width;

boton.addEventListener( "click", dibujoPorClick );

function dl(c, xi, yi, xf, yf) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick() {
	var
		xxx = parseInt(texto.value),
		line = xxx,
		l = 0,
		yi, xf,
		cPink = "#FAA",
		espacio = ancho / line;

	do {
		yi = espacio * l;
		xf = espacio * (l + 1);
		dl(cPink, yi, 0, 300, xf);
		l++;
	} while (l < line);

	dl(cPink, 0, 1, ancho - 1, 0);
	dl(cPink, ancho - 1, 0, ancho - 1, 300);
}

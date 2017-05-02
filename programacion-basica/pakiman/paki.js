var imagenes = {
	Cauchin: "vaca.png",
	Pokacho: "pollo.png",
	Tocinauro: "cerdo.png",
	Wolfo: "lobo.png",
};

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Wolfo", 60, 60));

for(var p of coleccion) { p.mostrar(); }
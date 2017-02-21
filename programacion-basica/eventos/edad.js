var button = document.getElementById("btnSend"), year = 2080;
document.getElementById("year").innerHTML = year;
button.addEventListener( "click", edad );
function edad() {
	var
		oldResult,
		input = document.getElementById("anio"),
		resultText = document.getElementById("oldResult"),
		calc = parseInt(year - input.value);
	resultText.innerHTML = calc;
}
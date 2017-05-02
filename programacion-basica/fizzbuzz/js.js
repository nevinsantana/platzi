var fc = document.getElementById("fcont");
for(i = 1; i <= 100; i++) {
	var j = i;
	if(i % 3 == 0) { j = "fizz" }
	if(i % 5 == 0) { j = "buzz" }
	if(i % 3 == 0 && i % 5 == 0) { j = "fizzbuzz" }
	var textnode = document.createElement("p");
	textnode.innerHTML = j;
	fc.appendChild(textnode);
}
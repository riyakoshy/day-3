
for (var i = 0; i < 300; i++ ){
	document.querySelector(".container").innerHTML+= "<div class='box'></div>"
	document.querySelector(".container").style.background = "lightgreen"

}

var arrayOfBoxes = document.querySelectorAll(".box");

for (var i =0; arrayOfBoxes.length; i++) {
	if (i % 2 === 0) {
		arrayOfBoxes[i].style.background = "lightblue";
	}
	if (i % 3 === 0) {
		arrayOfBoxes[i].style.background = "orange";
	}
	if (i % 4 === 0) {
		arrayOfBoxes[i].style.background = "yellow";
	}
	if (i % 6 === 0) {
		arrayOfBoxes[i].style.background = "lightpink";
	}
	if (i % 10 === 0) {
		arrayOfBoxes[i].style.background = "magenta";
	}
	if (i % 8 === 0) {
		arrayOfBoxes[i].style.background = "red";
	}
}

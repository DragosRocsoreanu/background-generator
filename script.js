var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var bodyNode = document.querySelector("body");

function random(){
	var ran = Math.floor((Math.random() * 255) + 0);
	return ran;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


setGradient();

var ranBTN = document.createElement("button");
ranBTN.appendChild(document.createTextNode("Random"));
ranBTN.addEventListener("click", setRandomGradient);
bodyNode.insertBefore(ranBTN, bodyNode.lastChild);


function setRandomGradient() {
	var letters = "0123456789ABCDEF";
	var colorRND1 = "#";
	var colorRND2 = "#";
	for (var i = 0; i < 6; i++) {
		colorRND1 += letters[Math.floor(Math.random() * 16)];
		colorRND2 += letters[Math.floor(Math.random() * 16)];
	}
	color1.value = colorRND1;
	color2.value = colorRND2;
	setGradient()
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
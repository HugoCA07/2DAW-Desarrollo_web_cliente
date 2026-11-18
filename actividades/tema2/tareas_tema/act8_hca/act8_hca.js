"use strict";
const generarRandom = () => {return Math.floor(Math.random() * 255);}
document.addEventListener("dblclick", function(e) {
	let coloursRGB = [0,0,0];
	coloursRGB = coloursRGB.map(() => {return generarRandom()});
	e.target.style.backgroundColor = `rgb(${coloursRGB[0]},${coloursRGB[1]},${coloursRGB[2]})`;
});
"use strict";

// QUITAMOS LOS {} PARA PODER USAR LA FN DESDE AHÍ

function saludar3() {
	alert("Saludar 3");
}

function action(){
	alert("SALUDAR");
}


let boton4 = document.querySelector("#idBoton4");

boton4.onclick = function () {
	alert('Saludar 4');
}

let boton5 = document.querySelector("#idBoton5");

boton5.addEventListener("click", action);

// boton5.addEventListener("mouseenter", function () {
// 	alert("Saludar 5");
// });

// boton5.addEventListener("mouseleave", function () {
// 	alert("Saludar 5");
// });

boton5.removeEventListener("click", action);

document.addEventListener("DOMContentLoaded", function(){
	console.log("Ya está cargado el HTML solo sin CSS");
});
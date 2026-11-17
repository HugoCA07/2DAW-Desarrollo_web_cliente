"use strict";

let cajaPeque = document.querySelector(".cajapeque");
let cajaMed = document.querySelector(".cajamed");
let cajaGrand = document.querySelector(".cajagrand");

let elemArrastrado = null;

cajaPeque.addEventListener('dragstart', function(evt) {
	elemArrastrado = evt.target;
});

cajaMed.addEventListener('dragstart', function(evt) {
	elemArrastrado = evt.target;
});

cajaMed.addEventListener('dragover', function(evt) {
	evt.preventDefault();
});

cajaMed.addEventListener('drop', function(evt) {
	evt.preventDefault();
	if (elemArrastrado === cajaPeque) {
		cajaMed.appendChild(cajaPeque);
	}
});

cajaGrand.addEventListener('dragover', function(evt) {
	evt.preventDefault();
});

cajaGrand.addEventListener('drop', function(evt) {
	evt.preventDefault();
	if (elemArrastrado === cajaMed) {
		cajaGrand.appendChild(cajaMed);
	} else if (elemArrastrado === cajaPeque && cajaGrand.contains(cajaMed)) {
		cajaMed.appendChild(cajaPeque);
	}
	
	if (cajaGrand.contains(cajaMed) && elemArrastrado === cajaMed) {
		
	}
});


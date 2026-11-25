"use strict";

let btnComenzarSaludos = document.createElement('button');
let btnPararSaludos = document.createElement('button');

btnComenzarSaludos.textContent = "Comenzar saludos";
btnPararSaludos.textContent = "Parar saludos";

let id;

btnComenzarSaludos.addEventListener('click', () => {
	id = setInterval(function() {
		alert("¡Hola! Esto aparece cada 5 segundos.");
	}, 5000);
	btnComenzarSaludos.disabled = true;
	
});

btnPararSaludos.addEventListener('click', () => {
	clearInterval(id);
	btnComenzarSaludos.disabled = false;
});

document.body.appendChild(btnComenzarSaludos);
document.body.appendChild(btnPararSaludos);
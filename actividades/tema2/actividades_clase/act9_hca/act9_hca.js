"use strict";

let papelera = document.querySelector('#idPapelera');
let bola = document.querySelector('#idBola');
let objetoarrastrado = null;

bola.addEventListener('dragstart', function(evt) {
	objetoarrastrado = evt.target;
});

papelera.addEventListener('dragover', function(ev) {
	ev.preventDefault();
});

papelera.addEventListener('drop', function(ev) {
	ev.preventDefault();
	if (objetoarrastrado) {
		objetoarrastrado.remove();
		papelera.setAttribute('src', 'img/PapeleraLlena.png');
	}
});

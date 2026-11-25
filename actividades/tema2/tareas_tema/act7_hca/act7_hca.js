"use strict";

const letrasDNI = [
	'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
	'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
];


document.addEventListener("keydown", (e) => {
	const key = e.key.toUpperCase();
	let contador = 0;
	if (letrasDNI.includes(key)) {
		let parrafo = document.createElement("p");
		let select = document.createElement("select");
		for (let i = 1; i <= 9999; i++) {
			const resto = i % 23;
			const letraCalculada = letrasDNI[resto];
			
			if (letraCalculada === key) {
				contador++;
				
				let option = document.createElement("option");
				option.text = (i.toString() + letraCalculada.toString()).padStart(5, '0');
				select.appendChild(option);
			}
		}
		parrafo.textContent = `Hay ${contador} letras`;
		document.body.appendChild(parrafo);
		document.body.appendChild(select);
	}
})
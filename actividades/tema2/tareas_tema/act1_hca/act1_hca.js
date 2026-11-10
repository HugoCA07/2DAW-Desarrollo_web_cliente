"use strict";

let lista = document.createElement("ul");
lista.setAttribute("id", "idListaNums");


let boton = document.createElement("button");
if (boton !== null) {
	boton.textContent = "Añadir número";
	document.body.appendChild(boton);
	
	boton.addEventListener("click", (e) => {
		let randomNum = Math.round(1 + Math.random() * (100 - 1));
		let li = document.createElement("li");
		li.innerHTML = randomNum.toString();
		
		let listaExistente = document.querySelector("#idListaNums");
		if (listaExistente) {
			listaExistente.appendChild(li);
		}
	});
}

let botonEliminar = document.createElement("button");
if (botonEliminar !== null) {
	botonEliminar.textContent = "Eliminar";
	document.body.appendChild(botonEliminar);
	
	botonEliminar.addEventListener("click", (e) => {
		let listaExistente = document.querySelector("#idListaNums");
		if (listaExistente && listaExistente.lastElementChild !== null) {
			listaExistente.lastElementChild.remove();
		}
	});
}

document.body.appendChild(lista);
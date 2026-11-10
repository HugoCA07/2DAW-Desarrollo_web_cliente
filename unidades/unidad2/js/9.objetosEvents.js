"use strict"
{
	let boton5 = document.querySelector("#idBoton5");
	console.log(boton5);
	
	let miP1 = document.createElement("p");
	
	boton5.parentElement.previousElementSibling.previousElementSibling.insertAdjacentElement("afterend", miP1);
	
	// document.body.append(miP1);
	
	boton5.addEventListener("click", function (evento) {
		// console.log(evento);
		// console.log(evento.button);
		// console.log(evento.x);
		// console.log(evento.y);
		//
		// console.log(evento.clientX);
		// console.log(evento.clientY);
		//
		// console.log(evento.offsetX);
		// console.log(evento.offsetY);
		
		miP1.innerHTML = "X= <strong>" + evento.x + "</strong> Y=" + evento.y;
		miP1.innerHTML = "X= <strong>" + evento.clientX + "</strong> Y=" + evento.clientY;
		miP1.innerHTML = "X= <strong>" + evento.screenX + "</strong> Y=" + evento.screenY;
	});
	
	const mostrarmensaje = ((e) => {
		if (e.type === "keyup") {
			// console.log(e.type);
			// console.log(e.code);
			// console.log(e.key);
		} else if (e.type === "click") {
			console.log(e.clientX);
			console.log(e.clientY);
			// console.log(e.screenY);
			// console.log(e.screenY);
			// console.log(e.button);
			// console.log(e.detail);
			// console.log(e.ctrlKey);
			// console.log(e.altKey);
			// console.log(e.shiftKey);
			// console.log(e.target);
			// console.log(e.target.id);
			// console.log(e.target.name);
			// console.log(e.target.textContent);
		} else if (e.type === "dblclick") {
			console.log(e.type);
			console.log("Doble click");
			e.target.textContent = "HOY ES MARTES";
		} else if (e.type === "contextmenu") {
			e.preventDefault()
			console.log("Click derecho");
		}
	});
	
	boton5.addEventListener("keyup", mostrarmensaje);
	boton5.addEventListener("click", evt => mostrarmensaje(evt));
	boton5.addEventListener("dblclick", mostrarmensaje);
	boton5.addEventListener("contextmenu", mostrarmensaje, {once: true});
	boton5.addEventListener("contextmenu", function () {
		console.log("Click con el botón derecho")
	},{capture: true});
	
	/**
	 * LISTA DE EVENTOS:
	 *  onfocus: al obtener un foco.
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador.
        contextmenu: al hacer click con el botón derecho.
	 */
}

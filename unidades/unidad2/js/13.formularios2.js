"use strict";

let formulario = document.querySelector("#idForm");

formulario.addEventListener("submit", function (event) {
	event.preventDefault();
	
	const passwordElement = formulario.nPassword;
	const password = passwordElement.value;
	
	const isValidPassword = validarPassword(password);
	
	if (!isValidPassword) {
		mostrarError("La contraseña debe de tener de 4-8 caracteres mayusc, minusc, numeros y caracteres especiales",passwordElement);
	}
	
	const textElement = formulario.nTexto;
	const text = textElement.value;
	
	const isValidText = validarTexto(text);
	
	if (!isValidText) {
		mostrarError("El texto debe de ser entre 5 y 10 caracteres",textElement);
	}
	
	const emailElement = formulario.nEmail;
	const email = emailElement.value;
	
	const isValidEmail = validarEmail(email);
	
	if (!isValidEmail) {
		mostrarError("El email no es valido",emailElement);
	}
	
	// Compruebas que está ok....
	//formulario.submit();
	
	// Si no...
	// Mensaje de error.
	
	// alert("funciona");
});

function validarPassword (password) {
	const longitudValida = /^.{4,8}$/.test(password);
	const tieneMinuscula = /[a-zñ]/.test(password);
	const tieneMayuscula = /[A-ZÑ]/.test(password);
	const tieneNumero = /\d/.test(password);
	const tieneCaracterEspecial = /[^a-zA-ZñÑ0-9\s]/.test(password);
	
	return longitudValida && tieneMinuscula && tieneMayuscula && tieneCaracterEspecial && tieneNumero;
}

function validarTexto(texto) {
	return /^.{5,10}/.test(texto);
}

function validarEmail (email) {
	const validar_email = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return validar_email.test(email);
}

const mostrarError = (mensaje,elemento) => {
	let span = document.createElement('span');
	span.textContent = mensaje;
	span.setAttribute('class', 'error');
	elemento.insertAdjacentElement("afterend",span);
	setTimeout(function () {
		span.remove();
	},3000);
}
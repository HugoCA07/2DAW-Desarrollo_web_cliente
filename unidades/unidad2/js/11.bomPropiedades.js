"use strict";

/**
 * https://developer.mozilla.org/es/docs/Web/API/Location
 * https://developer.mozilla.org/en-US/docs/Web/API/History_API
 * https://developer.mozilla.org/es/docs/Web/API/Window/navigator
 * https://developer.mozilla.org/es/docs/Web/API/Navigator/geolocation
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/open
 */

console.log(window.location);
console.log(window.location.href);
console.log(window.location.origin);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.pathname);

console.log(window.history);

let back = document.createElement("button");
back.textContent = "Back";
back.addEventListener("click", () => {
	window.history.back();
});

document.body.appendChild(back);

let forward = document.createElement("button");
forward.textContent = "Forward";
forward.addEventListener("click", () => {
	window.history.forward();
});

document.body.appendChild(forward);

let refrescar = document.createElement("button");
refrescar.textContent = "Refrescar";
refrescar.addEventListener("click", () => {
	window.history.go(0);
});

document.body.appendChild(refrescar);

console.log(window.navigator);
console.log(window.navigator.userAgent);
// console.log(window.navigator.connection);


const opciones = {
	enableHighAccuracy: true,
	timeout: 10000,
	maximumAge: 0,
};

function verDatosGeolocation(position) {
	let coords = position.coords;
	console.log("Tu ubicación actual es:");
	console.log("Latitud: " + coords.latitude);
	console.log("Longitud: " + coords.longitude);
	console.log("Precisión: " + coords.accuracy + " metros");
}

function error(err) {
	console.error("Error (" + err.code + "): " + err.message);
}

let geolocation = document.createElement("button");
geolocation.textContent = "Geolocation";
document.body.appendChild(geolocation);

geolocation.addEventListener("click", () => {
	window.navigator.geolocation.getCurrentPosition(verDatosGeolocation, error, opciones);
});

let ventana;

let btnAbrir = document.createElement("button");
btnAbrir.textContent = "Abrir ventana";
document.body.appendChild(btnAbrir);
btnAbrir.addEventListener("click", () => {
	ventana = window.open("https://feet.net")
	// Window.close() te cierra a ti mismo
});

let btnCerrar = document.createElement("button");
btnCerrar.textContent = "Cerrar ventana";
document.body.appendChild(btnCerrar);
btnCerrar.addEventListener("click", () => {
	 ventana.close();
});

let btnImprimir = document.createElement("button");
btnImprimir.textContent = "Imprimir ventana";
document.body.appendChild(btnImprimir);
btnImprimir.addEventListener("click", () => {
	window.print();
});

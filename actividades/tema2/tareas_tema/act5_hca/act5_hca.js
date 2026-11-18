"use strict";

let parrafo = document.createElement("h2");

document.body.appendChild(parrafo);

document.addEventListener("mousemove", function(ev){
	parrafo.innerHTML = "[ X = " + ev.screenX + ", Y =" + ev.screenY  + "]";
});
"use strict";

let parrafo1 = document.createElement("p");
parrafo1.textContent = "PARRAFO 1";

let parrafo2 = document.createElement("p");
parrafo2.textContent = "PARRAFO 2";

let parrafo3 = document.createElement("p");
parrafo3.textContent = "PARRAFO 3";

let btnMostrarOcultos = document.createElement("button");
btnMostrarOcultos.textContent = "Reaparecer";

document.body.appendChild(btnMostrarOcultos);
document.body.appendChild(parrafo1);
document.body.appendChild(parrafo2);
document.body.appendChild(parrafo3);

btnMostrarOcultos.addEventListener("click", function(){
	parrafo1.style.visibility = "visible";
	parrafo2.style.visibility = "visible";
	parrafo3.style.visibility = "visible";
});

parrafo1.addEventListener("mouseout", function(){
	parrafo1.style.visibility = "hidden";
});
parrafo2.addEventListener("mouseout", function(){
	parrafo2.style.visibility = "hidden";
});
parrafo3.addEventListener("mouseout", function(){
	parrafo3.style.visibility = "hidden";
});

parrafo1.addEventListener("dblclick", function(){
	parrafo1.remove();
});
parrafo2.addEventListener("dblclick", function(){
	parrafo2.remove();
});
parrafo3.addEventListener("dblclick", function(){
	parrafo3.remove();
});
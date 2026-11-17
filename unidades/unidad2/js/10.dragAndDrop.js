"use strict"
{
	let cajaRoja = document.querySelector(".cajaRoja");
	let cajaAzul = document.querySelector(".cajaAzul");
	let contenedor = document.querySelector(".contenedor");
	
	let cajaArrastrada = 0;
	
	cajaRoja.addEventListener("dragstart", function(evt){
		console.log("dragstart");
		cajaArrastrada = evt.target;
	});
	
	cajaAzul.addEventListener("dragstart", (evt) => {
		console.log("dragstart");
		cajaArrastrada = evt.target;
	});
	
	cajaRoja.addEventListener("drag", () => {
		console.log("drag");
	});
	
	cajaAzul.addEventListener("drag", () => {
		console.log("drag");
	});
	
	cajaRoja.addEventListener("dragend", function(){
		console.log("dragend");
	});
	
	cajaAzul.addEventListener("dragend", () => {
		console.log("dragend");
	});
	
	contenedor.addEventListener("dragenter", function(){
		console.log("dragenter");
	});
	
	contenedor.addEventListener("dragleave", function(){
		console.log("dragleave");
	});
	
	contenedor.addEventListener("dragover", function(evt){
		evt.preventDefault();
		console.log("dragover");
	});
	
	contenedor.addEventListener("drop", function(){
		console.log("drop");
		contenedor.insertAdjacentElement("afterbegin",cajaArrastrada);
		if (contenedor.children.length >= 2){
			let miH1 = document.createElement("h1");
			miH1.textContent = "¡Felicidades!";
			contenedor.insertAdjacentElement("beforeend",miH1);
		}
	});
}
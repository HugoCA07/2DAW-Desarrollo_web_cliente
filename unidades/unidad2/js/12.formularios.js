"use strict";

let formulario = document.querySelector("#idForm1");

formulario.nTexto.value = "otro texto";
formulario.nUrl.value = "otra url";

let inputText1 = document.querySelector("#idTexto1");

console.log(inputText1);
console.log(inputText1.value);
inputText1.value = "otro valor para texto 1";
console.log(inputText1.getAttribute("name"));

inputText1.addEventListener("input", (e) => {
	// console.log(e);
	console.log(e.data);
	// console.log(e.target);
	console.log(e.target.value);
});

inputText1.addEventListener("change", (e) => {
	console.log(e.data);
	console.log(e.target.value);
	console.log(inputText1.value);
});

let textArea = document.querySelector("#idTextArea1");
console.log(textArea.value);

textArea.oninput = (e) => {
	console.log(e.data);
	console.log(e.target.value);
}

textArea.onchange = (e) => {
	console.log(e.target.value);
}

let radioButtons = document.getElementsByName("nRadiobtns");
console.log(`Hay ${radioButtons.length} opciones`);

radioButtons.forEach(radioButton => {
	console.log(radioButton);
	console.log(radioButton.value);
	// console.log(radioButton.previousElementSibling.textContent);
});

for (let element of radioButtons) {
	if (element.checked) {
		console.log(`El elemento marcado es ${element.value}`);
	}
}
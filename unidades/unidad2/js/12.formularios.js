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

for (let elemento of radioButtons) {
	elemento.addEventListener("change", (e) => {
		console.log(elemento.value);
		console.log(this.value);
		console.log(e.target.value);
	});
}

let checkboxes = document.getElementsByName("comidas");

checkboxes.forEach(checkbox => {
	console.log(checkbox.previousElementSibling.textContent);
	console.log(checkbox.value);
	if (checkbox.checked) {
		console.log(`La opcion marcada es ${checkbox.value}`);
	}
	checkbox.addEventListener("change", (e) => {
		if (e.target.checked) {
			console.log(`Voy a comer un ${checkbox.previousElementSibling.textContent}`);
		} else {
			console.log(`Ya no voy a comer un ${checkbox.previousElementSibling.textContent}`);
		}
	})
});

let seleccion = document.querySelector("#idLenguajes");

for (let elemento of seleccion) {
	// console.log(elemento);
	// console.log(elemento.value);
	// console.log(elemento.textContent);
	if (elemento.selected) {
		console.log(`La opcion seleccionada es: ${elemento.value} y la está en la posicion ${seleccion.selectedIndex}`);
	}
}

Array.from(seleccion.options).forEach(option => {
	console.log(`El lenguaje escogido es ${option.value} y tiene el valor ${option.textContent}`);
});


seleccion.addEventListener("change", () => {
	console.log(`El indice seleccionado es ${seleccion.selectedIndex}`);
	console.log("El valor del elemento seleccionado es " + seleccion.options[seleccion.selectedIndex].value);
	console.log("El texto del elemento seleccionado es " + seleccion.options[seleccion.selectedIndex].textContent);
});

let inputDataList = document.querySelector("#idFrutas1");
let dataList = document.querySelector("#idFrutas");

if (inputDataList instanceof HTMLInputElement && dataList instanceof HTMLDataListElement) {
	inputDataList.addEventListener("change", () => {
		// console.log(`Input DataList: inputDataList.value=${inputDataList.value}`);
		// console.log(`Input DataList: ${inputDataList.textContent}`);
		
		let selectSeleccionado = Array.from(dataList.options).find((e) => e.value === inputDataList.value);
		
		if (selectSeleccionado !== undefined) {
			console.log(selectSeleccionado.textContent);
		}
	})
}


"use strict";

function isPrimo(num) {
    if (typeof num !== "number" || isNaN(num) || num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function pintarceldas() {
    let celdas = document.querySelectorAll("td");

    for (let i = 0; i < celdas.length; i++) {
        if (isPrimo(parseInt(celdas[i].textContent))) {
            celdas[i].setAttribute("class", "celdacoloreada");
        }
    }
}

function despintarceldas() {
    let celdas = document.querySelectorAll("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].removeAttribute("class");
    }
}

let filas = 100;
let columnas = 100;

let table = document.createElement("table");

let botonPrimos = document.createElement("button");
botonPrimos.setAttribute("id", "idPrimos");
botonPrimos.textContent = "Marcar primos";
botonPrimos.addEventListener("click", pintarceldas);

let botonRestablecer = document.createElement("button");
botonRestablecer.setAttribute("id", "idRestablecer");
botonRestablecer.textContent = "Desmarcar primos";
botonRestablecer.addEventListener("click", despintarceldas);

document.body.appendChild(botonPrimos);
document.body.appendChild(botonRestablecer);
document.body.appendChild(table);

let contador = 0;

for (let i = 1; i <= filas; i++) {
    let fila = document.createElement("tr");
    for (let j = 1; j <= columnas; j++) {
        contador++;
        let celda = document.createElement("td");
        celda.textContent = contador;
        fila.appendChild(celda);
    }
    table.appendChild(fila);
}

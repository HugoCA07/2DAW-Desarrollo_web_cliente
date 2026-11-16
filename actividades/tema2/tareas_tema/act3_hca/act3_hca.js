"use strict";

function imprimirNumero(checkbox) {
    if (checkbox.checked) {
        console.log("check" + checkbox.value + " marcado");
    } else {
        console.log("check" + checkbox.value + " desmarcado");
    }
}

function marcarTodosLosChecks() {
    let conjuntoChecks = document.querySelectorAll("input");
    conjuntoChecks.forEach((check) => {
        check.checked = true;
    });
}

function desmarcarTodosLosChecks() {
    let conjuntoChecks = document.querySelectorAll("input");
    conjuntoChecks.forEach((check) => {
        check.checked = false;
    });
}

function resizePares() {
    let conjuntoChecks = document.querySelectorAll("input");
    conjuntoChecks.forEach((check) => {
        if (check.value % 2 === 0) {
            check.setAttribute("class", "checkgrande");
        }
    });
}

function restoreinputs() {
    let conjuntoChecks = document.querySelectorAll("input");
    conjuntoChecks.forEach((check) => {
        check.setAttribute("class", "checknormal");
    });
}

let btnAllChecks = document.createElement("button");
btnAllChecks.textContent = "Marcar todos los checks";
btnAllChecks.addEventListener("click", (event) => {
    marcarTodosLosChecks();
});
document.body.appendChild(btnAllChecks);

let btnUncheckAllChecks = document.createElement("button");
btnUncheckAllChecks.textContent = "Desmarcar todos los checks";
document.body.appendChild(btnUncheckAllChecks);
btnUncheckAllChecks.addEventListener("click", (event) => {
    desmarcarTodosLosChecks();
});

let resizePairs = document.createElement("button");
resizePairs.textContent = "Ampliar los pares";
resizePairs.addEventListener("click", (event) => {
    resizePares();
});
document.body.appendChild(resizePairs);

let restoresize = document.createElement("button");
restoresize.textContent = "Restaurar tamaño";
restoresize.addEventListener("click", (event) => {
    restoreinputs();
});
document.body.appendChild(restoresize);

document.body.appendChild(document.createElement("br"));

let checkboxesNum = 100;

for (let i = 0; i < checkboxesNum; i++) {
    let randomNum = Math.floor(100 + Math.random() * (200 - 100 + 1));

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", randomNum);
    checkbox.setAttribute("id", `checkbox-${i}`);
    checkbox.setAttribute("class", "checknormal");

    checkbox.addEventListener("change", (event) => {
        imprimirNumero(event.target);
    });

    let label = document.createElement("label");
    label.textContent = i + 1;
    label.appendChild(checkbox);

    document.body.appendChild(label);
    document.body.appendChild(document.createElement("br"));
}

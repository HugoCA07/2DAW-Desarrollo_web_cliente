"use strict"
{
    /**
     * getElementsByTagName
     * getElementsByClassName
     * getElementsByName
     * getElementById
     * querySelector
     * querySelectorAll
     */

    console.log("===============================================");
    let listas = document.getElementsByTagName("ul"); // Cojo las listas
    for(let elem of listas){
        console.log(elem);
        console.log(elem.textContent);
        console.log(elem.textContent.trim().split("\n")); // Más o menos para coger un array de los string que tiene
    }

    console.log("===============================================");
    listas = document.getElementsByClassName("cListaVehiculos"); // Cojo los elementos que sean de la clase cListaVehiculos
    for(let elem of listas){ // Recorro los elementos
        console.log(elem);
        console.log(elem.textContent);
    }

    console.log("===============================================");
    listas = document.getElementsByName("nLista"); // Cojo los elementos que sean del name nLista
    // Devuelve un NodeListof que si se puede iterar con ForEach
    listas.forEach((elem) => {
        console.log(elem);
        console.log(elem.textContent);
    });

    // for(let elem of listas){ // Recorro los elementos
    //     console.log(elem);
    //     console.log(elem.textContent);
    // }

    let elementociclomotor = document.getElementById("idCiclomotores");
    console.log(elementociclomotor);
    console.log(elementociclomotor.textContent);

    console.log("====== QUERYSELECTOR ======");
    let elemento = document.querySelector("#idCoches"); // id (#) o class (.)
    console.log(elemento);

    elemento = document.querySelector(".cListaVehiculos");
    console.log(elemento);

    elemento = document.querySelector("ul");
    console.log(elemento);

    elemento = document.querySelector("p").textContent;
    console.log(elemento);

    elemento = document.querySelector('[name="nLista"]');
    console.log(elemento);

    let elementos = document.querySelectorAll('[name="nLista"]');
    console.log(elementos);
    console.log("=== Recorrido con Foreach ===");
    elementos.forEach((elem) => {
        console.log(elem);
        console.log(elem.textContent);
    })
}
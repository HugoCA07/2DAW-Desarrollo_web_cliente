"use strict"
{
    let nuevoDiv = document.createElement("div");
    nuevoDiv.id = "id1";
    nuevoDiv.className = "cDiv1";
    nuevoDiv.style = "color: red";

    console.log(nuevoDiv);

    nuevoDiv.classList.add("cDiv2");
    console.log(nuevoDiv);

    let parrafo = document.createElement("p");
    parrafo.setAttribute("id", "idP");
    parrafo.setAttribute("name", "nP");
    parrafo.setAttribute("class", "cP");
    parrafo.setAttribute("ickkck", "caquita");

    console.log(nuevoDiv);

    console.log(parrafo.hasAttribute("id"));
    console.log(parrafo.hasAttribute("style"));
    console.log(parrafo.hasAttributes());

    let nombreatributos = parrafo.getAttributeNames();
    console.log(nombreatributos);
    parrafo.removeAttribute("style");

    console.log(parrafo.getAttribute("id"));
    console.log(parrafo.getAttributeNode("id"));

    let nodotextodelparrafo = document.createTextNode("Textodelparrafo");
    parrafo.append(nodotextodelparrafo);
    // APPENDCHILD = solo 1 parametro, devuelve lo que le metes
    // APPEND = array de cosas, no devuelve nada
    let np = nuevoDiv.appendChild(parrafo);
    np.setAttribute("id","idP2");

    console.log(nuevoDiv);

    document.body.appendChild(nuevoDiv);
}
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

    // ELIMINAR ATRIBUTOS

    parrafo.setAttribute("saludar","hola");
    parrafo.setAttribute("insultar","feo");

    console.log(parrafo.getAttributeNames());

    parrafo.removeAttribute("saludar");

    console.log(parrafo.getAttributeNames());

    parrafo.removeAttributeNode(parrafo.getAttributeNode("insultar"));

    console.log(parrafo.getAttributeNames());

    let attr1 = parrafo.getAttributeNode("id");
    let attr2 = parrafo.getAttribute("id");
    let attr3 = parrafo.id;

    console.log(attr1);
    console.log(attr2);
    console.log(attr3);

    // Atributos data:

    let enlace = document.querySelector(".enlace");
    console.log(enlace);
    enlace.setAttribute("data-fono","cobrar dinero");
    enlace.setAttribute("data-description","lo que sea");
    console.log(enlace.dataset);

    enlace.dataset.description = "lo que sea 33";

    console.log(enlace.dataset);

    console.log(enlace.getAttribute("data-id"));

    // Atributos CSS

    console.log(enlace.style);
    console.log(enlace.style.backgroundColor);
    console.log(enlace.style.color);

    enlace.style.setProperty("text-decoration","none");
    enlace.style.textDecoration = "underline";

    enlace.style.setProperty("background-color","purple");
    enlace.style.display = "inline-block";
    enlace.style.width = "50%";
    enlace.style.textAlign = "right";

    let html = document.documentElement;
    html.style.backgroundColor = "#378f61";

    let miH3 = document.querySelector("#idH3");

    miH3.classList.add("cUno");
    miH3.classList.add("cDos");
    console.log(miH3.classList);
    miH3.classList.remove("cDos");
    console.log(miH3.classList);

    miH3.classList.toggle("cUno");
    miH3.classList.toggle("cUno");
    console.log(miH3.classList[0]);
    console.log(miH3.classList[1]);
    console.log(miH3.classList.item(1));
    console.log(miH3.classList[2]);
    console.log(miH3.classList[3]);
    console.log(miH3.classList[4]); // No sale nada
    console.log(miH3.classList.contains("cDos"));

    miH3.classList.replace("cUno","cDos");

    console.log(miH3.classList);
}

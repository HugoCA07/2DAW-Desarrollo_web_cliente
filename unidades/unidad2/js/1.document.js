"use strict"
{
    console.log(window);
    console.log(window.document); // Devuelve el documento con un montón de propiedades
    console.log(window.document.documentElement); // Devuelve todo el documento
    console.log(document.documentElement); // Devuelve todo el documento
    console.log(document.head); // Devuelve el head
    console.log(document.body); // Devuelve el body
    console.log(document.doctype); // Devuelve el tipo de documento
    console.log(document.characterSet); // Devuelve la codificación (UTF-8)
    console.log(document.documentElement.lang); // Devuelve el idioma
    console.log(document.title); // Devuelve el title
    console.log(document.links); // Devuelve los links
    console.log(document.images); // Devuelve las imagenes
    console.log(document.forms); // Devuelve los formularios
    console.log(document.styleSheets); // Devuelve las hojas de estilos
    console.log(document.scripts); // Devuelve los scripts

    // Node
    // NodeList // [Node1,Node2,Node3,...]
    
    // HTMLCollection // Todos los HTMLElement
    // HTMLElement
    // let ac = new HTMLCollection(new HTMLElement())

    console.log(document.links);
    let mycoll = document.links;
    // No se puede recorrer ni con ForEach ni con Map

    for(let elem of mycoll){
        console.log(elem);
    }
}
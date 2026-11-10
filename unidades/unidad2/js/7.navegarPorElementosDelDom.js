"use strict"
{
    /**
     * PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene
     * firstElementChild = children[0] = primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)
     */

    console.log(document.body.children);
    console.log(document.body.children.length);

    for (let element of document.body.children){
        console.log(element);
    }

    console.log(document.body.parentElement);

    let aviones = document.querySelector("#idAviones");
    let primerAvion = aviones.firstElementChild;

    console.log(primerAvion);
    console.log(primerAvion.textContent);

    console.log(aviones.lastElementChild);
    console.log(aviones.lastElementChild.textContent);

    let anteriorLista = aviones.previousElementSibling;

    console.log(anteriorLista);

    let enlace = aviones.nextElementSibling;

    console.log(enlace);

    /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */

    console.log(document.body.childNodes.length);

    // Se puede recorrer con ForEach
    // document.body.childNodes.forEach(element => {
    //     console.log(element);
    // });
    
    console.log(document.body.parentNode);
    
    console.log(aviones.firstChild.nextSibling);
}
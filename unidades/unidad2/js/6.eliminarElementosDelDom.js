"use strict"
{
    /**
     * LOS NODOS REALMENTE NO SE ELIMINAN, SINO QUE SE DESCONECTAN DEL DOM
     * A partir de la página 20.
     * remove ()
     * removeChild (nodoHijo)
     * replaceChild(nodoNuevo,nodoAntiguo)
     */

    let miElemento = document.querySelector("#idH3");

    miElemento.remove();

    let listaCoches = document.querySelector("#idCoches");

    let hijoeliminado = listaCoches.removeChild(listaCoches.children[0]);

    listaCoches.replaceChild(hijoeliminado,listaCoches.children[0]);
}
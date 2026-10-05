"use strict"
{
    /*
    Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
    miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
    */

    const eliminarPatron = (texto, patron) => {
        if(!texto || !patron){
            return console.log("No ingresaste un texto o patrón");
        }
        else {
            let regex = new RegExp(patron, "g");
            let resultado = texto.replace(regex, "");
            return resultado;
        }
    }

    console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
}
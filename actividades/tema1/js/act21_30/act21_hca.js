"use strict";
{
    /*
    Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
    Mundo") devolverá "odnuM aloH"
    */

    function invertirCadena(cadena = "") {
        let res = "";

        for (let i = cadena.length - 1; i >= 0; i--) {
            res += cadena[i];
        }

        return res;
    }

    console.log(invertirCadena("Hola Mundo"));
}

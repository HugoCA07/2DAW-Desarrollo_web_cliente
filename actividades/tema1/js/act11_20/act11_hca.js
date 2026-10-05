"use strict"
{
    // 11. Programa una función que determine si un número es par o impar, pe. miFuncion(29)
    // devolverá Impar.

    function isPar(n) {
        let resultado = false;
        let cadenaresultado = "";

        if (n % 2 === 0) {
            resultado = true;
        }

        if (resultado === false) {
            cadenaresultado = "Impar";
        } else {
            cadenaresultado = "Par"
        }

        return cadenaresultado;
    }
}
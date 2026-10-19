"use strict";
{
    /* 
    Programa una función para contar el número de veces que se repite una palabra en un texto
    largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    */

    function contarPalabra(texto, palabra) {
        let palabras = texto.split(" ");
        let contador = 0;

        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === palabra) {
                contador++;
            }
        }

        return contador;
    }

    const contarpalabraflecha = (texto, palabra) => {
        let palabras = texto.split(" ");
        let contador = 0;

        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === palabra) {
                contador++;
            }
        }

        return contador;
    };

    console.log(contarPalabra("hola mundo adios mundo", "mundo"));
}

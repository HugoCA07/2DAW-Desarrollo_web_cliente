"use strict"
{
    /* 
    18. Programa una función que te devuelva el texto recortado según el número de caracteres
    indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".
    */

    function recortarCaracteres(frase,cantidad){
        let resultado = "";

        for(let i = 0; i < cantidad; i++){
            resultado += frase.charAt(i);
        }

        return resultado;
    }

    console.log(recortarCaracteres("Hola mundo", 4));
}
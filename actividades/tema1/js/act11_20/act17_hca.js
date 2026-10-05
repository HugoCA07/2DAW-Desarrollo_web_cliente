"use strict";
{
    // 17. Programa una función que cuente el número de caracteres de una cadena de texto, pe.
    // miFunción("Hola Mundo") devolverá 10.
    
    function contarCaracteres(cadena) {
        if(!cadena){
            return "No es una cadena";
        } else{
            let resultado = 0;
            for(let i = 0; i < cadena.length; i++){
                resultado++;
            }
            return resultado;
        }
    }

    console.log(contarCaracteres("Hola Mundo"));
}

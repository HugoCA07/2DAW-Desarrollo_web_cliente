"use strict"
{
    /*
    20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
    Hola Mundo Hola Mundo Hola Mundo.
    */

    function repetirTexto(texto,veces){
        // return texto.repeat(veces); tambien se puede hacer asi

        let resultado = "";

        for(let i = 0; i < veces; i++){
            resultado += texto + ' ';
        }

        return resultado;
    }

    console.log(repetirTexto("hola",5))
}
"use strict";
{
    /*
    16. Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
    Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
    del patrón.
    Ejemplo 1. Datos de entrada: 'A' y 5
    AAAAA
    AAAA
    AAA
    AA
    A
    */

    function dibujarDienteSierraInverso(caracter, base) {
        let resultado = "";

        for (let i = base; i > 0; i--) {
            for(let j = 0; j < i; j++){
                resultado += caracter;
            }
            resultado += "\n"
        }

        return resultado;
    }

    console.log(dibujarDienteSierraInverso("A",5));
}

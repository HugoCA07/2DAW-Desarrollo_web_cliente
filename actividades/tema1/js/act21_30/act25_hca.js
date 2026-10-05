"use strict";
{
    /*
    Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
    un sentido que en otro), pe. miFuncion(2002) devolverá true.
    */

    const esCapicua = (numero) => {
        if (isNaN(numero)) {
            return "El valor ingresado no es un número";
        } else {
            let str = numero.toString();
            let reverso = str.split("").reverse().join("");
            return str === reverso;
        }
    };

    console.log(esCapicua(2002));
    console.log(esCapicua(2502));
    console.log(esCapicua("hola quetal"));
}

"use strict"
{
    /*
    Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
    igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true
    */

    const esPalindromo = (palabra) => {
        if(!palabra){
            return "No ingresaste ninguna palabra";
        }
        else{
            palabra = palabra.toLowerCase();
            let palabraInvertida = palabra.split("").reverse().join("");
            return palabra === palabraInvertida;
        }
    }

    console.log(esPalindromo("Salas"));
}
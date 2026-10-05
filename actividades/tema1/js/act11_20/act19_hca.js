"use strict"
{
    /*
    19. Programa una función que dada una String te devuelva un Array de textos separados por
    cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
    */

    function separarfrase(frase,caracter){
        return frase.split(caracter);
    }

    console.table(separarfrase("hola que tal"," "));
}
"use strict"
{
    /*
    Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
    “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
    */

    const comprobarCadena = (cadena) => {
        let empiezaCon = cadena.startsWith("m") || cadena.startsWith("d");
        let terminaCon = cadena.endsWith("a") || cadena.endsWith("o");
        return empiezaCon && terminaCon;
    }

    const comprobarCadenaRegex = (cadena) => {
        let regex = /^[md].*[ao]$/;
        return regex.test(cadena);
    }

    console.log(comprobarCadena("mundo"));
    console.log(comprobarCadena("dado"));
    console.log(comprobarCadena("hola")); 
    console.log(comprobarCadenaRegex("mundo"));
    console.log(comprobarCadenaRegex("dado"));
    console.log(comprobarCadenaRegex("hola")); 
}
"use strict"
{
    // 12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
    // miFuncion(0,"C") devolverá 32°F

    function cambiargrados(grados, letragrado){
        letragrado = letragrado.toUpperCase();

        if(letragrado === "C"){
            return (grados * 9 / 5) + 32;
        }
        else if(letragrado === "F"){
            return (grados - 32) * 5 /9;
        }
        else {
            return "Parametro incorrecto";
        }
    }

    console.log(cambiargrados(0,"C"));
    console.log(cambiargrados(32,"F"));
    console.log(cambiargrados(32,"f"));
    console.log(cambiargrados(444,"FGV"));
}
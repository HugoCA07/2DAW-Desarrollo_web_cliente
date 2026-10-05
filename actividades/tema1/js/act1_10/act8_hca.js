"use strict"
{
    // 8. Mostrar la tabla de multiplicar de un número introducido por pantalla.

    let num = parseFloat(prompt("Dime el numero para mostrar la tabla de multiplicar"));

    for(let i = 1; i <= 10; i++){
        console.log(num * i);
    }
}
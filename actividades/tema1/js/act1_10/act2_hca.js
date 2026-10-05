"use strict"
{   
    // 2. Modifica el programa anterior: si los números no son un número o son menores o iguales a
    // ceros, que los vuelva a pedir.
    
    let a;
    let b;
    
    do{
        a = parseInt(prompt("Introduce el primer número:"));
        b = parseInt(prompt("Introduce el segundo número:"));
    } while (isNaN(a) || isNaN(b) || a < 0 || b < 0);

    if (a > b) {
        // alert("El primer número es mayor que el segundo.");
        console.log("El primer número es mayor que el segundo.");
    } else if (a < b) {
        // alert("El primer número es menor que el segundo.");
        console.log("El primer número es menor que el segundo.");
    } else {
        // alert("Los dos números son iguales.");
        console.log("Los dos números son iguales.");
    }
}
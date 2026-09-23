"use strict"
{
    // 1. Dados dos números 
    // indicar cuál es mayor, menor o si son iguales.

    let a = parseInt(prompt("Introduce el primer número:"));
    let b = parseInt(prompt("Introduce el segundo número:"));

    if (a > b) {
        // alert("El primer número es mayor que el segundo.");
        console.log("El primer número es mayor que el segundo.");
    } else if (a < b) {
        // alert("El primer número es menor que el segundo.");
        console.log("El primer número es menor que el segundo.");
    } else if (isNaN(a) || isNaN(b)){
        console.log("Alguno de los dos no es un numero")
    } else {
        // alert("Los dos números son iguales.");
        console.log("Los dos números son iguales.");
    }
}
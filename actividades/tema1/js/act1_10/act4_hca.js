"use strict"
{
    // 4. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
    // hasta introducir un número negativo y entonces mostrar el resultado.

    let sumatotal = 0;
    let productototal = 1;
    let contador = 0;

    let numbandera = parseFloat(prompt("Dime un numero"));

    while (numbandera >= 0) {
        sumatotal += numbandera;
        productototal *= numbandera;
        contador++;

        numbandera = parseFloat(prompt("Dime otro numero (o uno negativo para terminar)"));
    }

    if (contador > 0) {
        let mediatotal = sumatotal / contador;

        console.log("La suma total es: " + sumatotal);
        console.log("El producto total es: " + productototal);
        console.log("La media total es: " + mediatotal);
    } else {
        console.log("No introdujiste ningún número positivo.");
}

}
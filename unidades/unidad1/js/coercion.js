"use strict"
{
    let a = "15";
    let b = 100;
    console.log(a + b); // coerción implícita
    let c = a + b; // coerción implícita
    console.log(c); // 105

    console.log(typeof a); // string
    console.log(typeof b); // number
    console.log(typeof c); // string

    // Si se comparan dos valores de diferente tipo, 
    // JavaScript convierte uno de los valores 
    // al tipo del otro para poder hacer la comparación. 
    // Esto se llama coerción implícita.
    if (a < b) { // coerción implícita
        console.log("a es menor que b");
    } else {
        console.log("a es mayor que b");
    }
}
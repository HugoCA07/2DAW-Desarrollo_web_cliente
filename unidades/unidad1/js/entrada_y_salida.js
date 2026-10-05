"use strict"
{
    // Tipos de entradas y salidas en JavaScript

    console.time("ya");

    console.log("Hola mundo"); // Salida en consola

    let a = [[1,2,3],[4,5,6],[7,8,9]]; // Arreglo bidimensional
    console.table(a); // Salida en consola en formato de tabla
    console.timeEnd("ya");

    let otraRespuesta = prompt ("¿Cómo te llamas?", "Joseda Guapo");
    console.log(typeof otraRespuesta);
    // Todo lo que recoge es String
    // Si escape o cancela -> null
    // Aceptar sin haber escrito nada -> Cadena vacía

    let valorNumerico = parseInt(otraRespuesta);

    if (valorNumerico) {
        console.log(valorNumerico);
    }
}
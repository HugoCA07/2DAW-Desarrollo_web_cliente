"use strict"
{
    // 41. Programa una función que obtenga un numero aleatorio entre 501 y 600.
    const numrandom = () => {
        return Math.floor(Math.random() * 100 ) + 501;
    };

    console.log(numrandom());
    console.log(numrandom());
    console.log(numrandom());
    console.log(numrandom());
    console.log(numrandom());
    console.log(numrandom());
}
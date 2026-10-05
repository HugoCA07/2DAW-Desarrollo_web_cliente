"use strict"
{
    let miarray = [];

    miarray[0] = 1;
    miarray[1] = 2;
    miarray[2] = 3;
    miarray[3] = "Martinez";

    console.log(miarray);
    console.table(miarray);

    let mynewarray = new Array();
    mynewarray[0] = 1;
    mynewarray[1] = 2;
    mynewarray[2] = 3;
    mynewarray[3] = "Martinez";

    console.table(mynewarray);

    console.log("El tamaño del array es: " + miarray.length);

    let myarray3 = [1, 2, 3, "Martinez"];
    console.table(myarray3);

    let myarray4 = myarray3; // Por referencia, si se modifica uno el otro tb
    myarray4 = [...myarray3]; // Por valor, si se modifica uno el otro no se modifica

    console.log(myarray4);

    myarray3[3] = "Gonzalez";
    console.log(myarray4);

    // Arrays bidimensionales
    let arraybidimensional = new Array();

    arraybidimensional[0] = [1, 2, 3];
    arraybidimensional[1] = [4, 5, 6];
    arraybidimensional[2] = [7, 8, 9];

    console.table(arraybidimensional);

    let numFilas = 2;
    let numColumnas = 3;
    let arraybidimensional2 = new Array(numFilas);

    for(let i = 0; i < numFilas; i++) {
        arraybidimensional2[i] = new Array(numColumnas);
    }

    console.table(arraybidimensional2);

    let arraybi3 = Array.from(Array(numFilas), () => new Array(numColumnas));

    console.table(arraybi3);

    for(let i = 0; i < numFilas; i++) {
        for(let j = 0; j < numColumnas; j++) {
            arraybi3[i][j] = i + j;
        }
    }

    let arraybi4 = new Array(numFilas).fill().map(() => new Array(numColumnas));
    console.table(arraybi4);

    let arraybi5 = [...Array(numFilas)].map(() => new Array(numColumnas).fill(0));
    console.table(arraybi5);

    // OPERACIONES
     
    // JOIN

    console.log("===============================================================")

    let elems = ["uno", "dos", "tres"];
    let cadena = elems.join("-");
    console.log(cadena);

    // SPLIT

    let nums = "1,2,3,4,5";
    let arraynums = nums.split(",");
    console.table(arraynums);

    for(let i = 0; i < arraynums.length; i++) {
        arraynums[i] = parseInt(arraynums[i]);
    }

    console.table(arraynums);

    // PUSH

    elems.push("cuatro");
    console.table(elems);

    // POP

    let ultimo = elems.pop();
    console.log(ultimo);
    console.table(elems);

    // SHIFT

    let primero = elems.shift();
    console.log(primero);
    console.table(elems);

    // REVERSE

    elems.reverse();
    console.table(elems);

}
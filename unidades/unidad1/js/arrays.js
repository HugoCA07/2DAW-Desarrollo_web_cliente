"use strict";
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

    for (let i = 0; i < numFilas; i++) {
        arraybidimensional2[i] = new Array(numColumnas);
    }

    console.table(arraybidimensional2);

    let arraybi3 = Array.from(Array(numFilas), () => new Array(numColumnas));

    console.table(arraybi3);

    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            arraybi3[i][j] = i + j;
        }
    }

    let arraybi4 = new Array(numFilas).fill().map(() => new Array(numColumnas));
    console.table(arraybi4);

    let arraybi5 = [...Array(numFilas)].map(() =>
        new Array(numColumnas).fill(0),
    );
    console.table(arraybi5);

    // OPERACIONES

    // JOIN

    console.log(
        "===============================================================",
    );

    let elems = ["uno", "dos", "tres"];
    let cadena = elems.join("-");
    console.log(cadena);

    // SPLIT

    let nums = "1,2,3,4,5";
    let arraynums = nums.split(",");
    console.table(arraynums);

    for (let i = 0; i < arraynums.length; i++) {
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

    // SLICE

    let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanessa"];
    let hombres = nombres.slice(1, 3);
    console.table(hombres);

    // FILTER

    const usuarios = [
        { name: "Juan", age: 25 },
        { name: "Ana", age: 30 },
        { name: "Pedro", age: 20 },
        { name: "Maria", age: 35 },
    ];
    const mayoresDe30 = usuarios.filter((user) => user.age > 30);
    console.table(mayoresDe30);

    // FIND

    let re = /M[a-z]*/i;
    const usuarioEncontrado = usuarios.find((user) => re.exec(user.name));
    console.table(usuarioEncontrado);

    // SOME

    let existe = usuarios.some((user) => user.age > 25);
    console.log(existe);

    // FINDINDEX

    // DEVUELVE -1 SI NO ENCUENTRA EL ELEMENTO, SI LO ENCUENTRA DEVUELVE EL INDICE DEL ELEMENTO
    let indice = usuarios.findIndex((user) => user.name === "Pedro");
    console.log(indice);

    // CONCAT

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = array1.concat(array2);
    console.table(array3);

    // REDUCE

    const edad_total = usuarios.reduce((total, user) => total + user.age, 0);
    console.log(edad_total);

    const misnumeros = [1, 2, 3, 4, 5];
    const suma = misnumeros.reduce((total, num) => total + num, 0);
    console.log(suma);

    const misnumerosbid = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];
    const arrayssumabid = misnumerosbid.reduce(
        (total, num) => total.concat(num),
        [],
    );
    console.log(arrayssumabid);

    const sumabid = misnumerosbid.reduce(
        (total, num) => total + num.reduce((subtotal, n) => subtotal + n, 0),
        0,
    );
    console.log(sumabid);

    // INCLUDES

    const moto = ["Honda", "Yamaha", "Suzuki"];
    const existeMoto = moto.includes("Vespa");
    console.log(existeMoto);

    // ITERAR SOBRE ARRAY

    let vector = [1, 2, "Hola", 4.5, -3];
    for (let i = 0; i < vector.length; i++) {
        console.log(vector[i]);
    }

    vector.forEach(function (elem) {
        console.log(elem);
    });

    vector.forEach((elem) => console.log(elem));
    vector.forEach((elem, indice) =>
        console.log(`Elemento: ${elem}, Indice: ${indice}`),
    );

    // MAP

    let vector2 = vector.map((elem) => (elem % 2 === 0 ? elem : "NO PAR"));
    console.table(vector2);

    let usuariosnuevos = usuarios.map((usr) => ({
        name: usr.name,
        age: usr.age * 2,
    }));
    console.table(usuariosnuevos);
    console.table(usuarios);

    for (let usuario of usuarios){
        console.log(usuario);
    }
}

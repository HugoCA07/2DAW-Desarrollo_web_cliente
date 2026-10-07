"use strict";
{
    // En un vector de números, indicar:
    // a. El número de elementos del vector.
    // b. Cuántos son pares y cuántos impares y cuáles son.
    // c. La suma de todos los números negativos.
    // d. El producto de todos los números positivos.
    // e. Cuántos son primos y cuáles son.
    // f. Los números que ocupan las posiciones pares del vector.
    // g. El número mayor.
    // h. El número menor.
    // i. La media de todos los números, los números que están por encima y los que están por
    // debajo.
    // j. El vector ordenado de mayor a menos y viceversa.
    // k. Buscar un valor introducido por el usuario e indicar si existe o no.

    let nums = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 15, 15, 16, 17, 1, 17, 1, 363,
        6, 31, 6, 16, 617637, 3862, -23,
    ];

    // a:

    console.log(nums.length);

    // b:

    const res = nums.reduce(
        (acum, actval) => {
            actval % 2 === 0
                ? acum.listaPares.push(actval)
                : acum.listaImpares.push(actval);
            return acum;
        },
        { listaPares: [], listaImpares: [] },
    );

    console.log(`Pares: [${res.listaPares.join(", ")}]`);
    console.log(`Impares: [${res.listaImpares.join(", ")}]`);

    // c:

    const sumnegativos = nums.reduce((acum, val) => {
        if (val < 0) {
            acum += val;
        }
        return acum;
    }, 0);

    console.log(`La suma de los negativos es: ${sumnegativos}`);

    // d:

    const prodpositivos = nums.reduce((acum, val) => {
        if (val >= 0) {
            acum *= val;
        }
        return acum;
    }, 1);

    console.log(`El producto de los positivos es: ${prodpositivos}`);

    // e:

    function esPrimo(numero) {
        if (numero <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }

        return true;
    }

    const primosycuales = nums.reduce(
        (acum, actval) => {
            if (esPrimo(actval)) {
                acum.contador++;
                acum.primos.push(actval);
            }
            return acum;
        },
        { contador: 0, primos: [] },
    );

    console.log(`Hay ${primosycuales.contador} números primos.`);
    console.log(`Los primos son: ${primosycuales.primos.join(", ")}`);

    // f:

    const posicionespares = nums.filter((_, i) => i % 2 === 0);

    console.table(posicionespares);

    // g:

    const maxnum = Math.max(...nums);
    console.log(maxnum);

    // h:

    const minnum = Math.min(...nums);
    console.log(minnum);

    // i:

    
}

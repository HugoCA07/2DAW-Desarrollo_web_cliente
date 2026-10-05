"use strict"
{
    let numeros = [100,5,15,1,99];
    numeros.sort();
    console.table(numeros);

    // ORDENAR DE MENOR A MAYOR

    let numeros2 = [100,5,15,1,99];
    numeros2.sort((a,b) => a - b); // MAS CORRECTO Q EL DE ABAJO
    console.table(numeros2);

    let numeros3 = [100,5,15,1,99];
    numeros3.sort((a,b) => a < b ? -1 : 1);
    console.table(numeros3);

    let numeros4 = [100,5,15,1,99];
    numeros4.sort((a,b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    console.table(numeros4);

    // ORDENAR DE MAYOR A MENOR

    let nums2 = [100,5,15,1,99];
    nums2.sort((a,b) => b - a); // MAS CORRECTO Q EL DE ABAJO
    console.table(nums2);

    let nums3 = [100,5,15,1,99];
    nums3.sort((a,b) => b < a ? -1 : 1);
    console.table(nums3);

    let nums4 = [100,5,15,1,99];
    nums4.sort((a,b) => {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    });
    console.table(nums4);

    // ORDENAR ARRAY DE STRINGS

    let nombres = ["Juan", "Ana", "Pedro", "María"];
    nombres.sort();
    console.table(nombres);

    nombres.sort((a,b) => a.localeCompare(b));
    console.table(nombres);

    nombres.sort((a,b) => b.localeCompare(a));
    console.table(nombres);
}
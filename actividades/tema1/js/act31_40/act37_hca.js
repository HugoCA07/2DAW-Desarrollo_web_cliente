"use strict";
{
    // 37. Separar números pares e impares
    function separarParesImpares(array) {
        if (!Array.isArray(array)) return "Debes ingresar un array";

        const resultado = {
            pares: [],
            impares: [],
        };

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                resultado.pares.push(array[i]);
            } else {
                resultado.impares.push(array[i]);
            }
        }

        return resultado;
    }

    console.table(separarParesImpares([2,4,6,8,1,3,5,6,8]));

    // Ver solo uno de los dos array:
    console.table(separarParesImpares([2,4,6,8,1,3,5,6,8]).pares);   
    console.table(separarParesImpares([2,4,6,8,1,3,5,6,8]).impares);   
}

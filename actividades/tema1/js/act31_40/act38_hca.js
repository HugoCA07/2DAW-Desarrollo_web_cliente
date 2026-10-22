"use strict";
{
    // 38. Array ordenado de forma ascendente y descendente
    function ordenarArray(array) {
        if (!Array.isArray(array)) return "Debes ingresar un array";

        // El ... es para no cambiar valores del array de forma directa
        const asc = [...array].sort((a, b) => a - b);
        const desc = [...array].sort((a, b) => b - a);

        return { asc, desc }; // Devuelvo objeto para no hacer dos funciones diferentes, te lo devuelve ascendente y descendente
    }

    console.table(ordenarArray([1,2,4,6,7,2,7,8,10,15]));

    // Igual que la anterior, para verlos por separado:
    console.table(ordenarArray([1,2,4,6,7,2,7,8,10,15]).asc);
    console.table(ordenarArray([1,2,4,6,7,2,7,8,10,15]).desc);
}

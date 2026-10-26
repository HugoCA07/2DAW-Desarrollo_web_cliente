"use strict";
{
    // 36. Devolver el número más alto y el más bajo
    function obtenerMayorMenor(array) {
        if (!Array.isArray(array) || array.length === 0)
            return "Array no válido";

        let maximo = Math.max(...array);
        let minimo = Math.min(...array);

        return [maximo, minimo];
    }

    console.table(obtenerMayorMenor([1,5,7,8,12,99,6,7,8,1]));
}

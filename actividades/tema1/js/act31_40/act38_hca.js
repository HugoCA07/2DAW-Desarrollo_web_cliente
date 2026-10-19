"use strict";
{
    // 38. Array ordenado de forma ascendente y descendente
    function ordenarArray(array) {
        if (!Array.isArray(array)) return "Debes ingresar un array";

        const asc = [...array].sort((a, b) => a - b);
        const desc = [...array].sort((a, b) => b - a);

        return { asc, desc };
    }
}

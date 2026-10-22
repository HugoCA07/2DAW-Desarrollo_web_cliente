"use strict";
{
    // 35. Elevar números de un array al cuadrado
    function elevarAlCuadrado(array) {
        if (!Array.isArray(array)) return "Debes ingresar un array";

        return array.map((numero) => numero * numero);
    }

    console.table(elevarAlCuadrado([2,6,9,10]));
}

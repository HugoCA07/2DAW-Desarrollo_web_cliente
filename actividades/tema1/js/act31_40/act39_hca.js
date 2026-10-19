"use strict";
{
    // 39. Eliminar elementos duplicados de un array
    function eliminarDuplicados(array) {
        if (!Array.isArray(array)) return "Debes ingresar un array";

        return [...new Set(array)];
    }
}

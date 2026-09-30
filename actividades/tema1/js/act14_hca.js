"use strict";
{
    // 14. Programa una función que devuelva el monto final después de aplicar un descuento a una
    // cantidad dada, pe. miFuncion(1000, 20) devolverá 800

    function aplicarDescuento(cantidad, descuento){
        return cantidad - (cantidad * descuento / 100);
    }

    console.log(aplicarDescuento(1000,20));
}

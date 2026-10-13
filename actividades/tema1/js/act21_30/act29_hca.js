"use strict";
{
    // 29. Programa una función para convertir números de base binaria a decimal y viceversa, pe.
    // miFuncion(100,2) devolverá 4 base 10

    const convertirBase = (numero, base) => {
        if (base === 2) {
            console.log(
                `${numero} base ${base} = ${parseInt(numero, 2)} base 10`,
            );
        } else if (base === 10) {
            console.log(
                `${numero} base ${base} = ${numero.toString(2)} base 2`,
            );
        } else {
            console.log("La base solo puede ser 2 o 10 ");
        }
    };

    convertirBase(2, 10);
    convertirBase(4, 10);
    convertirBase(1011, 2);
}

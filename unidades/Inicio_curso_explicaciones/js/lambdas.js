"use strict"
{
    const sumar = (n1, n2) => n1 + n2;
    console.log(sumar(3, 5));

    const doble = numero => numero * 2;
    console.log(doble(4));

    const saludar = nombre => {
        const mensaje = `Hola, ${nombre}`;
        return mensaje;
    };
    console.log(saludar("Ana"));
}
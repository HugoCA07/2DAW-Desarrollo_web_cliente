"use strict";
{
    // 40.Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
    // este formato dd/mm/aaa.
    function calcularEdad(fechaTexto) {
        if (typeof fechaTexto !== "string" || !fechaTexto.includes("/")) {
            return "Formato de texto no válido";
        }

        const partes = fechaTexto.split("/");
        const diaNacimiento = parseInt(partes[0], 10); // El 10 como segundo param es para indicarle que es decimal, si no a veces te lo pone en ASCII y cosas raras
        const mesNacimiento = parseInt(partes[1], 10);
        const anioNacimiento = parseInt(partes[2], 10);

        const hoy = new Date();
        const anioActual = hoy.getFullYear();
        const mesActual = hoy.getMonth() + 1;
        const diaActual = hoy.getDate();

        let edad = anioActual - anioNacimiento;

        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
            edad--;
        }

        return edad;
    }

    console.log(calcularEdad("20/12/2007"));
}

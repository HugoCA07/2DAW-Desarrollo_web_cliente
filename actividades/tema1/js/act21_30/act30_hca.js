"use strict";
{
    // 30. Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento.

    const edadpersona = (fechanac) => {
        const fechaNacimiento = new Date(fechanac);
        const hoy = new Date();

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
            edad--;
        }

        return edad;
    };

    console.log(edadpersona("1995-10-25"));
}

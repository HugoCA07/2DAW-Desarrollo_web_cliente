"use strict";
{
    // 32. Contar vocales y consonantes
    function contarVocalesConsonantes(texto) {
        if (typeof texto !== "string" || texto === "") return "Texto inválido";

        const cadena = texto.toLowerCase();

        // Mejor hecho
        let vectorcadena = cadena.split("").reduce((acum,actval) => {
            if ("aeiouáéíóúäëïöü".includes(actval)) {
                acum[0]++;
            } else if (actval.match(/[a-zñ]/)) {
                acum[1]++;
            }

            return acum;
        }, [0, 0])


        // for (let i = 0; i < cadena.length; i++) {
        //     let letra = cadena[i];

        //     if ("aeiouáéíóúäëïöü".includes(letra)) {
        //         vocales++;
        //     } else if (letra.match(/[a-zñ]/)) {
        //         consonantes++;
        //     }
        // }

        return `Vocales: ${vectorcadena[0]}, Consonantes: ${vectorcadena[1]}`;
    }

    const contarVocalesConsonantesFlecha = (texto) => {
        if (typeof texto !== "string" || texto === "") return "Texto inválido";

        let vocales = 0;
        let consonantes = 0;

        const cadena = texto.toLowerCase();

        for (let i = 0; i < cadena.length; i++) {
            let letra = cadena[i];

            if ("aeiouáéíóúü".includes(letra)) {
                vocales++;
            } else if (letra.match(/[a-zñ]/)) {
                consonantes++;
            }
        }

        return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
    };

    console.log(
        contarVocalesConsonantes(
            "Hola me encanta Javascript este texto es de ejemplo",
        ),
    );

    console.log(
        contarVocalesConsonantesFlecha(
            "Hola me encanta Javascript este texto es de ejemplo",
        ),
    );

    console.log(
        contarVocalesConsonantesFlecha(
            "Esto es un texto diferentee, voy a poner vocaaaaleeees",
        ),
    );
}

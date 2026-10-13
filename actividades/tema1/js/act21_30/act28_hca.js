"use strict";
{
    //28. En un vector de cadenas, indicar:
    // a. La cadena más corta.
    // b. La cadena más larga.
    // c. La cadena con más letras ‘a’.
    // d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.

    //  a:

    const vectorCadenas = [
        "Hola, mundo",
        "Aprender JavaScript es divertido",
        "El cielo es azul",
        "Café por la mañana",
        "Programación web",
    ];

    console.log(
        vectorCadenas.reduce((min, actual) =>
            actual.length < min.length ? actual : min,
        ),
    );

    // b:

    console.log(
        vectorCadenas.reduce((min, actual) =>
            actual.length > min.length ? actual : min,
        ),
    );

    // c:

    let totalA = 0;
    let maxA = 0;
    let palabraMasA = "";

    vectorCadenas.forEach((elem) => {
        for (let letra of elem.toLowerCase()) {
            if (letra === "a") {
                totalA++;
            }
        }

        if (totalA > maxA) {
            maxA = totalA;
            palabraMasA = elem;
        }

        totalA = 0;
    });

    console.log("La palabra con más 'a' es:", palabraMasA);

    // d:

    const cadenasConB = vectorCadenas.filter((elem) =>
        elem.toLowerCase().includes("b"),
    );

    const totalCadenasConB = cadenasConB.length;

    console.log(`Hay ${totalCadenasConB} cadenas que tienen la 'b'.`);
    console.log("Las cadenas son:", cadenasConB);
}

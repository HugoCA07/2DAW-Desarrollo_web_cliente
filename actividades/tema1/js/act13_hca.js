"use strict";
{
    // 13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo
    // n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
    // miFuncion(5) devolverá 120.

    function calcularFactorial(numero) {
        if (isNaN(numero)) {
            console.log("Tiene que ser un número");
        }

        if (numero < 0) {
            console.log("No se puede con numeros negativos");
        }

        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }

        return factorial;
    }

    function calcularFactorialRecursivo(numero) {
        if (isNaN(numero)) {
            console.log("Tiene que ser un número");
            return;
        }

        if (numero < 0) {
            console.log("No se puede con números negativos");
            return;
        }

        // cASO base
        if (numero === 0 || numero === 1) {
            return 1;
        }

        return numero * calcularFactorialRecursivo(numero - 1);
    }

    console.log(calcularFactorial(5));

    console.log(calcularFactorialRecursivo(5));
}

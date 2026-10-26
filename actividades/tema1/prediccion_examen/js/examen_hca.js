"use strict";
{
    /*
    PREDICCIÓN DE EXAMEN - TEMA 1
    Basada en las actividades 1-41, la ampliación de regexp y la práctica.
    Cada ejercicio mezcla varios contenidos, como suele hacer el profe.
    Resuelve cada uno debajo de su enunciado y prueba con console.log / console.table.
    */
    // =========================================================================
    // EJERCICIO 1 (bucles + prompt + validación) - Basado en act. 2, 4, 9
    // Pide números al usuario hasta que introduzca 0. Cada número debe validarse
    // (si no es un número, se vuelve a pedir sin contarlo). Al terminar muestra:
    //   a. Cuántos números se han introducido.
    //   b. La suma de los positivos y la suma de los negativos.
    //   c. La media de todos ellos.
    //   d. El mayor y el menor.
    // =========================================================================
    let num;
    let contadornums = 0;
    let sumapos = 0;
    let sumaneg = 0;
    let sumatotal = 0;
    let mayornum = null;
    let menornum = null;
    do {
        let entrada = prompt("Dime el número (introduce 0 para terminar):");
        if (entrada === null) break;
        num = Number(entrada); // Number rechaza "12abc", parseInt lo aceptaría como 12
        if (entrada.trim() === "") num = NaN;
        if (isNaN(num)) {
            alert("Por favor, introduce un número válido.");
        } else if (num !== 0) {
            contadornums++;
            if (num > 0) {
                sumapos += num;
            } else {
                sumaneg += num;
            }
            sumatotal += num;
            if (mayornum === null || num > mayornum) {
                mayornum = num;
            }
            if (menornum === null || num < menornum) {
                menornum = num;
            }
        }
    } while (num !== 0);
    if (contadornums > 0) {
        let media = sumatotal / contadornums;
        console.log(`Se han introducido ${contadornums} números.`);
        console.log(
            `La suma de los positivos es ${sumapos} y la de los negativos es ${sumaneg}.`,
        );
        console.log(`La media de todos los números es ${media.toFixed(2)}.`);
        console.log(
            `El mayor número es ${mayornum} y el menor es ${menornum}.`,
        );
    } else {
        console.log("No se ha introducido ningún número válido");
    }
    // =========================================================================
    // EJERCICIO 2 (funciones numéricas) - Basado en act. 10, 11, 13, 25, 29
    // Programa una función que reciba un número entero positivo y devuelva un objeto:
    //   { esPrimo: boolean, parImpar: "Par"|"Impar", factorial: number,
    //     esCapicua: boolean, binario: string }
    // Ej: miFuncion(121) -> { esPrimo: false, parImpar: "Impar", factorial: ..., esCapicua: true, binario: "1111001" }
    // Si el parámetro no es válido, devuelve "Parámetro no válido".
    // =========================================================================
    const datosnum = (num) => {
        // Number.isInteger rechaza decimales, strings y NaN a la vez
        if (!Number.isInteger(num) || num <= 0) {
            return "Parámetro no válido";
        }
        let isPrimo = num > 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
        let isPar = num % 2 === 0 ? "Par" : "Impar";
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        let numStr = num.toString();
        let isCapicua = numStr === numStr.split("").reverse().join("");
        let binario = num.toString(2);
        return {
            esPrimo: isPrimo,
            parImpar: isPar,
            factorial: factorial,
            esCapicua: isCapicua,
            binario: binario,
        };
    };
    console.log(datosnum(121));
    // =========================================================================
    // EJERCICIO 3 (cadenas) - Basado en act. 17-24, 32
    // Programa una función que reciba una frase y devuelva un objeto con:
    //   a. La frase invertida (palabra por palabra al revés, "Hola Mundo" -> "odnuM aloH").
    //   b. Número de vocales y de consonantes.
    //   c. Cuántas palabras tiene y cuál es la más larga.
    //   d. Si la frase es un palíndromo (ignorando mayúsculas y espacios).
    //   e. La frase sin una palabra/patrón que se pase como segundo parámetro.
    // =========================================================================
    const datospalabra = (frase, patron) => {
        if (typeof frase !== "string") {
            return "No es una cadena";
        }

        let fraseInversa = frase.split("").reverse().join("");

        let vocales = 0;
        let consonantes = 0;

        for (let letra of frase.toLowerCase()) {
            if ("aeiouáéíóúü".includes(letra)) {
                vocales++;
            } else if (/[a-zñ]/.test(letra)) {
                consonantes++;
            }
        }

        // \s+ evita contar palabras vacías si hay varios espacios seguidos
        let palabras = frase.trim() === "" ? [] : frase.trim().split(/\s+/);
        let palabraMasLarga = palabras.reduce((acc, actval) => {
            return actval.length > acc.length ? actval : acc;
        }, "");

        // Palíndromo ignorando mayúsculas Y espacios
        let limpia = frase.toLowerCase().replace(/\s/g, "");
        let isPalindroma = limpia === limpia.split("").reverse().join("");

        // Si el patrón es un string se escapan los caracteres especiales de regex
        let fraseSinPatron = frase;
        if (patron) {
            const fuente =
                patron instanceof RegExp
                    ? patron.source
                    : patron.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            fraseSinPatron = frase
                .replace(new RegExp(fuente, "ig"), "")
                .replace(/\s+/g, " ")
                .trim();
        }

        return {
            fraseInversa: fraseInversa,
            vocales: vocales,
            consonantes: consonantes,
            numpalabras: palabras.length,
            palabraMasLarga: palabraMasLarga,
            isPalindroma: isPalindroma,
            fraseSinPatron: fraseSinPatron,
        };
    };

    console.log(datospalabra("Hola Mundo", /ola/));
    console.log(datospalabra("Anita lava la tina", "a"));
    console.log(datospalabra("hola   mundo", "."));
    // =========================================================================
    // EJERCICIO 4 (expresiones regulares) - Basado en act. 15, 26, 33, 34 y ampliación
    // Programa una función validar(tipo, valor) que valide según el tipo:
    //   "dni"      -> 8 dígitos y una letra.
    //   "email"    -> email válido que empiece por letra.
    //   "nombre"   -> solo letras (con tildes y ñ) y espacios, cada palabra empieza en mayúscula.
    //   "telefono" -> 9 dígitos que empiecen por 6, 7, 8 o 9.
    //   "fecha"    -> formato dd/mm/aaaa (día 01-31, mes 01-12).
    // Devuelve true/false (o "Tipo no soportado"). Prueba al menos 3 casos por tipo.
    // =========================================================================
    // =========================================================================
    // EJERCICIO 5 (arrays de números) - Basado en act. 27, 35-39
    // Dado el vector:
    //   const nums = [12, -4, 7, 7, 33, 0, -15, 8, 21, 2, 8, 97, -4];
    //   a. Elimina los duplicados.
    //   b. Devuelve otro array con cada número elevado al cuadrado.
    //   c. Separa pares e impares en un objeto.
    //   d. Suma de los negativos y producto de los positivos.
    //   e. Cuántos números primos hay y cuáles son.
    //   f. Mayor y menor.
    //   g. Ordenado de mayor a menor y de menor a mayor SIN modificar el original.
    //   h. Media, y cuántos están por encima y por debajo de ella.
    //   i. Pide un valor al usuario e indica si está en el vector y en qué posición.
    // =========================================================================
    // =========================================================================
    // EJERCICIO 6 (arrays de cadenas) - Basado en act. 28 y arrays/arraysort
    // Dado el vector:
    //   const nombres = ["maría", "Juan", "ana", "Pedro", "álvaro", "Beatriz", "luis", "Ana"];
    //   a. La cadena más corta y la más larga.
    //   b. La que tiene más letras 'a'.
    //   c. Cuántas contienen la 'b' y cuáles son.
    //   d. Ordenadas alfabéticamente (respetando tildes) y en orden inverso.
    //   e. Todas con la primera letra en mayúscula y el resto en minúscula, sin duplicados
    //      (Ana y ana cuentan como la misma).
    //   f. Un string único con todas separadas por " - ".
    // =========================================================================
    // =========================================================================
    // EJERCICIO 7 (fechas) - Basado en act. 30, 31, 40
    // Programa una función que reciba una fecha de nacimiento en formato dd/mm/aaaa y devuelva:
    //   a. Edad actual (teniendo en cuenta si ya ha cumplido años este año).
    //   b. Día de la semana en que nació (en español).
    //   c. Cuántos días faltan para su próximo cumpleaños.
    //   d. Si es mayor de edad.
    // Valida el formato con una regex y que la fecha exista (ej. 31/02/2000 no vale).
    // =========================================================================
    // =========================================================================
    // EJERCICIO 8 (aleatorios + objetos + Set/Map) - Basado en act. 41, math, objetosliterales, setYMap
    // Simula 100 tiradas de dos dados (cada dado da un número aleatorio entre 1 y 6) y:
    //   a. Guarda las sumas obtenidas en un array.
    //   b. Usa un Map para contar cuántas veces ha salido cada suma (2-12).
    //   c. Muestra la suma más frecuente y la menos frecuente.
    //   d. Usa un Set para saber qué sumas distintas han salido.
    //   e. Muestra el resultado con console.table ordenado de la suma más frecuente a la menos.
    // =========================================================================
    // =========================================================================
    // EJERCICIO 9 (clases / objetos) - Basado en clases.js y objetosliterales.js
    // Crea una clase Alumno con atributos privados nombre, notas (array) y métodos:
    //   - constructor(nombre, notas = [])
    //   - get nombre
    //   - añadirNota(nota)  (valida que esté entre 0 y 10)
    //   - media()
    //   - aprobado()  (true si la media >= 5)
    // Crea una clase AlumnoFP que herede de Alumno y añada el atributo ciclo y un método
    // que devuelva "nombre (ciclo) - media".
    // Crea un array de 4 alumnos y muestra: el de mejor media, los aprobados y los alumnos
    // ordenados por media descendente.
    // =========================================================================
    // =========================================================================
    // EJERCICIO 10 (recursividad + timers + try/catch) - Basado en funcionesrecursivas, timers, try_catch
    //   a. Función recursiva que sume los dígitos de un número (sumaDigitos(1234) -> 10).
    //   b. Función recursiva que calcule el n-ésimo número de Fibonacci.
    //   c. Cuenta atrás desde 5 con setInterval que muestre cada segundo y se detenga
    //      al llegar a 0 mostrando "¡Fin!".
    //   d. Envuelve en try/catch una función que lance un Error si recibe un parámetro que
    //      no sea un número, y captura el error mostrando el mensaje.
    // =========================================================================
}

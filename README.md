# Desarrollo Web en Entorno Cliente (2º DAW)

Resumen de los contenidos de JavaScript vistos en la **Unidad 1** y en las **actividades del Tema 1**.

Todos los ficheros siguen la misma estructura: `"use strict"` al principio y el código dentro de un bloque `{ ... }` para que las variables no se filtren al ámbito global.

---

## Índice

1. [Unidad 1: teoría](#unidad-1-teoría)
   - [Variables y constantes](#variables-y-constantes)
   - [Tipos primitivos](#tipos-primitivos)
   - [Operadores](#operadores)
   - [Coerción](#coerción)
   - [Entrada y salida](#entrada-y-salida)
   - [Estructuras de control](#estructuras-de-control)
   - [Funciones](#funciones)
   - [Funciones flecha (lambdas)](#funciones-flecha-lambdas)
   - [Funciones recursivas](#funciones-recursivas)
   - [Strings](#strings)
   - [Math](#math)
   - [Date](#date)
   - [Arrays](#arrays)
   - [Ordenar arrays](#ordenar-arrays)
   - [Objetos literales](#objetos-literales)
   - [Clases](#clases)
   - [Set y Map](#set-y-map)
   - [Expresiones regulares](#expresiones-regulares)
   - [Try / catch](#try--catch)
   - [Timers](#timers)
2. [Actividades del Tema 1](#actividades-del-tema-1)
3. [Práctica: Piedra, papel o tijeras](#práctica-piedra-papel-o-tijeras)

---

## Unidad 1: teoría

Ficheros en [unidades/unidad1/js/](unidades/unidad1/js/).

### Variables y constantes

[variables_y_constantes.js](unidades/unidad1/js/variables_y_constantes.js)

- `let`: tiene ámbito de **bloque**; fuera del bloque `{}` donde se declara no existe.
- `var`: tiene ámbito de **función**; si se declara dentro de un bloque, se ve fuera de él.
- `const`: no se puede reasignar (`g = g + 1` da error).
- Las variables declaradas dentro de una función no se ven desde fuera.

```js
{
    let e = "no se ve fuera";
    var f = "sí se ve fuera";
}
console.log(f); // OK
```

### Tipos primitivos

[tipos_primitivos.js](unidades/unidad1/js/tipos_primitivos.js)

- `number` (enteros y decimales), `boolean`, `string`, `undefined`, `null`.
- Concatenación con `+` o con **template literals**: `` `${d} y ${e}` ``.
- Una variable declarada y no inicializada vale `undefined`.

### Operadores

[operadores.js](unidades/unidad1/js/operadores.js)

- Asignación compuesta: `+=`, `-=`, `*=`, `/=`.
- `===` compara **valor y tipo** (`10 === "10"` es `false`); `==` solo compara valor tras convertir tipos.

### Coerción

[coercion.js](unidades/unidad1/js/coercion.js)

JavaScript convierte tipos automáticamente (coerción implícita):

```js
"15" + 100   // "15100" (string)
"15" < 100   // true (convierte "15" a número)
```

`typeof` sirve para comprobar el tipo de una variable.

### Entrada y salida

[entrada_y_salida.js](unidades/unidad1/js/entrada_y_salida.js)

- `console.log()`, `console.table()` (muestra arrays/objetos en tabla).
- `console.time("id")` / `console.timeEnd("id")` para medir tiempos.
- `prompt(mensaje, valorPorDefecto)`:
  - Siempre devuelve un **string**.
  - Si se pulsa cancelar o Escape → `null`.
  - Si se acepta sin escribir → cadena vacía `""`.
- `parseInt()` / `parseFloat()` para convertir a número.

### Estructuras de control

[estructuras_de_control.js](unidades/unidad1/js/estructuras_de_control.js)

- `if / else if / else`
- `switch` con `case`, `break` y `default`.
- Bucles `while`, `do...while`, `for`.
- Operador ternario: `condicion ? valorSi : valorNo`.
- Validar entradas repitiendo el `prompt` hasta que el valor sea correcto:

```js
while (!edadAna) {
    edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
}
```

### Funciones

[funciones.js](unidades/unidad1/js/funciones.js)

- Declaración clásica: `function suma(a, b) { return a + b; }`
- Parámetros **rest**: `function f(p1, p2, ...resto)` → `resto` es un array.
- Parámetros con **valor por defecto**: `function (a, b, c = 0)`.
- Funciones **anónimas** asignadas a variables: `let f4 = function () {...}`.
- Funciones **autoejecutables (IIFE)**:

```js
(function () { console.log("Me ejecuto sola"); })();
(() => { console.log("Yo también"); })();
```

### Funciones flecha (lambdas)

[lambdas.js](unidades/unidad1/js/lambdas.js)

```js
const sumar = (n1, n2) => n1 + n2;      // return implícito
const doble = numero => numero * 2;     // un parámetro sin paréntesis
const saludar = nombre => {             // cuerpo con llaves → return explícito
    return `Hola, ${nombre}`;
};
```

### Funciones recursivas

[funcionesrecursivas.js](unidades/unidad1/js/funcionesrecursivas.js)

Una función que se llama a sí misma. Siempre necesita un **caso base** para parar.

- Cuenta atrás desde `n` hasta 0.
- Suma de `n + (n-1) + ... + 0`.
- Saber si un número es par o impar restando 2 hasta llegar a 0 o 1.

### Strings

[string.js](unidades/unidad1/js/string.js)

| Método | Para qué sirve |
| --- | --- |
| `toLowerCase()` / `toUpperCase()` | Pasar a minúsculas / mayúsculas |
| `concat(s2)` | Unir cadenas |
| `indexOf(c, desde)` / `lastIndexOf(c, desde)` | Posición de un carácter (`-1` si no está) |
| `charAt(i)` | Carácter en la posición `i` |
| `replace(a, b)` / `replaceAll(a, b)` | Reemplazar la primera / todas las apariciones |
| `split(sep)` | Convertir en array separando por `sep` |
| `substring(ini, fin)` | Extraer un trozo |
| `includes(x)` | Saber si contiene `x` |
| `trim()` | Quitar espacios al principio y al final |
| `repeat(n)` | Repetir la cadena `n` veces |
| `length` | Longitud |

### Math

[math.js](unidades/unidad1/js/math.js)

- Constantes: `Math.PI`, `Math.E`.
- Redondeo: `Math.floor()` (abajo), `Math.ceil()` (arriba), `Math.round()` (al más cercano).
- `Math.abs()`, `Math.min()`, `Math.max()`, `Math.pow()`, `Math.sqrt()`.
- `Math.random()` devuelve `0 <= x < 1`.
- Número aleatorio entre `min` y `max`:

```js
Math.ceil(14 + Math.random() * (51 - 14)); // entre 14 y 51
```

### Date

[date.js](unidades/unidad1/js/date.js)

- Crear fechas: `new Date()`, `new Date("2001/09/11 8:31:25")`, `new Date(año, mes, día, h, m, s)`.
- **Los meses van de 0 a 11.**
- Getters: `getDay()` (día de la semana 0-6), `getDate()` (día del mes), `getMonth()`, `getFullYear()`, `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`, `getTime()` (ms desde 01/01/1970).
- Setters: `setDate()`, `setMonth()`, `setFullYear()`, `setHours()`...
- Formatos: `toDateString()`, `toLocaleDateString()`, `toUTCString()`.

### Arrays

[arrays.js](unidades/unidad1/js/arrays.js)

**Creación**

```js
let a = [1, 2, 3];
let b = new Array();
```

**Copia por referencia vs por valor**

```js
let ref = original;          // si cambia uno, cambia el otro
let copia = [...original];   // copia independiente (spread)
```

**Arrays bidimensionales**

```js
let m = Array.from(Array(filas), () => new Array(columnas));
let m2 = [...Array(filas)].map(() => new Array(columnas).fill(0));
```

**Métodos principales**

| Método | Qué hace |
| --- | --- |
| `join(sep)` | Array → string |
| `push()` / `pop()` | Añadir / quitar al final |
| `shift()` | Quitar el primero |
| `reverse()` | Invertir el orden |
| `slice(ini, fin)` | Copiar un trozo |
| `concat(otro)` | Unir arrays |
| `includes(x)` | ¿Existe el elemento? |
| `filter(fn)` | Elementos que cumplen la condición |
| `find(fn)` | Primer elemento que cumple la condición |
| `findIndex(fn)` | Índice del primero que cumple (`-1` si no hay) |
| `some(fn)` | ¿Alguno cumple la condición? |
| `map(fn)` | Nuevo array transformando cada elemento |
| `reduce(fn, inicial)` | Acumular todos los elementos en un valor |
| `forEach(fn)` | Recorrer el array |

```js
const mayoresDe30 = usuarios.filter(user => user.age > 30);
const edadTotal = usuarios.reduce((total, user) => total + user.age, 0);
const aplanado = [[1, 2], [3, 4]].reduce((acc, fila) => acc.concat(fila), []);
```

**Recorrer un array**: `for` clásico, `forEach`, y `for...of`.

### Ordenar arrays

[arraysort.js](unidades/unidad1/js/arraysort.js)

`sort()` sin parámetros ordena **como texto** (`[100, 5, 15]` → `[100, 15, 5]`), por eso con números hay que pasar una función de comparación:

```js
numeros.sort((a, b) => a - b); // menor a mayor
numeros.sort((a, b) => b - a); // mayor a menor

nombres.sort((a, b) => a.localeCompare(b)); // strings A-Z (respeta tildes)
nombres.sort((a, b) => b.localeCompare(a)); // strings Z-A
```

### Objetos literales

[objetosliterales.js](unidades/unidad1/js/objetosliterales.js)

```js
let animal = {
    tipo: "tigre",
    dimensiones: { alto: 50, ancho: 90 },
    maullar() { console.log(`Soy un ${this.tipo}`); }
};
```

- Acceso con punto `animal.tipo` o corchetes `animal["tipo"]`.
- Objetos anidados y métodos (con `this`).
- `Object.keys()` y `Object.values()`.
- **Destructuring**:

```js
const { tipo, dimensiones: { alto } } = animal;
const { alto: a } = animal.dimensiones; // renombrar
```

- Unir objetos:

```js
const juntos = { producto, colores };       // por referencia (anidados)
const fusion = { ...producto, ...colores }; // copia, propiedades en un solo objeto
```

### Clases

[clases.js](unidades/unidad1/js/clases.js)

```js
class Punto {
    #cX;   // privado
    cY;    // público

    constructor(cX = 0, cY = 0) { this.#cX = cX; this.cY = cY; }

    get coordX() { return this.#cX; }
    set coordX(x) { this.#cX = x; }

    static distancia(p1, p2) { ... }   // se llama con Punto.distancia()
}

class Puntito extends Punto {
    #cZ;
    constructor(z = 0, x, y) { super(x, y); this.#cZ = z; }
}
```

- Atributos privados con `#`.
- `get` / `set` para acceder a los atributos.
- Métodos `static` (de la clase, no de la instancia).
- Herencia con `extends` y `super()`.

### Set y Map

[setYMap.js](unidades/unidad1/js/setYMap.js)

**Set**: colección de valores **sin duplicados**.

- `add()`, `has()`, `delete()`, `clear()`, `size`.
- Se recorre con `forEach` o `for...of`.
- Quitar duplicados de un array: `[...new Set(array)]`.
- Pasar a array: `Array.from(set)`.

**Map**: pares **clave → valor** (la clave puede ser de cualquier tipo).

- `set(clave, valor)`, `get(clave)`, `has(clave)`, `size`.
- Recorrer: `map.forEach((valor, clave) => ...)` o `for (let [clave, valor] of map)`.
- Crear desde array: `new Map([["name", "Juan"], ["age", 33]])`.
- `[...map.keys()]`, `[...map.values()]`.

### Expresiones regulares

[expresionesregulares.js](unidades/unidad1/js/expresionesregulares.js)

**Creación**

```js
const re1 = /.a.o/i;
const re2 = new RegExp(".a.o", "i");
```

**Flags**

| Flag | Significado |
| --- | --- |
| `i` | Ignora mayúsculas/minúsculas |
| `g` | Global, busca todas las coincidencias |
| `m` | Multilínea (`^` y `$` funcionan por línea) |
| `y` | Sticky, busca desde `lastIndex` |

**Símbolos**

| Símbolo | Significado |
| --- | --- |
| `.` | Cualquier carácter |
| `^` / `$` | Inicio / fin de cadena |
| `[abc]` / `[^abc]` | Uno de esos / ninguno de esos |
| `\d` / `\D` | Dígito / no dígito |
| `\w` / `\W` | Letra, número o `_` / lo contrario |
| `\s` / `\S` | Espacio en blanco / lo contrario |
| `\b` / `\B` | Límite de palabra / no límite |
| `\.` | Escapar un carácter especial |
| `*` | 0 o más veces |
| `+` | 1 o más veces |
| `?` | 0 o 1 vez |
| `{n}` / `{n,}` / `{n,m}` | Exactamente n / n o más / entre n y m |

**Métodos**

- `re.test(cadena)` → `true` / `false`.
- `re.exec(cadena)` → la siguiente coincidencia (con `g` avanza `lastIndex`).
- `cadena.match(re)` → array con todas las coincidencias (con `g`).

```js
const re = /\b[a-záéíóú]{3}\b/gi; // palabras de 3 letras
"la ola del mar".match(re);       // ["ola", "del", "mar"]
```

### Try / catch

[try_catch.js](unidades/unidad1/js/try_catch.js)

```js
try {
    if (isNaN(num)) throw new Error("No es un número");
} catch (error) {
    console.error(error);
} finally {
    console.log("Se ejecuta siempre");
}
```

- Dividir entre 0 no lanza error, da `Infinity`.
- Un array `const` se puede modificar por dentro (`v[0] = 10`), lo que no se puede es reasignarlo.

### Timers

[timers.js](unidades/unidad1/js/timers.js)

- `setTimeout(fn, ms)`: ejecuta `fn` una vez pasado el tiempo.
- `setInterval(fn, ms)`: ejecuta `fn` cada `ms` milisegundos.
- `clearInterval(id)` / `clearTimeout(id)` para pararlos.
- **Callback**: se pasa la función **sin paréntesis** (`setTimeout(f, 4000)`). Con paréntesis (`f()`) se ejecuta en ese momento.
- El código es asíncrono: lo que hay después del `setTimeout` se ejecuta antes que el timeout.

```js
let codigo = setInterval(f2, 1000);
setTimeout(() => clearInterval(codigo), 10000); // para a los 10 s
```

---

## Actividades del Tema 1

Ficheros en [actividades/tema1/js/](actividades/tema1/js/).

### Actividades 1 – 10: condicionales, bucles y funciones básicas

| Nº | Enunciado | Conceptos |
| --- | --- | --- |
| 1 | Indicar cuál de dos números es mayor, menor o si son iguales | `if/else`, `prompt`, `isNaN` |
| 2 | Igual que la 1, pidiendo los números de nuevo si no son válidos | `do...while`, validación |
| 3 | Dada una hora, decir qué hora será un segundo después | Condicionales anidados |
| 4 | Suma, producto y media hasta introducir un número negativo | `while` con valor bandera |
| 5 | Números entre dos números dados | `for` |
| 6 | Números impares entre dos números dados | `for`, operador `%` |
| 7 | Divisores de un número | `for`, `%` |
| 8 | Tabla de multiplicar | `for` |
| 9 | Calculadora (+, -, *, /) con validación | `switch` |
| 10 | Saber si un número es primo | Función, bucle |

### Actividades 11 – 20: funciones y cadenas

| Nº | Enunciado | Conceptos |
| --- | --- | --- |
| 11 | Par o impar | Función, `%` |
| 12 | Celsius ↔ Fahrenheit | Función, `toUpperCase` |
| 13 | Factorial (iterativo y recursivo) | Bucle, recursividad |
| 14 | Aplicar un descuento a una cantidad | Función |
| 15 | Validar un DNI | Regex `/^\d{8}[A-Za-z]$/` |
| 16 | Dibujar diente de sierra inverso | Bucles anidados |
| 17 | Contar caracteres de una cadena | Bucle, `length` |
| 18 | Recortar texto a N caracteres | `charAt` |
| 19 | Separar texto en array | `split` |
| 20 | Repetir un texto N veces | Bucle / `repeat` |

### Actividades 21 – 30: cadenas, arrays y fechas

| Nº | Enunciado | Conceptos |
| --- | --- | --- |
| 21 | Invertir una cadena | Bucle inverso |
| 22 | Contar cuántas veces aparece una palabra | `split`, función flecha |
| 23 | Palíndromo | `split("").reverse().join("")` |
| 24 | Eliminar un patrón de un texto | `new RegExp(patron, "g")`, `replace` |
| 25 | Número capicúa | `toString`, `reverse` |
| 26 | Empieza por "m"/"d" y termina en "a"/"o" | `startsWith`/`endsWith` y regex `/^[md].*[ao]$/` |
| 27 | Estadísticas de un vector de números (pares, primos, mayor, menor, media, ordenar, buscar...) | `filter`, `reduce`, `sort`, `includes` |
| 28 | Estadísticas de un vector de cadenas (más corta, más larga, más "a", con "b") | `reduce`, `filter` |
| 29 | Binario ↔ decimal | `parseInt(n, 2)`, `toString(2)` |
| 30 | Edad a partir de la fecha de nacimiento | `Date` |

### Actividades 31 – 41: validaciones, arrays y aleatorios

| Nº | Enunciado | Conceptos |
| --- | --- | --- |
| 31 | Años pasados desde una fecha | `Date`, `instanceof` |
| 32 | Contar vocales y consonantes | `reduce`, `includes`, `match` |
| 33 | Validar un nombre (sin números ni símbolos) | Regex con tildes y `ñ` |
| 34 | Validar un email | Regex |
| 35 | Elevar al cuadrado los números de un array | `map`, `Math.pow` |
| 36 | Mayor y menor de un array | `Math.max(...array)`, spread |
| 37 | Separar pares e impares | Objeto con dos arrays, `push` |
| 38 | Ordenar ascendente y descendente | `[...array].sort()`, devolver objeto |
| 39 | Eliminar duplicados | `[...new Set(array)]` |
| 40 | Edad a partir de una fecha `dd/mm/aaaa` | `split`, `parseInt(x, 10)`, `Date` |
| 41 | Número aleatorio entre 501 y 600 | `Math.random`, `Math.floor` |

### Ampliación de expresiones regulares

[ampliacion_regexp/act1.js](actividades/tema1/js/ampliacion_regexp/act1.js): validar un email que tenga que empezar por letra.

```js
/^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
```

---

## Práctica: Piedra, papel o tijeras

[actividades/tema1/practica_piedra_papel_tijeras/](actividades/tema1/practica_piedra_papel_tijeras/)

Juego para dos jugadores por `prompt` que junta lo visto en el tema:

- Validación de nombres con expresión regular (empiezan por mayúscula).
- Validación de cada jugada (`R`, `P`, `S`).
- Arrays para guardar los nombres y el historial de jugadas de cada jugador.
- Bucle principal `do...while` y `switch` para decidir quién gana cada ronda.
- Contadores de victorias y empates.

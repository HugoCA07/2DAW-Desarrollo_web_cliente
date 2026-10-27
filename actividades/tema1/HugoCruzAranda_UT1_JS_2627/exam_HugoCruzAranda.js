"use strict"
{
    /*
        He intentado usar la mayoría de cosas del temario, si quieres buscar cada ejercicio:
        Ctrl + f busca por EJERCICIO <numero>:
     */

    // Inicializo array de pruebas para los ejercicios (dado en la pagina 3)
    let usuarios = [
        {
            nombre: "Antonio Álvarez Quintero",
            DNI: "11223444X",
            edad: 99
        },
        {
            nombre: "Pepa Márquez Sete",
            DNI: "21147465T",
            edad: 7
        },
        {
            nombre: "Federico García Molina",
            DNI: "24545535G",
            edad: 32
        },
        {
            nombre: "María González Mújica",
            DNI: "45678912L",
            edad: 4
        },
        {
            nombre: "Ángel García Álvarez",
            DNI: "28765000G",
            edad: 6
        },
        {
            nombre: "Ángel García Álvarez",
            DNI: "1234A",
            edad: 14
        }
    ];

    // EJERCICIO 1:
    /**
     * Crea una función llamada ejercicio1 que reciba como parámetro el array original y devuelva un
     * array con los identificadores de los usuarios.
     * Un identificador está compuesto por:
     * - La primera letra (minúsculas y sin tildes) del nombre
     * - Las tres primeras letras del primer apellido (minúsculas y sin tildes)
     * - Las tres primeras del segundo apellido (minúsculas y sin tildes)
     * - Los tres últimos dígitos del DNI.
     * Usa la función map. (máximo 3p) (si no usas map, máximo 2p).
     * NOTA: Se entiende que siempre existe el nombre y los dos apellidos, y ninguno de ellos es
     * compuesto. Además, todos tienen, al menos, 3 caracteres. Y están separados por un espacio.
     */

    const ejercicio1 = (usuarios) => {
        if (!(usuarios instanceof Array)) {
            return false;
        }
        let identificadores = [];
        usuarios.map(
            (usuario) => {
                let identificador = usuario.nombre.charAt(0).toLowerCase();

                // Cojo el nombre y lo meto en un array

                let nombre = usuario.nombre.split(" ");

                // Le meto los tres primeros caracteres del apellido

                identificador += nombre[1].substring(0, 3).toLowerCase();
                identificador += nombre[2].substring(0, 3).toLowerCase();
                identificador += usuario.DNI.substring(usuario.DNI.length - 4, usuario.DNI.length - 1);

                // Limpio el identificador de tíldes
                identificador = identificador.replaceAll("á", "a");
                identificador = identificador.replaceAll("é", "e");
                identificador = identificador.replaceAll("í", "i");
                identificador = identificador.replaceAll("ó", "o");
                identificador = identificador.replaceAll("ú", "u");

                // Meto al array de identificadores el identificador actual
                identificadores.push(identificador);
            }
        )
        return identificadores;
    }

    console.log(ejercicio1(usuarios));

    // EJERCICIO 2:
    /**
     * Crea una función llamada ejercicio2 que reciba como parámetro el array original y devuelva un
     * array con los DNI que sean válidos.
     * Usa las funciones filter y map. (máximo 3p) (si no usas filter y map, máximo 2p)
     * NOTA: Los DNI pueden tener la letra en mayúscula o minúscula pero no tienen un separador
     * entre número y letra.
     */

    const ejercicio2 = (usuarios) => {
        if (!(usuarios instanceof Array)) {
            return false;
        }
        let DNIs = [];

        usuarios.filter(
            (usuario) => {
                let regexpDNI = /[0-9]{8}[A-Z]/;
                // Compruebo primero que evidentemente tenga 8 digitos y una letra
                // Si da false la expresion regular directamente no lo meto a los usuarios
                // usuarios es el array que le llega, NO lo modifica
                return regexpDNI.test(usuario.DNI);
            }
        )

        usuarios.map(
            (usuario) => {
                let caracteresDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
                    'H', 'L', 'C', 'K', 'E'];
                let resDNI = parseInt(usuario.DNI.substring(0, usuario.DNI.length - 1));
                // Me quedo con el resto del DNI al dividirlo entre 23
                resDNI %= 23;
                // Guardo el DNI si coinciden
                if (caracteresDNI[resDNI] === usuario.DNI.charAt(usuario.DNI.length - 1)) {
                    DNIs.push(usuario.DNI);
                }
            }
        )
        return DNIs;
    }

    console.log(ejercicio2(usuarios));

    // EJERCICIO 3:
    /**
     * Crea una función llamada ejercicio3 que devuelva el array de objetos ordenado de la
     * siguiente manera:
     *  Si un número aleatorio entre 1 y 10 es par, las personas deben aparecer ordenados
     * por su edad, de mayor a menor
     *  Si es impar, se ordenan por la longitud total de su nombre completo (de menor a
     * mayor longitud).
     *  Si el número aleatorio generado no está entre 1 y 10: -0,5p
     * Nota: Usar la función sort (máximo 2p)
     */

    const ejercicio3 = (usuarios) => {
        if (!(usuarios instanceof Array)) {
            return false;
        }
        const numAleatorio = Math.round(1 + Math.random() * (10 - 1));
        // Genero un numero aleatorio entre 1 y 10 incluidos

        // Si el numero es par ordeno por edades de mayor a menor
        if (numAleatorio % 2 === 0) {
            usuarios.sort((a, b) => b.edad - a.edad);
        }
        // Si es impar los ordeno por longitud de menor a mayor
        else if (numAleatorio % 2 === 1) {
            usuarios.sort((a, b) => a.nombre.length - b.nombre.length);
        }

        return usuarios;
    }

    console.log(ejercicio3(usuarios));

    // EJERCICIO 4:
    /**
     * Crea una función llamada ejercicio4 que reciba como parámetro el array original y devuelva un
     * array con las edades que sean el doble de un número primo ordenado de menor a mayor edad
     * NOTA1: Usa las funciones filter, sort y map. (máximo 2p) (si no usas filter y map, máximo 1p)
     */

    // Funcion auxiliar que comprueba si un numero es primo
    const isPrimo = (num) => {
        if (num === 0 || num === 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    const ejercicio4 = (usuarios) => {
        if (!(usuarios instanceof Array)) {
            return false;
        }
        let edades = [];
        let usuariosfiltrados = [];

        // PRIMERO FILTRO USUARIOS
        usuarios.filter((usuario) => {
            if (isPrimo(Math.round(usuario.edad / 2))){
                usuariosfiltrados.push(usuario);
            }
        })

        // Recorro los usuarios filtrados y meto sus edades a el array de edades
        usuariosfiltrados.map(
            (usuario) => {
                edades.push(usuario.edad);
            }
        )

        // Lo ordeno de menor a mayor de edad
        edades.sort((a, b) => a.edad - b.edad);

        return edades;
    }

    console.log(ejercicio4(usuarios));
}
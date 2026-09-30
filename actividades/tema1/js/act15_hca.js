"use strict"
{
    // 15. Indica si un NIF es válido o no.
    
    /**
     * Un DNI es válido cuando cumple las siguientes condiciones:
     * 1. Comienza exactamente con un bloque de 8 dígitos numéricos (del 0 al 9).
     * 2. Termina con una única letra del alfabeto (tanto mayúscula como minúscula).
     * 3. No contiene espacios, guiones ni caracteres adicionales antes o después.
     */

    function validarDNI(dni){
        const regexp_dni = /^\d{8}[A-Za-z]$/;

        return regexp_dni.test(dni);
    }

    console.log(validarDNI("28983245W"));
}
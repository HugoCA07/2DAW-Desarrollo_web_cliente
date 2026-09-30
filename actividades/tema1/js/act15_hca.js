"use strict"
{
    // 15. Indica si un NIF es válido o no.
    
    function validarDNI(dni){
        const regexp_dni = /^\d{8}[A-Za-z]$/;

        return regexp_dni.test(dni);
    }

    console.log(validarDNI("28983245W"));
}
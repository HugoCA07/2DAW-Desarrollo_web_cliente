"use strict";
{
    // 33. Validar un nombre válido sin números ni caracteres especiales
    function validarNombre(nombre) {
        if (typeof nombre !== "string" || nombre === "") return false;

        // ^ inicio de cadena, A-Za-z obvio desde A mayus hasta z minus añado las letras raras, \s para espacios blancos, + para uno o mas, $ es fin de la cadena
        const expresion = /^[A-Za-zÑñÁéíóúÁÉÍÓÚüÜ\s]+$/;
        return expresion.test(nombre);
    }

    console.log(validarNombre("hugo cruz aranda"));
    console.log(validarNombre("mario gutierrez"));
    console.log(validarNombre("antonio paragüas"));
    console.log(validarNombre("antonñiTA gonSzaaÍÖÑñss"));
    console.log(validarNombre("jose david $ gil <<"));
}

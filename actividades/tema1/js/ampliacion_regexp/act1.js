"use strict"
{
    const validarEmail = ((email) => {
        var validar_email = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return validar_email.test(email);
    });

    console.log(validarEmail("hcruara245@g.educaand.es")); // Deberia dar true
    console.log(validarEmail(".LOLOAN@....lcoam")); // Deberia dar false
    console.log(validarEmail("email-invalido")); // Deberia dar false
}
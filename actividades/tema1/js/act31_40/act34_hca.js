"use strict";
{
    // 34. Validar un email válido
    function validarEmail(email) {
        if (typeof email !== "string" || email === "") return false;

        const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}\$/;
        return expresion.test(email);
    }

    validarEmail("hcruara245@g.educaand.es");
    validarEmail("-An___T@##g.edaa.aa.PPP=");
}

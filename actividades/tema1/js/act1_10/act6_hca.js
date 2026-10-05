"use strict"
{
    // 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario.

    let numinicio = parseInt(prompt("Dime el numero de inicio"));
    let numfinal = parseInt(prompt("Dime el numero de final"));

    if(numfinal < numinicio){
        console.log("Valores de numeros erroneos")
    }
    else {
        console.log("Numero inicial" + numinicio)

        for(let i = numinicio + 1; i < numfinal; i++){
            if(i % 2 !== 0){
                console.log(i)
            }
        }

        console.log("Numero final" + numfinal);
    }
}
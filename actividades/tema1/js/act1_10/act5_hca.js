"use strict"
{
    // 5. Mostrar todos los números que hay entre dos números introducidos por el usuario

    let numinicio = parseInt(prompt("Dime el numero de inicio"));
    let numfinal = parseInt(prompt("Dime el numero de final"));

    if(numfinal < numinicio){
        console.log("Valores de numeros erroneos")
    }
    else {
        console.log(numinicio)

        for(let i = numinicio + 1; i < numfinal; i++){
            console.log(i);
        }

        console.log(numfinal);
    }
}
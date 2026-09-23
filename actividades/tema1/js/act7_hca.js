"use strict"
{
    // 7. Mostrar todos los números divisores de un número introducido por el usuario

    let num = parseFloat(prompt("Dime un numero"));

    if(num < 0){
        console.log("Numero invalido");
    }
    else{
        console.log("Numero limite " + num)

        for(let i = 1; i <= num; i++){
            if(num % i == 0){
                console.log(i);
            }
        }
    }
}
"use strict"
{
    // 10. Programa una función que determine si un número es primo (aquel que solo es divisible por
    // sí mismo y 1) o no, pe. miFuncion(7) devolverá true

    function isPrimo(num){
        let banderaprimo = true;

        for(let i = 2; i < num; i++){
            if(num % i === 0){
                banderaprimo = false;
            }
        }

        return banderaprimo;
    }

    console.log(isPrimo(7));
    console.log(isPrimo(8));
    console.log(isPrimo(10));
}
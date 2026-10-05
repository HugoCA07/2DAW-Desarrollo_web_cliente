"use strict";
{
    function cuentaAtras(n) {
        if (n === 0) {
            console.log(n);
        } else {
            console.log(n);
            cuentaAtras(n - 1);
        }
    }

    cuentaAtras(10);

    let sumaAtras = (n) => {
        if (n === 0) {
            return 0;
        } else {
            return n + sumaAtras(n - 1);
        }
    };

    console.log(sumaAtras(4));

    let parImpar = num => {
        if(num === 0){
            return "PAR";
        }
        else if (num === 1){
            return "IMPAR";
        } else{
            return parImpar(num-2);
        }
    }

    console.log(parImpar(8));
}

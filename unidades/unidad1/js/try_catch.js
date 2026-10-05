"use strict"
{
    // try {
    //     let num;
    //     prompt("Introduce un número");
    //     if (isNaN(num)) {
    //         throw new Error("El valor introducido no es un número");
    //     }
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     console.log("Bloque finally ejecutado");
    // }

    try {
        let a = 10, b = 0;
        let c = a / b;
        console.log(c);

        const v = [1, 2, 3];
        v[0] = 10;
        console.log(v);


    } catch (error) {
        console.error(error);
    }

    
}
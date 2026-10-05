"use strict"
{
    let a = "hola";
    var b = "mundo";

    function saludar() {
        console.log(a);
        console.log(b);

        let c = "no se ve";
        let d = "desde fuera";
    }

    // console.log(c);
    // console.log(d); 
    // No se van a ver ninguna

    {
        let e = "soy una variable var";
        var f = "soy una variable let";
    }

    // console.log(e);
    // No se va a ver la variable let, pero si la var
    console.log(f);

    const g = 10;
    console.log(g);

    // g=g+1; No se puede modificar una constante
    // console.log(g);

    saludar();
}
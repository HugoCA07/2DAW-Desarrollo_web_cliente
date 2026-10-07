"use strict"
{
    console.log("1");
    setTimeout(() => {
        console.log("timeout");
    }, 2000);

    console.log("2");

    setTimeout(f(),4000);

    // SIN PARENTESIS SE LLAMA CALLBACK
    setTimeout(f,4000);

    function f() {
        console.log("timeout f");
    }

    console.log("3");

    function f2() {
        console.log("timeout f2");
    }

    function f3(){
        clearInterval(cod,10000);
    }

    let codigo = setInterval(f2,1000);
    setTimeout(() => {
        return clearInterval(codigo);
    }, 10000);
}
"use strict"
{
    function suma(a, b) {
        return a + b;
    }

    let numsuma = suma(10, 20);

    console.log(numsuma);

    function f2(param1, param2, ...param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    f2(2,3,33,44,55,66,77,88,99);

    let f4 = function(param1,param2,param3=0){

        let r = parseInt(param1) + parseInt(param2) + parseInt(param3);

        return r;
    }

    console.log(f4);

    (function(){
        console.log("Hola soy una función anónima autoejecutable");
    }) ();

    ;(() => {
        console.log("Hola soy una función anónima autoejecutable");
    })();
}
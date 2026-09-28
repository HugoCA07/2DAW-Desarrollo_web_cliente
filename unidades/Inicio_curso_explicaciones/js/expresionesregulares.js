"use strict"
{
    const re1 = /.a.o/i; // i <-- ignora upper y lowers cases
    const re2 = new RegExp(".a.o","i");
    const re3 = new RegExp(/.a.o/,"i");

    console.log("re1");

    console.log(re1.test("GATO"));
    console.log(re1.test("PERRO"));

    const re4 = new RegExp("^fútbol","m"); // ^ <-- al principio // m <-- multiline

    console.log("re4");

    console.log(re4.test("no me gusta el fútbol"));
    console.log(re4.test("fútbol es lo que me gusta"));

    console.log(re4.test("Sevilla \nfútbol club"));

    const re5 = /./;

    console.log("re5");
    console.log(re5.test("x"));
    console.log(re5.test("abc"));
    console.log(re5.test("x"));

    let s = "table footballfootbolin";
    const re6 = /foo/y;

    console.log("re6");
    console.log(re6.lastIndex);
    console.log(re6.test(s));
    console.log(re6.lastIndex);

    const re7 = /\.a.o/i;

    console.log("re7");
    console.log(re7.test("GATO"));
    console.log(re7.test(".ATO"));
    console.log(/\.a.o/i.test(".aTO"));

    console.log(/A./.test("Ab"));

    const re8 = /^[^aeiou]$/i;

    console.log("re8");
    console.log(re8.test("BI"));

    const re9 = /[^aeiou]|.$/i;

    console.log("re9");
    console.log(re9.test("ajgbagbabhgblagb"));

    const re10 = /[^ca|ma]/i;

    console.log("re10");
    console.log(re10.test("mapa"));

    /*
        [0-9] = \d
        [^0-9] = \D
        [A-Z] (ni Ñ ni tildes)
        [a-z]
        [A-Za-z0-9]
        [^A-Za-z0-9]
        [ \t\r\n] = \s <-- Con espacio al principio
        [^ \t\r\n] = \S
    */

    const re11 = /^[A-Za-z0-9]$/;

    console.log("re11");
    console.log(re11.test("79"));
    console.log(re11.test("7"));

    /*
        \b = texto con espacios o simbolos de puntuación al principio o al final
        \B = lo contrario a \b
    */

    const re12 = /fo\b/i;

    console.log("re12");
    console.log(re12.test("Esto es un parrafo de texto."));
    console.log(re12.test("Esto es un parrafos"));
}
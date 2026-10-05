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
        [A-Za-z0-9] = \w (la 'w' incluye el guión bajo '_')
        [^A-Za-z0-9] = \W (la 'W' verifica que no incluya tampoco '_')
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

    const re13 = /\bfo/i;

    console.log("re13");
    console.log(re13.test("Esto es un párra fos"));

    const re14 = /a*/;

    // Todas true
    console.log("re14");
    re14.test("");
    re14.test("a");
    re14.test("aa");
    re14.test("aba");
    re14.test("bbb");

    const re15 = /a+/;

    console.log("re15");
    re15.test(""); // false
    re15.test("a"); // true
    re15.test("aa"); // true
    re15.test("aba"); // true
    re15.test("bbb"); // false

    const re16 = /disparos?/;

    console.log("re16");
    re16.test("escuché disparos en la habitación");
    re16.test("efectuó un disparo al aire");

    /*
        {n} --> se repite n veces (hay por lo menos 2 numeros)
        {n,} --> se repite n o más veces sin limites
        {n,m} --> se repite entre n y m veces
    */

    const re17 = /[0-9]{2}/;

    console.log("re17");
    re17.test(47); // true
    re17.test(88); // true
    re17.test(1); // false
    re17.test(125); // true

    const re18 = /^[0-9]{2}$/;

    console.log("re18");
    re18.test(4); // false
    re18.test(55); // true
    re18.test(125); // false

    const re19 = /^[0-9]{3,}$/;

    console.log("re19");
    re19.test(33); // false 
    re19.test(345); // true
    re19.test(3450); // true

    const re20 = /^[0-9]{2,5}$/;

    console.log("re20");
    re20.test(2); // false
    re20.test(444); // false
    re20.test(100000); // false

    const re21 = /^\d{2}$/;

    console.log("re21");
    re21.test("99");

    const re22 = /^\D{2}$/;  // Dos caracteres que no sean dígitos, y nada más.

    console.log("re22");
    console.log(re21.test("aa33bb"));
    console.log(re21.test("aa"));

    const re23 = /^\w{3}$/;

    console.log("re23");
    re23.test("2aB7*");

    const re24 = /\b[a-záéíóú]{3}\b/gi; // g (global), busca muchas veces

    console.log("re24");
    let frase = "la ola del mar es azul y tenía más sal que el salero"
    console.log(re24.exec(frase));
    console.log(re24.lastIndex);
    console.log(re24.exec(frase));
    console.log(re24.lastIndex);
    console.log(re24.exec(frase));
    console.log(re24.lastIndex);
    console.log(re24.exec(frase));
    console.log(re24.lastIndex);

    let x = frase.match(re24); // Te devuelve un array con las ocurrencias
    console.table(x);
}
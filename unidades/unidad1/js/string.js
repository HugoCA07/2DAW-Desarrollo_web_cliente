"use strict";
{
    let s = "Hoy parece que LLUEVE";
    console.log(s.toLowerCase());
    console.log(s);

    let s2 = new String("Lo que sea");
    console.log(s.toUpperCase());

    console.log(s.concat(s2));

    console.log(s.indexOf("L", 16)); // Si no lo encuentra devuelve -1

    console.log(s.charAt(0));

    console.log(s.lastIndexOf("E"));

    console.log(s.lastIndexOf("e", 15));

    console.log(s.replace("L", "HACER DINERO"));
    console.log(s.replaceAll("L", "HACER DINERO"));

    let datos = "Juan:Pedro:Bernal:47";
    console.table(datos.split(":"));

    console.log(datos.length);
    console.log(datos.split(":").length);

    console.log(datos.substring(5));
    console.log(datos.substring(5,15));

    datos.includes("4") ? console.log("SII") : console.log("NOOO");
    datos.includes("Hacer dinero") ? console.log("SII") : console.log("NOOO");

    let datos2 = new String("       espacios        ");
    console.log(datos2);
    console.log(datos2.trim());

    console.log(datos.repeat(2));
}

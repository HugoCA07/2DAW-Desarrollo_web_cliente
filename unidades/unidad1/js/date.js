"use strict"
{
    let fecha = new Date();
    console.log(fecha);

    let fecha2 = new Date("2001/09/11 8:31:25");
    console.log(fecha2);

    let fecha3 = new Date(1945,6,28,7,50,54);
    console.log(fecha3);

    let fecha4 = new Date(1999,4,30);
    console.log(fecha4);
    
    let fecha5 = new Date("2001/09/11 8:31:25.914");
    console.log(fecha5);

    console.log(fecha5.getDay()); // Dia de la semana 0-6
    console.log(fecha5.getDate()); // Dia del mes
    console.log(fecha5.getMonth()); // Numero de mes 0-11
    console.log(fecha5.getFullYear()); // Te da el año
    console.log(fecha5.getYear()); // Empieza a contar en 1900
    console.log(fecha5.getHours()); // Da horas
    console.log(fecha5.getMinutes()); // Da minutos
    console.log(fecha5.getSeconds()); // Da segundos
    console.log(fecha5.getMilliseconds()); // Da milisegundos
    console.log(fecha5.getTimezoneOffset());
    console.log(fecha5.getTime()); // Milisegundos desde 01/01/1970 00:00:00

    fecha5.setMonth(1);
    fecha5.setDate(21);
    fecha5.setFullYear(2027);
    fecha5.setHours(11);
    fecha5.setMinutes(11);
    fecha5.setSeconds(11);
    fecha5.setMilliseconds(11);

    console.log(fecha5);

    console.log(fecha5.toDateString().split(' '));
    console.log(fecha5.toLocaleDateString());
    console.log(fecha5.toGMTString());
    console.log(fecha5.toUTCString());
}
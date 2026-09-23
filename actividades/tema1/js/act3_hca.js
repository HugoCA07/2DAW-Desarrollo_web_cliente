"use strict"
{
    // 3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
    let horas = prompt("Dime la hora (Solo horas)");
    let minutos = prompt("Dime los minutos (Solo minutos)");
    let segundos = prompt("Dime los segundos (Solo segundos)")

    if(horas < 0){
        horas = 0;
        console.log("Horas en negativo, horas seran 0")
    }
    if(minutos < 0){
        minutos = 0;
        console.log("Minutos en negativo, minutos seran 0")
    }
    if(segundos < 0){
        segundos = 0;
        console.log("Segundos en negativo, segundos seran 0")
    }

    segundos++;

    if(segundos >= 60){
        segundos = 0;
        minutos++;
        if(minutos >= 60){
            minutos = 0;
            horas++;
            if(horas >= 24){
                horas = 0;
            }
        }
    }

    console.log("Son las " + horas + " : " + minutos + " : " + segundos);
}
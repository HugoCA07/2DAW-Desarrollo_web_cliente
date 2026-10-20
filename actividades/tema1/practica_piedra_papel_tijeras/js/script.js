"use strict";
{
    let turns = 0; // turnos totales para acabar la partida
    let player1 = []; // Usar para guardar movimientos p1
    let player2 = []; // Usar para guardar movimientos p2
    let names = [];
    let winsp1 = 0;
    let winsp2 = 0;
    let ties = 0;

    // Funcion para validar nombres de usuario
    const validarNombre = (nombre) => {
        const regExpNombre = /^[A-Z][A-Za-zÑñÁéíóúÁÉÍÓÚüÜ\s]+$/;
        return regExpNombre.test(nombre);
    };

    // Función para validar el turno
    const validarTurno = (eleccion) => {
        if (eleccion === "R" || eleccion === "P" || eleccion === "S") {
            return true;
        } else {
            return false;
        }
    };

    // Pedir nombres a usuario
    const pedirNombres = () => {
        let name1 = '';
        let name2 = '';
        do {
            name1 = prompt("Dime el nombre del jugador 1: ");
            name2 = prompt("Dime el nombre del jugador 2: ");
            if (validarNombre(name1) && validarNombre(name2)) {
                names.push(name1);
                names.push(name2);
            } else {
                alert("Alguno de los nombres no era valido");
            }
        } while (!validarNombre(name1) || !validarNombre(name2));
    };

    // Uso la funcion pedir nombres que dentro usa validación de nombres
    pedirNombres(); // Ya los guarda en el array names, si han sido invalidos usa unos predeterminados

    // Bucle principal
    do {
        // Pido turno
        let turnop1 = prompt(`${names[0]}, dime tu turno (R,P,S)`);
        let turnop2 = prompt(`${names[1]}, dime tu turno (R,P,S)`);
        // Si ambos son validos
        if (validarTurno(turnop1) && validarTurno(turnop2)) {
            let result_turn = "";
            player1.push(turnop1);
            player2.push(turnop2);
            if (player1[turns] == "R") {
                switch (player2[turns]) {
                    case "P":
                        result_turn = `Victoria de ${names[1]}`;
                        winsp2++;
                        break;
                    case "S":
                        result_turn = `Victoria de ${names[0]}`;
                        winsp1++;
                        break;
                    default:
                        result_turn = "Empate";
                        ties++;
                        break;
                }
            } else if (player1[turns] == "P") {
                switch (player2[turns]) {
                    case "S":
                        result_turn = `Victoria de ${names[1]}`;
                        winsp2++;
                        break;
                    case "R":
                        result_turn = `Victoria de ${names[0]}`;
                        winsp1++;
                        break;
                    default:
                        result_turn = "Empate";
                        ties++;
                        break;
                }
            } else if (player1[turns] == "S") {
                switch (player2[turns]) {
                    case "R":
                        result_turn = `Victoria de ${names[1]}`;
                        winsp2++;
                        break;
                    case "P":
                        result_turn = `Victoria de ${names[0]}`;
                        winsp1++;
                        break;
                    default:
                        result_turn = "Empate";
                        ties++;
                        break;
                }
            }
            alert(`Jugadas realizadas hasta ahora ${turns + 1}`);
            alert(`Jugada realizada por ${names[0]} ha sido ${player1[turns]}`);
            alert(`Jugada realizada por ${names[1]} ha sido ${player2[turns]}`);
            alert(result_turn);
            turns++;
        } else {
            alert("Alguno de los turnos no era valido, intentelo de nuevo");
        }
    } while (turns < 5 && winsp1 < 3 && winsp2 < 3);

    alert(`Se han realizado un total de ${turns} jugadas`);
    alert(`${names[0]} ha ganado un total de ${winsp1} rondas`);
    alert(`${names[1]} ha ganado un total de ${winsp2} rondas`);
    alert(`Han habido un total de ${ties} empates`);
    if (winsp1 > winsp2) {
        alert(`${names[0]} ha sido el ganador`);
    } else if (winsp2 > winsp1) {
        alert(`${names[1]} ha sido el ganador`);
    } else {
        alert("Empate entre los dos jugadores");
    }
}

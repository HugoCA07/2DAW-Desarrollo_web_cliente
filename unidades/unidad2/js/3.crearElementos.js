"use strict"
{
    // Crear un comentario
    let comentario = document.createComment("ESTO ES UN COMENTARIO");

    // Crear nodo de texto
    let text = document.createTextNode("Esto es un nodo de texto");

    // Clonar nodos
    let otronodotexto = text.cloneNode(true); // false: predeterminado, no te coge subnodos

    otronodotexto.isConnected ? console.log("está") : console.log("no está"); // Te dice si está conectado al documento o no

    let nuevodiv = document.createElement("div");
    nuevodiv.textContent = "Nuevo div";

    let nuevodiv2 = document.createElement("div");
    nuevodiv2.textContent = "Nuevo div2";
    nuevodiv.append(nuevodiv2);
    console.log(nuevodiv);
    let nuevodiv3 = nuevodiv.cloneNode(true);
    console.log(nuevodiv3);
    nuevodiv.textContent = "Otro texto";
    console.log(nuevodiv);
    console.log(nuevodiv3);

    let nuevaimagen = document.createElement("img");
}
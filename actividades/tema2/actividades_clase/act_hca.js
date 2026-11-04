"use strict";
{
    // EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one (both included).
    let num = parseInt(prompt("Dime un numero:"));

    if (!isNaN(num) && num > 0) {
        for (let i = 0; i < num; i++) {
            let p = document.createElement("p");
            p.innerText = Math.floor(Math.random() * 11).toString();
            document.body.append(p);
        }
    } else {
        alert("Por favor, introduce un número válido mayor que 0.");
    }

    // EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing your name in bold and italic + a random number between 0 and 10 in each H2.
    let input = prompt("Introduce un numero:");
    let n = parseInt(input);

    if (!isNaN(n) && n > 0) {
        const myName = "Hugo Cruz Aranda";

        for (let i = 0; i < n; i++) {
            let randomNum = Math.floor(Math.random() * 11);

            let h2Element = document.createElement("h2");
            h2Element.setAttribute("id", `id_${i}`);

            h2Element.innerHTML = `<strong><em>${myName}</em></strong>: ${randomNum}`;

            document.body.appendChild(h2Element);
        }
    } else {
        alert("Por favor, introduce un número válido mayor que 0.");
    }

    // EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an unordered list with N random numbers between 1 and 15 for each element in bold.
    num = parseInt(prompt("Dime un numero:"));
    if (!isNaN(num) && num > 0) {
        let ul = document.createElement("ul");
        ul.setAttribute("id", 'idUl1');
        for (let i = 0; i < num; i++) {
            let numrandom = Math.floor(Math.random() * 15 + 1);
            let li = document.createElement("li");
            li.innerHTML = '<strong>' + numrandom.toString() + '</strong>';
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    } else {
        alert("Introduce un numero positivo");
    }

    // EXERCISE 4: Create an image and put it after the last random number in exercise number one.

    let img = document.createElement("img");
    img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg");
    img.style.setProperty("width", "32px");

    let parrafos = document.body.querySelectorAll("p");

    let ultimoP = parrafos[parrafos.length - 1];
    ultimoP.insertAdjacentElement("afterend", img);

    // EXERCISE 5: Create a link to www.google.es before the first child of the H2 in exercise number two

    let a = document.createElement('a');
    a.setAttribute('href', 'https://google.es');
    a.textContent = 'Google';

    let primerH2 = document.querySelector('#id_0');

    if (primerH2) {
        primerH2.insertAdjacentElement('beforebegin', a);
    }

    // EXERCISE 6: Create a paragraph with your name and put it after the end of unorderer list in exercise three

    let p = document.createElement("p");
    p.innerText = "Hugo Cruz Aranda";

    let ul = document.querySelector("#idUl1");
    if (ul) {
        ul.insertAdjacentElement("afterend", p);
    }
}
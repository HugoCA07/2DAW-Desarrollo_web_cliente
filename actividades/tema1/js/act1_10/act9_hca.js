"use strict";
{
  // 9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
  // aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
  // son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.

  let num1 = parseFloat(prompt("dime el primer numero"));
  let num2 = parseFloat(prompt("dime el segundo numero"));
  let operacion = prompt("dime la operación que quieres hacer");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Numero/s invalidos");
  } else {
    switch (operacion) {
      case "+":
        console.log(num1 + num2);
        break;
      case "-":
        console.log(num1 - num2);
        break;
      case "*":
        console.log(num1 * num2);
        break;
      case "/":
        console.log(num1 / num2);
        break;
      default:
        console.log("La operación seleccionada no es valida");
    }
  }
}

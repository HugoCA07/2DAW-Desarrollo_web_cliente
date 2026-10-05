"use strict"
{
  let edadAna,edadLuis;
  // Usamos parseInt para convertir a entero
  
  while (!edadAna) {
    edadAna=parseInt(prompt("Introduce la edad de Ana",""));
  }

  edadLuis=parseInt(prompt("Introduce la edad de Luis",""));

  if (edadAna > edadLuis){
    console.log("Ana es mayor que Luis.");
    console.log(" Ana tiene "+edadAna+" años y Luis "+ edadLuis);
  }
  else{
    console.log("Ana es menor o de igual edad que Luis.");
    console.log(" Ana tiene "+edadAna+" años y Luis "+ edadLuis);
  }

  switch (edadAna) {
    case 18:
      console.log("Ana tiene 18 años");
      break;
    case 19:
      console.log("Ana tiene 19 años");
      break;
    default:
      console.log("Ana tiene otra edad");
      break;
  }

  console.log("Tienes la entrada a la discoteca " + (edadAna >= 18 ? "permitida" : "denegada"));
}
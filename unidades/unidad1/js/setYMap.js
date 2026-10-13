"use strict"
{
    // Set
    let mySet = new Set();

    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    mySet.add(4);
    mySet.add({});
    mySet.add("Mmmm días");

    console.log(mySet);

    mySet.forEach((elem) => console.log(elem));

    for(let e of mySet){
        console.log(e);
    }

    let myArray = new Array(1,2,3,3,{},{},"Hola",true);
    let mySet2 = new Set(myArray);

    mySet2.forEach((elem) => console.log(elem));

    let myArray2 = new Array();
    myArray2 = Array.from(mySet);
    myArray2.map((elem) => console.log(elem));

    console.log(mySet.size);
    mySet.has(1) ? console.log("SI") : console.log("NO");
    
    mySet.delete(1);
    mySet.has(1) ? console.log("SI") : console.log("NO");
    
    mySet.clear();
    console.log(mySet);

    // Map
    let myMap = new Map();
    myMap.set("clave","valor");
    myMap.set("name","Luis");
    myMap.set("lastname","Martinez");
    myMap.set("age",24);
    console.log(myMap);
    console.log(myMap.size);
    console.log(myMap.has("email"));
    console.log(myMap.get("name"));

    myMap.set("name","Antonio Recio");
    console.log(myMap);

    myMap.set({},10);
    myMap.set(true,50);

    console.log(myMap);

    myMap.forEach((valor,clave) => console.log(`${clave} - ${valor}`));
    
    console.log("==================================");

    for(let [valor,clave] of myMap){
        console.log(`${clave} - ${valor}`);
    }

    let myMap2 = new Map([
        ["name","Juan"],
        ["surname","de la Palmilla"],
        ["age",33]
    ]);

    console.log(myMap2);

    let myKeys = [...myMap2.keys()];
    let myVales = [...myMap2.values()];

    console.log(myKeys);
    console.log(myVales);

}
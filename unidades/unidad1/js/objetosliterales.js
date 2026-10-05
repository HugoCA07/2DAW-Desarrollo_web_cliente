"use strict"
{
    let persona = {
        nombre: "mayordomo",
        edad: 87,
        ciudad: "mi casa"
    }

    console.log(persona);
    console.log(persona.ciudad);
    console.log(persona.edad);
    console.log(persona.nombre);

    persona.edad = 99;
    console.log(persona);

    console.log(persona["nombre"]);
    persona["edad"] = 88;

    let animal = {
        tipo: "tigre",
        raza: "asiatico",
        comida: "caviar",
        bigotes: true,
        dimensiones: {
            alto: 50,
            ancho: 90,
            largo: 50
        },

        maullar (){
            console.log(`Soy un ${this.tipo} que hace GRUAAUUU`);
        }
    }

    console.log(animal);
    animal.dimensiones.largo = 33;

    console.log(animal);
    animal.dimensiones["ancho"] = 999;

    console.log(animal);
    animal.comida = "mayordomo";

    console.log(`El animal ${animal.tipo} mide ${animal.dimensiones.alto} cm de alto`);

    animal.maullar();

    console.log(Object.keys(animal));
    console.log(Object.values(animal));

    // DESTRUCTURING

    const {tipo, bigotes,dimensiones:{alto}} = animal;
    console.log(tipo);
    console.log(bigotes);
    console.log(alto);

    const {alto:a, ancho, largo} = animal.dimensiones;
    console.log(a); // Se le cambia el nombre con ';'

    // unir dos objetos literales
    const producto = {
        nomproducto: "Rolex",
        tipo: "diamante",
        tamanyo: "gigante"
    };

    const colores = {
        esfera: "dorada",
        correa: "diamante" 
    };

    const productocompleto = {producto,colores}; // Por referencia
    console.log(productocompleto);

    // Por copia y se unenlos dos en uno
    const productocompletocopy = {...producto,...colores};
    console.log(productocompletocopy);

    producto.nomproducto = "anillo";
    console.log(productocompleto);
}
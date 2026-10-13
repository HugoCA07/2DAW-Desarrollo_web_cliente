"use strict";
{
    class Punto {
        #cX; // coord X, '#' es para ponerlo private
        cY; // coord Y

        constructor(cX = 0, cY = 0) {
            this.#cX = cX;
            this.cY = cY;
        }

        set coordX(x) {
            this.#cX = x;
        }

        set coordY(y) {
            this.cY = y;
        }

        get coordX() {
            return this.#cX;
        }

        get coordY() {
            return this.cY;
        }

        static distancia(p1, p2) {
            let distX = p1.cX - p2.cX;
            let distY = p1.cY - p2.cY;

            return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        }

        multiplicaCoordenadas() {
            return this.#cX * this.cY;
        }
    }

    let p1 = new Punto();
    let p2 = new Punto(10, 10);

    console.log(p1.coordX);
    console.log(p2.coordY);

    console.log(Punto.distancia(p1, p2));

    console.log(p1.multiplicaCoordenadas());

    p1.coordX = 20;
    p1.coordY = 20;

    console.log(p1);

    class Puntito extends Punto{
        #cZ;

        constructor (z=0,x,y){
            super(x,y);
            this.#cZ = z;
        }

        set coordZ (z){
            this.#cZ = z;
        }
    }

    let puntazo = new Puntito(1,2,3);
    console.log(puntazo);
}

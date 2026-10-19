"use strict";
{
    // 31. Función que determina cuántos años han pasado hasta hoy
    function calcularAniosPasados(fecha) {
        if (typeof fecha === "string") {
            const partes = fecha.split("/");
            fecha = new Date(partes[2], partes[1] - 1, partes[0]);
        }

        if (!(fecha instanceof Date) || isNaN(fecha.getTime())) {
            return "Fecha no válida";
        }

        const hoy = new Date();

        let anios = hoy.getFullYear() - fecha.getFullYear();

        const mesDiferencia = hoy.getMonth() - fecha.getMonth();
        const diaDiferencia = hoy.getDate() - fecha.getDate();

        if (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia < 0)) {
            anios--;
        }

        return anios;
    }

    // Hecha con flecha por si acaso
    const calcularAniosPasadosFlecha = (fecha) => {
        if (typeof fecha === "string") {
            const partes = fecha.split("/");
            fecha = new Date(partes[2], partes[1] - 1, partes[0]);
        }

        if (!(fecha instanceof Date) || isNaN(fecha.getTime())) {
            return "Fecha no válida";
        }

        const hoy = new Date();

        let anios = hoy.getFullYear() - fecha.getFullYear();

        const mesDiferencia = hoy.getMonth() - fecha.getMonth();
        const diaDiferencia = hoy.getDate() - fecha.getDate();

        if (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia < 0)) {
            anios--;
        }

        return anios;
    };

    console.log(calcularAniosPasados("17/04/2023"));
    console.log(calcularAniosPasadosFlecha("17/04/2023"));
}

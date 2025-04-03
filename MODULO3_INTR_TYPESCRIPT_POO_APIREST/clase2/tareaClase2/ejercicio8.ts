/*  Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso.  */


function calcularArea(figura: string, parametro1: number, parametro2?: number): number {
    if (figura === "circulo") {
        // Área de un círculo: A = π * r^2
        return Math.PI * Math.pow(parametro1, 2); // parametro1 es el radio
    } else if (figura === "rectangulo" && parametro2 !== undefined) {
        // Área de un rectángulo: A = largo * ancho
        return parametro1 * parametro2; // parametro1 es el largo y parametro2 es el ancho
    } else {
        throw new Error("Tipo de figura no válido o parámetros incorrectos.");
    }
}

// Ejemplos de uso:
console.log(calcularArea("circulo", 5));          // Área de un círculo con radio 5
console.log(calcularArea("rectangulo", 4, 6));    // Área de un rectángulo con largo 4 y ancho 6
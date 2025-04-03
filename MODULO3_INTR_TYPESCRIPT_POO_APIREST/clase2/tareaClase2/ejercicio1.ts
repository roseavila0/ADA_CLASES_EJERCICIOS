/*Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos
parámetros, ambos de tipo number, y retorne el producto de ambos números.
Luego, muestra el resultado en consola llamando a la función.  */

// 🔹 Primera versión: llamada directa
function multiplicarNumeros(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(`El resultado de la multiplicación de 5 y 8 es: ${multiplicarNumeros(5, 8)}`);


// 🔹 Segunda versión: usando variables para reutilizar valores/ parametros en otro calculo si es necesario.
/* 
function multiplicarNumerosV2(num1: number, num2: number): number {
    return num1 * num2;
}

let num1 = 5;
let num2 = 8;
let resultado = multiplicarNumeros(num1, num2);

console.log(`El resultado de la multiplicación de ${num1} y ${num2} es: ${resultado}`);

*/
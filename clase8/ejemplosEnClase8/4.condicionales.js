//Consigna 
// Crea un programa que simule un sistema de calificación basado en la nota de un estudiante 
// (un valor numerico del 0 al 100). El programa debe determinar si el estudiante ha reprobado, 
// aprobado o ha obtenido una calificación excelente, segun las siguientes condiciones:

//Si la nota es menor a 60, el estudiante ha reprobado.
//Si la nota esta entre 60 y 89 (inclusive), el estudiante ha aprobado.
//Si la nota es 90 o mayor, el estudiante ha obtenido una calificación excelente.
//Usa un condicional if, else if, y else para mostrar el mesaje correspondiente en la consola.

let nota = 85;
if (nota < 60){
    console.log('Reprobado');
} else if (nota >= 60 && nota <= 89) {
    console.log('Aprobado');
} else{
    console.log('Calificación Excelente')
}

const prompt = require("prompt-sync")();

//Ejercicio: CALCULADORA DE DESCUENTO
// Escribe un programa que calcule el precio final de un producto despues de aplicar un descuento.
//Pide al ususario que ingrese el precio original del producto y el porcentaje de descuento,
// y muestra el precio final.

let precioOriginal = parseFloat(prompt('Ingresa el precio original del producto:'));
let porcentajeDescuento = parseFloat(prompt('Ingresa el porcentaje de descuento:'));
let descuento = (precioOriginal * porcentajeDescuento) /100;
let precioFinal = precioOriginal - descuento;

console.log('El precio final después del descuento es:', precioFinal);



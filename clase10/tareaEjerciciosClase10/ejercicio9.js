//Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula:
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse asi:
//let imc = peso / (altura * altura);

const prompt = require ('prompt-sync')();

let peso = parseFloat (prompt('Ingresa tu peso en Kg: '));
let altura = parseFloat (prompt('Ingresa tu altura en metros: '));
let imc = peso / (altura * altura);

console.log(`Tu Indice de Masa Corporal es: ${imc.toFixed(2)}`); //recuerda que el .toFixed(2) sirve para redondear decimales.

//Ejercicio 1:
//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.
// > <

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt('Ingrese el primer número: '));
let num2 = parseFloat(prompt('Ingrese el segundo número: '));

if (num1 > num2){
    console.log(num1 + ' es el número mayor');
} else if (num2 > num1) {
    console.log (num2 + ' es el número mayor');
} else {
    console.log ('Los números son iguales')
}
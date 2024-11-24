//Ejercicio 9:
//Define una constante PI con el valor de pi (3.14159). 
//Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const prompt = require ('prompt-sync')();


let radio = parseFloat (prompt('Ingrese el radio del circulo: '));
const pi = 3.14159;

let area = (pi * (radio**2));
let perimetro = (2 * pi * radio);

console.log('El area del círculo es: ' + area.toFixed(2));
console.log('El perímetro del círculo es: ' + perimetro.toFixed(2) );

//NO OLVIDAR que tambien puedo conectar con las variables como la Profe me enseño al comienzo.
//console.log(`El área del círculo es: ${area.toFixed(2)}`);
//console.log(`El perímetro del círculo es: ${perimetro.toFixed(2)}`);
// el toFixed(2) es para redondear los decimales.
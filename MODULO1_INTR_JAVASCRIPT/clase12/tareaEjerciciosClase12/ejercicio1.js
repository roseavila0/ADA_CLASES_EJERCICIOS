//Ejercicio 1: While
//Crea un programa que solicite al usuario ingresar números continuamente hasta 
//que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados. > <

const prompt = require ('prompt-sync')();

let numero = parseInt (prompt('Ingrese un número(puede usar números negativos tambien): ')); 
let suma = 0;

while (numero >= 0) {
    suma += numero; // El operador += en JavaScript es una forma abreviada de sumar un valor a una variable y reasignar el resultado a la misma variable.
    numero = parseInt (prompt ('Ingrese otro número(número negativo para salir): '));
}
    console.log(`La suma de todos los números ingresados es: ${suma}`); 
    


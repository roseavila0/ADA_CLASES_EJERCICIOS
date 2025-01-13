//Ejercicio 1: ¿Positivo, negativo o cero?

//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. 
//Escribe un programa que le pida al usuario un número cualquiera. 
//El programa deberá analizar si el número ingresado es positivo, negativo o cero. 
//Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

//< > 


const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));

if (numero < 0){
    console.log('El número ingresado es negativo y eso quiere decir que es un valor por debajo del cero.');
} else if (numero > 0){
    console.log('El número ingresado es positivo y eso quiere decir que es un valor por encima del cero.');
} else{
    console.log('El número ingresado es cero y eso quiere decir que no es ni positivo ni negativo.');
}
//Ejercicio 6: La tabla de multiplicar

//Consigna: Crea un programa que le pida al usuario un número y luego imprima su tabla 
//de multiplicar desde el 1 hasta el 10. Usa un ciclo for.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingrese un número: '));
console.log('La table de multiplicar del ' + numero + ' desde 1 al 10 es:');

for (let i=1 ; i<=10 ; i++){
        console.log(`${numero} * ${i} = ${numero * i} `);
    }


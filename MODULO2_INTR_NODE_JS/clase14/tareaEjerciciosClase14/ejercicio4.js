/*
Ejercicio 4: Ordenar una Lista de Números
Crea un script en Node.js que permita al usuario ingresar una lista de
números separados por comas. Ordena los números de menor a mayor y
muestra la lista ordenada.
*/

const readlineSync = require ('readline-sync');

// Pido al usuario que ingrese los números
const entradaNumeros = readlineSync.question("Ingrese 5 numeros separados por comas: ");

// Convertir el string ingresado en un array de números
const numerosIngresados = entradaNumeros.split(",").map(num => parseFloat(num.trim()));

// Ordenar de menor a mayor
numerosIngresados.sort ((a,b) => a-b);
console.log("Lista ordenada con números de menor a mayor:", numerosIngresados);



//OTRA FORMA DE RESOLVER
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una lista de números separados por comas: ', (input) => {
  
  // Convertir la entrada en un array de números
  let numeros = input.split(',')
  numeros = numeros.map(num => parseFloat(num.trim()));
  
  numeros.sort((a, b) => a - b);
  
  console.log('Lista ordenada de menor a mayor:', numeros);
  rl.close();
});
*/
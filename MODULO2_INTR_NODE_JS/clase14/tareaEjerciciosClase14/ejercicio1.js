/*
Ejercicio 1: Uso Básico de readline-sync
Crea un script en Node.js que utilice el módulo readline-sync para
solicitar al usuario que ingrese su nombre y edad. Luego, muestra un
mensaje de saludo personalizado que incluya el nombre y la edad del
usuario.
*/

const readlineSync = require ('readline-Sync');

const nombre = readlineSync.question("¿Cuál es tu nombre? ");
const edad = readlineSync.questionInt("¿Cuál es tu edad? ");

console.log(`Hola ${nombre} tienes ${edad} anios.`);
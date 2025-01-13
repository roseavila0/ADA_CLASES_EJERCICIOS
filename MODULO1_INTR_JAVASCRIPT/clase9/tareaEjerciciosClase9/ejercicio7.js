//Ejercicio 7:
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. 
//Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) Un kilograma equivale a 2.2 libras

const prompt = require ("prompt-sync")();

let pesoPersona = parseFloat (prompt ('Introduce tu peso en kilogramos: '));
const valorPorLibra = 2.20462; 
let conversionkilosALibras = (pesoPersona * valorPorLibra);

console.log( 'Hola tu peso en libras es ' + conversionkilosALibras);
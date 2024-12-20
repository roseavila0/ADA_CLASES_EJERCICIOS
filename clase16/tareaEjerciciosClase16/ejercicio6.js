//Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
//Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
//Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
//sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

let listaDePalabras = ['hola', 'mundo', 'javascript'];

let agregandoPrefijosSufijos = listaDePalabras.map(function(palabras) {
    return ("¡" + palabras + "!");
})

console.log ('Lista de palabras actualizada con sufijos y prefijos:', agregandoPrefijosSufijos);




//OTRA FORMA DE RESOLVER  ------------------------------------------------------------------------------------------------------
//RESOLUCIÓN DE LA PROFE 

/*
const words = ['hola', 'mundo', 'javascript'];
const exclamations = words.map(word => `¡${word}!`); // Agrega prefijos y sufijos.
console.log(exclamations); // Resultado: ['¡hola!', '¡mundo!', '¡javascript!']
*/
//Ejercicio 2: Análisis y Modificación de Cadenas de Texto

//Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
//1. Quite los espacios en blanco al principio y al final.
//2. Divida la oración en palabras.
//3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
//“/a/g” que indica que se debe buscar todas las apariciones del
//carácter 'a' en la cadena (la bandera g es para global, lo que
//significa que reemplazará todas las apariciones, no solo la primera).
//4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
//5. Convierta la oración a una cadena de palabras separadas por guiones.

const prompt = require ('prompt-sync')();

let oracion = prompt('Ingrese una oración: ');

function procesarOracion (oracion){

    oracion = oracion.trim(); 

    const letrasReemplazadas = oracion.replace (/a/g, '@');

    const palabras = oracion.split(' ');
    
    const posicionJavaScript = palabras.indexOf ('javascript');
    
    const oracionFinal = palabras.join('-');

    return{
        oracionFinal,
        posicionJavaScript,
    };
};
console.log (procesarOracion(oracion));



// OTRA FORMA DE RESOLVER  ----------------------------------------------------------------------------------------

/*const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese una oración:
let oracion = prompt("Ingresa una oración:");

// Función:
function procesarOracion(oracion) {
    // 1. Quitar los espacios en blanco al principio y al final
    let oracionSinEspacios = oracion.trim();

    // 2. Dividir la oración en palabras
    let palabras = oracionSinEspacios.split(" ");

    // 3. Encontrar la posición de la primera aparición de la palabra "javascript"
    let posicionJavascript = palabras.indexOf("javascript");

    // 4. Reemplazar todas las vocales 'a' por '@'
    let palabrasModificadas = palabras.map(palabra => palabra.replace(/a/g, '@'));
    // /a/g indica que se debe buscar todas las apariciones del carácter 'a' en la cadena 
    //(la bandera g es para global, lo que significa que reemplazará todas las apariciones, 
    //no solo la primera).

    // 5. Convertir la oración a una cadena de palabras separadas por guiones
    let oracionFinal = palabrasModificadas.join("-");

    // Devolver el resultado
    return {
        oracion: oracionFinal,
        posicionJavascript: posicionJavascript
    };
}

// Llamada a la función y mostrar el resultado
let resultado = procesarOracion(oracion);
console.log("Resultado:", resultado);
*/


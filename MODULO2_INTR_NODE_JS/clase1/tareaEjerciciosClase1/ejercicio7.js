//Ejercicio 7: Filtrar palabras largas
//Escribe una función que reciba un array de palabras y un número, y
//devuelva las palabras que tienen más caracteres que el número dado.
//Consigna:
//• Usa el método filter().
//• Usa una función flecha para simplificar el código.


let palabras = ["javascript", "html", "css", "nodejs"];
let numero = 4;

function filtrarPalabrasLargas (palabras, numero) {
   
    return palabras.filter(palabra => palabra.length  > numero);
}

console.log ("Las palabras que tienen más carácteres que el número dado son: " + filtrarPalabrasLargas(palabras, numero).join(", "));
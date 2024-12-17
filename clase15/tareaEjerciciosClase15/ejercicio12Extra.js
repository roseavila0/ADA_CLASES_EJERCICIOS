//Clasificación de palabras según su longitud
//Tienes una lista de palabras en una oración. Debes:
//1. Dividir la oración en palabras individuales.
//2. Clasificar las palabras en dos categorías:
//▪ Cortas (menos de 5 letras)
//▪ Largas (5 letras o más)
//3. Mostrar ambas listas de palabras clasificadas.
//4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

let oracion = "JavaScript es un lenguaje poderoso y versátil";
let oracionDividida = oracion.split(" ");

//console.log('oración dividida en palabras: ' + oracionDividida );

let palabrasCortas = [];
let palabrasLargas = [];

for (let i=0; i < oracionDividida.length; i++) {
    if (oracionDividida[i].length < 5) { 
        palabrasCortas.push(oracionDividida[i]);
      } else { 
        palabrasLargas.push(oracionDividida[i]);
    }
 }

 console.log ("Lista de palabras cortas: " , palabrasCortas);    //cuando le pongo el + para concatenar ahi no me da resultado de letras verdes pero si le pongo la coma (,) si.
 console.log ("Lista de palabras largas: " ,  palabrasLargas); 

 

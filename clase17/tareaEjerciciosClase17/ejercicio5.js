//Ejercicio 5: Manipulación de Arrays y Cadenas

//A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:
//1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//2. Divida cada frase en palabras.
//3. Reemplace las palabras "malo" por "bueno".
//4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
//5. Devuelva un nuevo array con las frases modificadas.


let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

function procesarFrases (frases){

    let frasesMinuscula = frases.map(function(frase){
        return frase.toLowerCase();
    });

    let frasesDivididas = frasesMinuscula.map(function(frase){ 
        return frase.split(" ");
    });

    let palabrasReemplazadas = frasesDivididas.map (function(frase){
        return frase.map(function (palabra){
            return palabra === "malo" ? "bueno" : palabra;
        });
    });

    let frasesFinales = palabrasReemplazadas.map (function(frase){
           return frase.join(" ");
    });
     
    return {
    frasesFinales: frasesFinales
};
}
let resultado = procesarFrases(frases);
console.log(resultado.frasesFinales);





//OTRA FORMA DE RESOLVER -----------------------------------------------------------------------------------------------------------------------
//EJEMPLO PROFE BERNI
/*
// Creación del array de frases
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

// Función para manipular el array de frases
function procesarFrases(frases) {
    // Procesar cada frase
    let frasesModificadas = frases.map(frase => {
        // Convertir la frase a minúsculas
        let fraseMinusculas = frase.toLowerCase();

        // Dividir la frase en palabras
        let palabras = fraseMinusculas.split(" ");

        // Reemplazar las palabras "malo" por "bueno"
        palabras = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);

        // Combinar las palabras en una nueva cadena separada por espacios
        let fraseModificada = palabras.join(" ");

        return fraseModificada;
    });

    // Devolver el nuevo array con las frases modificadas
    return frasesModificadas;
}

// Llamada a la función y mostrar el resultado
let resultado = procesarFrases(frases);
console.log("Frases modificadas:", resultado);
*/
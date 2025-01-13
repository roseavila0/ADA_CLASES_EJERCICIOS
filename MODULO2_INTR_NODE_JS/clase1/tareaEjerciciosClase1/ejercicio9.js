//Ejercicio 9: Números únicos
//Escribe una función que reciba un array de números y devuelva un nuevo
//array sin números repetidos.
//Consigna:
//• Usa el objeto Set para eliminar duplicados.
//• Convierte el Set a un array usando el operador spread (...).


let numeros = [1,2,3,2,4,1,5];

function filtrarNumeros (listaDeNumeros) {
    
    let numerosNoRepetidos = new Set(listaDeNumeros);
    return[...numerosNoRepetidos];   //El operador spread (...) es una herramienta poderosa en JavaScript que permite expandir o "esparcir" elementos de un array, objeto, o incluso los argumentos de una función en un contexto donde se esperan elementos individuales.
}

console.log (filtrarNumeros(numeros));
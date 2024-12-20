//Ejercicio 1: Crea un nuevo array con los cuadrados de los números
//Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es
//crear una nueva lista donde cada número de la lista original se haya
//transformado en su cuadrado. Por ejemplo, el número 2 debería
//convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime
//la nueva lista.

let listaDeNumeros = [2, 4, 6, 8];

let numerosTransformados = listaDeNumeros.map (function (numero){
    return numero **2;
})
console.log('La nueva lista con los números originales al cuadrado son: ', numerosTransformados);




//OTRA FORMA DE RESOLVER --------------------------------------------------------------------------------------------------------
//EJEMPLO DE LA PROFE BERNI
/*
const numbers = [2, 4, 6, 8];
const squares = numbers.map(num => num ** 2); // Calcula el cuadrado de cada número.
console.log(squares); // Resultado: [4, 16, 36, 64]
*/
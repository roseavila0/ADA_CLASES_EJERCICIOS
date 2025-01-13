//Ejercicio 3: Ordenando números
//Crea una función que reciba un array de números y devuelva un nuevo
//array con los números ordenados de menor a mayor.
//Consigna:
//• Usa el método sort().

let numeros =[5, 2, 9, 1, 7];

function ordenarNumeros(listaDeNumeros){
    return numeros.sort ((a,b) => a-b);
};

console.log(ordenarNumeros(numeros));

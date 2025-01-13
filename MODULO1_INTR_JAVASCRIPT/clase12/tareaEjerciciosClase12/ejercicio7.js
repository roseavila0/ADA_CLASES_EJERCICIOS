//Ejercicio 7: Matriz 5x5
//Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos.
//Luego, escribe un algoritmo para sumar todos los números en la matriz.

const matrizNumeros = [
    [2, 5, 6, 7, 9],
    [11, 15, 17, 19, 20],
    [25, 27, 29, 30, 31],
    [33, 35, 37, 40, 41],
    [43, 46, 47, 49, 50]
];

let suma= 0;

// Recorremos las filas de la matriz
for (let fila=0; fila <matrizNumeros.length ; fila++){
    // Recorremos cada elemento dentro de la fila
        for (let columna=0 ; columna < matrizNumeros[fila].length ; columna++){            
        suma += matrizNumeros[fila][columna];
     }
    } 
     console.log('La suma de toda la matriz es: ' + suma );

  

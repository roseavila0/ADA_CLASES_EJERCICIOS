//Ejercicio 6: Iguales a 10 pero menores de 1000
//Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

const matrizNumeros = [
    [5, 10, 100, 200,300],
    [400, 2, 500, 3, 600],
    [1, 700, 4, 800, 6],
    [7, 900, 8, 0, 1000]
];

let suma= 0;


// Recorremos las filas de la matriz
for (let fila=0; fila<matrizNumeros.length ; fila++){
// Recorremos cada elemento dentro de la fila
    for (let columna=0 ; columna < matrizNumeros[fila].length ; columna++){
        let valor = matrizNumeros[fila][columna];      
            
// Verificamos si cumple la condición  
if (matrizNumeros[fila][columna] >= 10 && matrizNumeros[fila][columna] < 1000) {
    suma += matrizNumeros[fila][columna];


    //Otra forma más simplificada para verificar 
   // let valor= matrizNumeros[fila][columna];
   // if (valor >= 10 && valor < 1000){      
     //   suma += valor;
  }
 }
}
console.log(`La suma de los números mayores o iguales a 10 y menores a 1000 es: ${suma}`);





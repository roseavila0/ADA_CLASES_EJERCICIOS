//Ejercicio 6: Buscar la última posición de un elemento repetido
//Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última
//posición en la que aparece el número 7.


let numeroRepetidos = [2, 5, 7, 2, 8, 7];
console.log('Los número de la lista son: ' + numeroRepetidos);
let ultimaPosicion7 = numeroRepetidos.lastIndexOf(7);

console.log('La ultima posición del número repetido 7 es: ' + ultimaPosicion7);

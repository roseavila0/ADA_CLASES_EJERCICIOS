//Ejercicio 8:
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
//(Investiga sobre los triángulos para determinar la formula)

//Equilátero: Todos los lados son iguales.
//Isósceles: Dos lados son iguales.
//Escaleno: Todos los lados son diferentes.

const prompt = require ("prompt-sync")();

let lado1 = parseFloat(prompt('Ingresa la longitud del lado 1: '));
let lado2 = parseFloat(prompt('Ingresa la longitud del lado 2: '));
let lado3 = parseFloat(prompt('Ingresa la longitud del lado 3: '));

if(lado1 === lado2 && lado2 === lado3) {
    console.log('Triángulo Equilatero');
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('Triángulo Isósceles');
} else {
    console.log('Triángulo Escaleno');
}
   

    




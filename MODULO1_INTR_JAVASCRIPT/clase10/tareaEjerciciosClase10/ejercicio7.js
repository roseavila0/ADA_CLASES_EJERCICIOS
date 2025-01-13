//EJERCICIOS QUE VAN SUBIENDO DE NIVEL D:
//Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores.
//Muestra los valores antes y después del intercambio en la consola. 
//Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
//eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

let valor1 = 18;
let valor2 = 10;

console.log('ANTES DEL INTERCAMBIO: valor 1= ' + valor1 + ', valor 2= ' + valor2);

let intercambio = valor1;
valor1= intercambio + valor2;
valor2= valor1 - valor2;
valor1= valor1 - intercambio;

console.log('DESPUES DEL INTERCAMBIO: valor 1= ' + valor1 + ', valor 2= ' + valor2);

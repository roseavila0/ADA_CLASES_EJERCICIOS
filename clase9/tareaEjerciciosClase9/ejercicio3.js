//Ejercicio 3:
//Declara dos variables booleanas condicion1 y condicion2. 
//Pide al usuario que ingrese dos valores booleanos (true o false) 
//y muestra el resultado de diversas combinaciones lógicas.






const prompt = require ('prompt-sync')();

let condicion1 =  (prompt('Ingrese primer valor true o false: ')).toLowerCase() === 'true'; //toLowerCase() me sirve para convertir la entrada a un valor booleano (true si el usuario ingresa "true", de lo contrario false y tbn para que si el usurio introduce la palabra en mayusculas, esta pueda interpretarlo como estuvo ingresada originalmete.
let condicion2 =  (prompt('Ingrese segundo valor true o false: ')).toLowerCase() === 'true';

console.log('AND:', condicion1 && condicion2);
console.log('OR:', condicion1 || condicion2);
console.log('NOT Condición 1:' , !condicion1); 
console.log('NOT Condición 2:' , !condicion2);
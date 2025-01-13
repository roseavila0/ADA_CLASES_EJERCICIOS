//Ejercicio 6:
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. > <
//Muestra un mensaje personalizado según el caso. 

const prompt = require ("prompt-sync")();

let edadUsuario = parseFloat (prompt('Ingrese su edad: '));
const edad = 18;

if (edadUsuario >= edad){
    console.log('Usted es mayor de edad' );
}else {
    console.log('Usted es menor de edad' );
}
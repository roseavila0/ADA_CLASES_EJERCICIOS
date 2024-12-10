//Ejercicio 2: Do While
//Escribe un programa que solicite al usuario ingresar una contraseña. 
//Si la contraseña es incorrecta, debe volver a pedirla hasta que el 
//usuario ingrese la correcta. La contraseña correcta es "1234".

const prompt = require('prompt-sync')();

let contrasenia; 

do {
    contrasenia = prompt('Ingrese una contraseña: ');
    if (contrasenia !== '1234') { 
     console.log ('La contraseña es incorrecta, inténtelo de nuevo.');
}
  
} while (contrasenia !== '1234');

console.log('Su contraseña es correcta.');

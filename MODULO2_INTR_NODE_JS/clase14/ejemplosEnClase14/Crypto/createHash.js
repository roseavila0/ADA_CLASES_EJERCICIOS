const crypto = require('crypto');
//Datos que queremos hashear
const data = 'Este es un mensaje secreto';

//creamos el objeto hash usando el algoritmo sha256
const hash = crypto.createHash('sha256');

//actualiza el hash con los demas datos
hash.update(data)


//actualizar el hash con los datos
const hashOutput = hash.digest('hex'); //hash.digest('hex') significa que el hash generado se convertirá en una cadena de texto en formato hexadecimal.
                                     //digest() es el método que finaliza el proceso de hashing y devuelve el resultado.                                       
                                       //'hex' indica que el resultado será una cadena de caracteres en formato hexadecimal (números del 0 al 9 y letras de la A a la F).

//mostrar el hash generado
console.log('Hash de sha256 ', hashOutput);




//UNA FORMA MAS ABREVIADA DE ESCRIBIR EL CODIGO CON OTRO EJEMPLO

/*
const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('HolaNeo').digest('hex');

console.log(hash); // Ejemplo de salida: "872b69f8f6ea1f3a5e2c..."
*/

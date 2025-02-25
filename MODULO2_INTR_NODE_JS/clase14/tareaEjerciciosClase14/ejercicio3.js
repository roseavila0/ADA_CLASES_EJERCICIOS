/*
Ejercicio 3: Cálculo de Hash Simple
Escribe un script en Node.js que use el módulo crypto para generar un
hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en
la consola.
*/

const crypto = require ('crypto');

const data = "mensaje secreto: Resolviendo ejercicio3";

const hash = crypto.createHash("sha256");

//actualiza el hash con los demas datos
hash.update(data)

const hashOutput = hash.digest('hex');

console.log("Hash de sha256", hashOutput);




//OTRA FORMA DE RESOLVER 
// Si el ejercicio pide que el usuario ingrese el texto, se puede usar readline:

/*
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa un texto para generar su hash: ", (data) => {
    const hash = crypto.createHash("sha256").update(data).digest('hex');
    console.log("Hash SHA-256:", hash);
    rl.close();
});
*/

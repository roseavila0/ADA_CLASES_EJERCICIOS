/*
DESAFIO Ejercicio 5: Cifrado y Descifrado Básico con crypto
Crea un script en Node.js que permita al usuario ingresar un texto, luego
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
resultado original. Usa el módulo crypto para el cifrado y descifrado.
*/

const readlineSync = require('readline-sync');
const crypto = require('crypto');

//pedimos al usuario ingresar el texto que se va a encriptar
//La variable inputMessage almacena el texto ingresado.

const inputMessage = readlineSync.question("Ingrese el mensaje a encriptar: ");

//Configuramos los parámetros del cifrado
const algoritmo = 'aes-256-cbc'; //algoritmo de cifrado AES con un tamano de 256 bits
const key = crypto.randomBytes(32) //genera una clave de 256(bits) 32 bytes
const iv = crypto.randomBytes(16) //genera un vector de inicializacion de 16 bytes

//¿Por qué usamos iv?
//En algunos algoritmos como AES-CBC, el IV evita que el mismo texto cifrado siempre produzca el mismo resultado.


//creamos el objeto cypher
const cipher = crypto.createCipheriv(algoritmo, key, iv);

//data a autenticar
const data = inputMessage;

//ciframos los datos
let encriptado = cipher.update(data, 'utf-8', 'hex') //procesa el texto plano y lo cifra
encriptado += cipher.final('hex') //finaliza el cifrado

//OJO: update() cifra la primera parte, final() la última, y += las une.


console.log('Texto cifrado: ', encriptado);

//crear objeto decipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

//deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf-8');
decifrado += decipher.final('utf-8');

console.log('Texto decifrado: ', decifrado);
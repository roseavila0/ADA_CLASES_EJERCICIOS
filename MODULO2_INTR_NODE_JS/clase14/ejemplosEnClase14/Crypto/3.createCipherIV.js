const crypto = require('crypto');


//Configuramos los parámetros del cifrado
const algoritmo = 'aes-256-cbc'; //algoritmo de cifrado AES con un tamano de 256 bits
const key = crypto.randomBytes(32) //genera una clave de 256(bits) 32 bytes
const iv = crypto.randomBytes(16) //genera un vector de inicializacion de 16 bytes


//¿Por qué usamos iv?
//En algunos algoritmos como AES-CBC, el IV evita que el mismo texto cifrado siempre produzca el mismo resultado.


//creamos el objeto cypher
const cipher = crypto.createCipheriv(algoritmo, key, iv);

//data a autenticar
const data = 'mensaje secreto';

//ciframos los datos
let encriptado = cipher.update(data, 'utf-8', 'hex') //procesa el texto plano y lo cifra
encriptado += cipher.final('hex') //finaliza el cifrado

/*
1️⃣ cipher.update(data, 'utf-8', 'hex')

Toma el texto original (data) en formato 'utf-8' y lo convierte en un string cifrado en formato 'hex'.
Devuelve la primera parte del texto cifrado.
2️⃣ cipher.final('hex')

Finaliza el cifrado y devuelve la última parte del texto cifrado.
Es necesario llamar a final() para asegurarse de que todos los datos fueron procesados.
3️⃣ +=

Como update() y final() devuelven partes separadas del texto cifrado, las concatenamos usando += para unirlas en una sola variable (encriptado).

*/

//En resumen: update() cifra la primera parte, final() la última, y += las une.



console.log('Texto cifrado: ', encriptado);

//crear objeto decipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

//deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf-8');
decifrado += decipher.final('utf-8');

console.log('Texto decifrado: ', decifrado);
//• Implementa un sistema de autenticación básico.

const net = require('net');
const readline= require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({port:4000}, () => {
    console.log("Hola cliente, te has conectado al servidor");
     // Enviar mensaje al servidor
     client.write("Hola, servidor. Soy el cliente.");
 });

 rl.question("Ingrese su contraseña: ", (contraseña) =>
)

 client.on('data', (data) => {  
    console.log("Respuesta del servidor: ", data.toString().trim());
 });

 client.on('end', () => { 
    console.log("Desconectado del servidor")
 });
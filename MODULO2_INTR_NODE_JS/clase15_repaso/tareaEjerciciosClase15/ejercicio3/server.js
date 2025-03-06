/*
Ejercicio 3: Aplicación de Chat con Módulo NET y Crypto
Consigna:
Crea una aplicación de chat en tiempo real usando el módulo net.
Asegura los mensajes cifrándolos con el módulo crypto.
Pasos:
• Usa net para crear un servidor y clientes.
• Usa crypto para cifrar y descifrar los mensajes.
• Implementa un sistema de autenticación básico.
*/

//1. importo los módulo que voy a necesitar
const net = require('net');
const crypto = require ('crypto');




 //Usa crypto para cifrar y descifrar los mensajes.
 const algoritmo = 'aes-256-cbc';
 const key = crypto.randomBytes(32);
 const iv = crypto.randomBytes(16);

//2. creo el servidor
const server = net.createServer((socket) => {
    console.log("cliente conectado al servidor");



    //3. recibo los datos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim(); //recibo la data y esos datos en buffer los tranformo a texto con toString y con trim se eliminan los espacios antes y despues de la info. 
        console.log("Datos recibidos: ", mensaje);

        const cipher = crypto.createCipheriv(algoritmo, key, iv);
        let cifrado = cipher.update(mensaje, 'utf-8', 'hex');
        cifrado += cipher.final('hex'); //RECUERDAAAAA. HEX (hexadecimal) es un sistema de numeración base 16 que se usa para representar valores de manera más compacta.
        console.log ("Texto cifrado: ", cifrado);

         //deciframos los datos
        const decipher = crypto.createDecipheriv(algoritmo, key, iv);
        let decifrado = decipher.update(cifrado, 'hex', 'utf-8');
        decifrado += decipher.final('utf-8'); //RECUERDAAAA: "UTF-8 es un formato de texto que permite representar casi todos los caracteres del mundo de manera eficiente."
        console.log("Texto decifrado: ", decifrado);

});

    socket.on('end', () => {
        console.log("Cliente desconectado");
    });

});


//Implementa un sistema de autenticación básico.

server.listen(4000, () => {  
       console.log("servidor escuchando en el puerto 4000");
});
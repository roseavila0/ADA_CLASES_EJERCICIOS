/*
Ejercicio 3: Servidor TCP con UUID v1 y JSON
Objetivo:
Crear un servidor TCP que responda con un objeto JSON que contenga
un UUID v1 basado en el tiempo y la dirección MAC.
Pasos:
1. Servidor TCP (server.js):
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v1 basado en el
tiempo.
o Enviar un objeto JSON con el UUID al cliente.
2. Cliente TCP (client.js):
o Importar el módulo net.
o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
mostrar el UUID en la consola.
*/

const net = require('net');
const {v1:uuidv1} = require('uuid');

const PORT = 5000;
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente: ${data.toString()}`);
    })
    
    const NAMESPACE = uuidv1.URL;
    const namev1 = 'UsandoV1';
    const idv1 = uuidv1(namev1,NAMESPACE );
    console.log("UUID V1 - Basado en el tiempo y la dirección MAC.", idv1);

     // Crear un objeto JSON con el UUID
    const jsonResponse = JSON.stringify({ uuid: idv1 });


    // Enviar el JSON al cliente
    socket.write(jsonResponse);

   

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log("Cliente desconectado");
    });
})

server.listen(PORT, () =>{
    console.log('Server escuchando en puerto', PORT);
})
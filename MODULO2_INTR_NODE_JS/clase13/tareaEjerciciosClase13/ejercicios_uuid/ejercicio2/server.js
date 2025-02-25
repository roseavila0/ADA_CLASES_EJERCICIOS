// Ejercicio 2: Servidor TCP con UUID v5 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v5 basado en un nombre fijo y un espacio de nombres.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v5 basado en un
// nombre y un espacio de nombres.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.
//  UUIDs (identificadores únicos)

const net = require('net');
const {v5:uuidv5} = require('uuid');

const PORT = 4000;
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente: ${data.toString()}`);
    })
    
    const NAMESPACE = uuidv5.URL;
    const namev5 = 'UsandoV5';
    const idv5 = uuidv5(namev5,NAMESPACE );
    console.log("UUID V5 Basada en nombre y espacio con nombre con SHA-1", idv5);

     // Crear un objeto JSON con el UUID
    const jsonResponse = JSON.stringify({ uuid: idv5 });


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
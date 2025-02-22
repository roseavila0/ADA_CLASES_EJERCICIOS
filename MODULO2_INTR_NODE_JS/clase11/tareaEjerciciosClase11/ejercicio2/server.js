/*
Ejercicio 2: Servidor TCP que Normaliza Rutas
Objetivo: Crear un servidor TCP que normalice las rutas recibidas utilizando path.normalize y envíe la ruta normalizada al cliente.
Pasos:
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8081).
2. Comando para Normalizar Rutas:
o El servidor debe recibir una ruta desde el cliente. o Usa path.normalize para normalizar la ruta.
3. Responder al Cliente:
o Envía la ruta normalizada al cliente.
Instrucciones:
• Ejecuta el servidor y conecta un cliente.
• Envía rutas con barras redundantes y puntos (e.g.,
./docs/../file.txt) para verificar la funcionalidad.
*/


const net = require ('net');
const path = require ('path');

const server = net.createServer();

server.on('connection', (socket) =>{
    console.log("Cliente conectado", socket.remoteAddress, socket.remotePort);

    socket.on('data', (data) => {
        const receivedPath = data.toString().trim();
        const normalizePath = path.normalize(receivedPath);
        socket.write(normalizePath); //enviamos ruta normalizada al cliente
    });


    socket.on ('end', () =>{
    console.log("\nCliente desconectado.");
    });

    socket.on('error', (err) =>{
    console.log("Error", err.message);
    });

});

server.listen(8081, () => {
    console.log("Escuchando en el puerto", server.address().port);
});

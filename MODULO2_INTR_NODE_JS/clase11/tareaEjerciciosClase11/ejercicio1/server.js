/*Ejercicio 1: Servidor TCP que Valida Rutas

Objetivo: Crear un servidor TCP que acepte comandos desde el
cliente para validar si una ruta es absoluta o relativa, y responder con
la información correspondiente.

Pasos:
1. Configuración del Servidor: o Crea un servidor TCP que escuche en un puerto específico
(por ejemplo, 8080).
2. Comando para Validar Rutas: o El servidor debe recibir una ruta desde el cliente.
o Usa path.isAbsolute para verificar si la ruta es
absoluta o relativa.
3. Responder al Cliente: o Envía una respuesta al cliente indicando si la ruta es
absoluta o relativa.

Instrucciones:
• Ejecuta el servidor y conecta un cliente
• Envía diferentes rutas para verificar la funcionalidad.
• IMPORTANTE: Cuando la consigna menciona que el servidor
debe poder recibir "comandos" desde el cliente, se refiere a
que el cliente enviará datos (en este caso, rutas) al servidor, y el
servidor deberá procesar esos datos para determinar si son
rutas absolutas o relativas. En el contexto de un servidor TCP,
un "comando" puede ser cualquier tipo de dato que el cliente
envíe al servidor para que lo procese. En este caso, el
"comando" es una ruta de archivo que el cliente envía al
servidor.
*/

//importanfo módulos
const net = require ('net');
const path = require ('path'); 

//creando server
const server = net.createServer();


//función para validar las rutas recibidas por el cliente
const validarRutas = (data) => {
    const ruta = data.toString().trim(); // Convertir a string y limpiar espacios
    if(path.isAbsolute(ruta)){
        console.log("Datos recibidos: Es una ruta absoluta");
        return "Es una ruta absoluta";
    } else{
        console.log("Es una ruta relativa");
        return "Es una ruta relativa";
    }
};

server.on('connection', (socket) => {
    console.log("cliente conectado:", socket.remoteAddress, socket.remotePort);

    socket.on('data', (data) =>{
        console.log('\n El cliente ' + socket.remoteAddress + socket.remotePort + "envió " + data);
        const respuesta = validarRutas(data); //llamamos a la función de validación
        socket.write(respuesta); //respondemos al cliente sobre el resultado de la validación de su ruta
    });

    socket.on('close', () =>{
        console.log("\ncliente desconectado, comunicación finalizada");
    });

    socket.on('error', (err) =>{ 
        console.log("Error: ", err.message);
    });

});


//escuchando servidor en puerto 8080
server.listen(8080, () =>{
    console.log("Escuchando en el puerto", server.address().port);
});


/*
OTRA FORMA DE RESOLVER
const net = require('net');
const path = require('path');

// Crear el servidor TCP
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        // Convertir datos recibidos a una cadena y eliminar espacios en blanco
        const inputPath = data.toString().trim();

        // Verificar si la ruta es absoluta
        const isAbsolute = path.isAbsolute(inputPath);

        // Crear la respuesta basada en el tipo de ruta
        const response = isAbsolute ? 'La ruta es absoluta.' : 'La ruta es relativa.';

        // Enviar la respuesta al cliente
        socket.write(response);
    });

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

// Configurar el puerto en el que el servidor escuchará
server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080.');
});

*/
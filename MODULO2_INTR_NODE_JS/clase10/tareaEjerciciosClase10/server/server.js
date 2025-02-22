/*
Parte 1: Crear el Servidor TCP
1. Descripción: Crea un servidor TCP en Node.js que escuche en el
puerto 5000. El servidor debe manejar múltiples conexiones de
clientes y mostrar los mensajes recibidos en la consola. Además, el
servidor debe responder a cada mensaje con una confirmación que
diga "Mensaje recibido".

2. Requisitos:
o El servidor debe escuchar en el puerto 5000.
o Debe manejar el evento connection para aceptar nuevas
conexiones de clientes.
o Debe manejar el evento data para recibir y mostrar mensajes
de los clientes.
o Debe manejar el evento close para saber cuándo un cliente
se desconecta.
o Debe manejar el evento error para mostrar cualquier error
que ocurra.
o El servidor debe responder a los mensajes de los clientes con
"Mensaje recibido".
*/


const net = require ('net');

const server = net.createServer();

server.on('connection', (socket)  =>{

    socket.on('data', (data)  =>{
        console.log('\n El cliente ' + socket.remoteAddress + socket.remotePort + "dice: " + data);
        socket.write("Mensaje recibido");
    });

    socket.on('close', () =>{
        console.log("cliente desconectado, comunicación finalizada");
    });

    socket.on('error', (err) =>{ 
        console.log("Error: ", err.message);
    });

});

server.listen(5000, () =>{
    console.log("Escuchando en el puerto", server.address().port);
});
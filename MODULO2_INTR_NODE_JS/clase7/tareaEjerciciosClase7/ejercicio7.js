/*
Ejercicio 7: Servidor de Chat Grupal
Consigna:
Crea un servidor TCP que permita a múltiples clientes conectarse y enviar
mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a
todos los demás clientes conectados. El servidor debe notificar cuando
un cliente se conecta o desconecta.
Requisitos:
• Usa un array para almacenar las conexiones de los clientes.
• Usa el evento data para recibir mensajes y retransmitirlos a todos
los clientes.
• Usa el evento end para eliminar a un cliente del array cuando se
desconecta.
• Notifica a los demás clientes cuando alguien se conecta o
desconecta.
*/


const net = require ("net");
const clientes = [];

const server = net.createServer((socket) => {
    clientes.push(socket);
    console.log("Nuevo cliente conectado.");

    socket.write("Bienvenido al chat.\n");

    //notificamos a cada cliente que alguien nuevo se ha conectado
    clientes.forEach(cliente =>{
        if(cliente !== socket){
            console.log("Un nuevo usuario se ha unido al chat \n");
        }
    });

    socket.on("data", (data) => {
        const mensaje = data.toString().trim();
        //retransmitir el mensaje a todos los clientes
        clientes.forEach(cliente =>{
            if (cliente !== socket){
                client.write(`mensaje ${mensaje} \n`);
            }
        });
    });

    //clients.indexOf(socket): Busca la posición del socket dentro del array clients.
    //splice(..., 1): Elimina un solo elemento de la lista en esa posición.

    socket.on("end", () => {
        clientes.splice(clientes.indexOf(socket), 1);
        console.log("Cliente desconectado.");

        //Notificar a todos los clientes sobre la desconexión
        clientes.forEach(cliente => {
            cliente.write("Un usuario ha abandonado el chat. \n");
        });
    });
});

const PORT= 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el purto ${PORT}\n`)
});



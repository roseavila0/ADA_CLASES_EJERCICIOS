/*
Ejercicio 6: Servidor de Comandos
Consigna:
Crea un servidor TCP que permita a los clientes enviar comandos
simples. Dependiendo del comando recibido, el servidor debe realizar
una acción específica:
• Si el cliente envía "fecha", el servidor debe responder con la fecha y
hora actual.
• Si el cliente envía "ip", el servidor debe responder con la dirección
IP del cliente.
• Si el cliente envía "salir", el servidor debe cerrar la conexión.
• Para cualquier otro comando, el servidor debe responder
"Comando no reconocido".

Requisitos:
• Usa el evento data para recibir y procesar los comandos.
• Usa el método socket.write() para enviar respuestas.
• Usa el método socket.end() para cerrar la conexión cuando el
cliente envíe "salir".
*/

const net = require ("net");

const server = net.createServer ((socket) => {
    console.log("Un cliente se ha conectado al servidor");
 

    socket.on("data", (data) =>{
        let comando = data.toString().trim();
        
        if (comando === "fecha"){
        socket.write(`Fecha y hora: ${new Date().toLocaleString()}\n`);
        } else if (comando === "ip") {
        socket.write(`Cliente conectado desde ${socket.remoteAddress}\n`);
        } else if (comando === "salir") { 
        socket.write('Cerrando conexión...\n');
        socket.end();
        } else {
            socket.write("Comando no reconocido.\n");
        };
    });

    socket.on("end", () => {
        console.log('El cliente se ha desconectado');
    });
});


const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
});



//EJEMPLO DE LA PROFE USANDO SWITCH
/*
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    socket.on('data', (data) => {
        const command = data.toString().trim();

        switch (command) {
            case 'fecha':
                socket.write(`Fecha y hora: ${new Date().toLocaleString()}\n`);
                break;
            case 'ip':
                socket.write(`Tu IP es: ${socket.remoteAddress}\n`);
                break;
            case 'salir':
                socket.write('Cerrando conexión...\n');
                socket.end();
                break;
            default:
                socket.write('Comando no reconocido.\n');
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
*/

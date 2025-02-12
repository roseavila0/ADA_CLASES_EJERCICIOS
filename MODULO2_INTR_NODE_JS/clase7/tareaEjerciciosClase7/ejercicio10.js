/*
Ejercicio 10: Servidor con Historial de Mensajes
Consigna:
Crea un servidor TCP que almacene un historial de los últimos 10
mensajes enviados por los clientes. Cuando un nuevo cliente se conecte,
el servidor debe enviarle el historial de mensajes. Los mensajes deben
almacenarse en memoria y actualizarse cada vez que un cliente envía un
nuevo mensaje.
Requisitos:
• Usa un array para almacenar el historial de mensajes.
• Usa el evento data para recibir mensajes y actualizar el historial.
• Usa el método socket.write() para enviar el historial al cliente
cuando se conecta.
• Limita el historial a los últimos 10 mensajes.
*/


const net  = require ("net");
let historial = [];

const server = net.createServer((socket) =>{
    console.log("Un cliente se ha conectado al servidor");

    // Enviar historial de mensajes al cliente cuando se conecta
    if (historial.length > 0) {
        socket.write("Historial de mensajes:\n" + historial.join("\n") + "\n");
    } else {
        socket.write("No hay mensajes previos.\n");
    }


    // Evento cuando el cliente envía datos
    socket.on("data", (data) => {
        let mensaje = data.toString().trim(); // Convertir a string y eliminar espacios innecesarios
        
        // Si el historial tiene 10 mensajes, eliminar el más antiguo
        if (historial.length === 10) {
            historial.shift(); // Elimina el primer mensaje
        }

        historial.push(mensaje); // Agrega el nuevo mensaje al historial

        socket.write("El mensaje se ha archivado.\n");

        console.log("Mensaje recibido:", mensaje);
    });

    // Evento cuando el cliente se desconecta
    socket.on("end", () => {
        console.log("Cliente desconectado.");
    });

    // Manejar errores en la conexión
    socket.on("error", (err) => {
        console.error("Error en la conexión:", err.message);
    });
});

    // Definir el puerto en el que escucha el servidor
    const PORT = 3000;
    server.listen(PORT, () => {
    console.log(`Servidor de historial de mensajes escuchando en el puerto ${PORT}`);
});






/*
DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado

 Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras
20 segundos.
 El cliente debe:
 Conectarse y enviar un mensaje inicial.
 Enviar un mensaje "Mensaje automático" cada 5 segundos.
 Escuchar el evento 'data' y mostrar los datos recibidos.
 Cerrar la conexión con client.end() tras 20 segundos.
 */

 const net = require ('net');

 const PORT = 5000;
 const HOST = 'localhost';

 const client = net.createConnection({port: PORT, host: HOST}, () =>{   
    console.log("Conectando al servidor...");
    client.write("Hola servidor, soy el cliente");
 });


// Enviar un mensaje automático cada 5 segundos
 const intervalId = setInterval(() => {
    console.log("MENSAJE AUTOMÁTICO"); 
    client.write("mensaje automático");
 }, 5000);

// Escuchar respuestas del servidor
client.on ('data', (data)  => { 
    console.log("Mensaje recibido", data.toString());
});

// Cerrar la conexión tras 20 segundos
setTimeout (() => {
    console.log("cliente cerrando conexión...");
    clearInterval(intervalId); // Detener los mensajes automáticos antes de cerrar
    client.end();
}, 20000);


// Manejar errores
client.on('error', (err) => {
    console.error("Error", err.message);
})

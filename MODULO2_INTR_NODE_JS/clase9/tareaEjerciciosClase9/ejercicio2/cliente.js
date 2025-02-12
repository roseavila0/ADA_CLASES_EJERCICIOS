/*
DESAFÍO 2: Cliente con Pausa y Reanudación de Datos
Objetivo: Simular un cliente que pausa la recepción de datos por 5
segundos y luego la reanuda.
El cliente debe:
Conectarse al servidor y enviar un mensaje inicial.
Escuchar el evento 'data' y mostrar los datos en consola.
Pausar la recepción de datos usando client.pause() a los 3 segundos.
Reanudar la recepción de datos con client.resume() a los 8 segundos.
Finalizar la conexión tras 15 segundos.
*/

 const net = require ('net');

 const PORT = 5000;
 const HOST = 'localhost';

 const client = net.createConnection({port: PORT, host: HOST}, () =>{
    client.write("Hola servidor");
});

client.on('connect', () =>{
    console.log('Conectado al servidor...')
});

client.on('data', (data) =>{
    console.log("Mensaje recibido", data.toString());
});


// Pausar la recepción de datos después de 3 segundos
setTimeout(() => {
    console.log("Pausando la recepción de datos");
    client.pause()

    // Reanudar la recepción de datos después de 5 segundos
    setTimeout(()  =>{
        console.log("Reanudando la recepción de datos")
        client.resume() 
    }, 8000);
}, 3000);


// Cerrar la conexión después de 15 segundos
setTimeout(() => {
    client.end();
    console.log("Cerrando la conexión")
}, 15000);

client.on('error', (err) =>{
    console.error("Error: ", err.message);
 });
const readline = require('readline-sync');
const net = require('net');

// Conexión al servidor
const client = net.createConnection({ port: 8080 }, () => {
    console.log("Te has conectado al servidor");

    // Solicitar comando
    const command = readline.question("Ingrese un comando (GET VEHICLES o ADD VEHICLE): ");
    client.write(command);
});

// Respuesta del servidor
client.on('data', (data) => {
    console.log("Respuesta del servidor:\n", data.toString());
    client.end();  // Cierra la conexión al servidor
});

// Fin de la conexión
client.on('end', () => {
    console.log("Conexión cerrada");
});


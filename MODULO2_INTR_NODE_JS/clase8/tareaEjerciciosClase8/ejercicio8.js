/*
Ejercicio 8: Cliente con unref/ref para control de procesos
 Consigna
Crea un cliente que:
1. Use client.unref() para permitir que Node.js termine si no hay otras
tareas.
2. Luego, después de 5 segundos, use client.ref() para evitar que el
proceso termine.
 Pistas
• unref() hace que el socket no impida que Node.js termine.
• ref() lo vuelve a mantener activo.
*/

const net = require ('net');

const client = net.createConnection ({port: 3000, host: 'localhost'}, () => {
    console.log("conectado al servidor");
});

client.unref()

client.setTimeout(() => {
    console.log('reactivando proceso.');
    client.ref()
}, 5000);


client.on('end', () => {
    console.log("desconectado del servidor");
});
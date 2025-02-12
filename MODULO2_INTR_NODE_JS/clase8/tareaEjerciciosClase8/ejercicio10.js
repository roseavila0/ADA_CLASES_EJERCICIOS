
/*
Ejercicio 10: Cliente que detecta pérdida de conexión
 Consigna
Crea un cliente que:
1. Si deja de recibir datos durante 10 segundos, muestre " No hay
datos del servidor" y cierre la conexión.
 Pistas
• Usa setTimeout() que se reinicie con cada mensaje recibido.
• Si pasan 10 segundos sin mensajes, cierra con client.end().
*/

const net = require ('net');

const client =  net.createConnection({port:3000, host:'localhost'},() =>{
    console.log("conectado al servidor");
});

let timeout = setTimeout(() => {
    console.log('⚠️ No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});


//otra forma de resolver
/*

const net = require('net');

const client = net.createConnection({ port: 3000, host: 'localhost' }, () => {
    console.log("✅ Conectado al servidor");
    reiniciarTemporizador(); // Iniciar el temporizador al conectarse
});

function reiniciarTemporizador() {
    clearTimeout(client.timeout); // Limpia el temporizador anterior
    client.timeout = setTimeout(() => {
        console.log("⚠️ No hay datos del servidor, cerrando conexión...");
        client.end();
    }, 10000);
}

// Cuando llega un mensaje, se reinicia el temporizador
client.on('data', (data) => {
    console.log("📩 Mensaje recibido:", data.toString());
    reiniciarTemporizador();
});

// Si la conexión se cierra, limpiar el temporizador
client.on('end', () => {
    console.log("🔌 Conexión cerrada por el servidor");
    clearTimeout(client.timeout);
});

*/


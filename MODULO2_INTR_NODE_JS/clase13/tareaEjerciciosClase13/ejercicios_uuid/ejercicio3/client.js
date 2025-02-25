const net = require('net');

const PORT = 5000;

const client =  net.createConnection ({port:PORT}, () => {
    console.log(`Conectado al servidor`);
    client.write('Hola, soy el cliente');
})

client.on('data', (data) => {
    try {
        const jsonData = JSON.parse(data.toString()); // Convertimos el JSON a objeto
        console.log('UUID recibido:', jsonData.uuid); // Mostramos solo el UUID
    } catch (error) {
        console.error('Error al parsear JSON:', error);
    }
    client.destroy(); // Cerramos la conexión
});

client.on('close', () => {
    console.log('Conexión cerrada');
});

client.on('error', (err) => {
    console.error('Error en el cliente:', err);
});
const net = require('net');

const PORT = 4000;


const client = new net.Socket();
//La línea new net.Socket() crea una nueva instancia de un socket TCP manualmente. Es otra forma de crear un cliente TCP, 
// en lugar de usar net.createConnection() directamente.

client.connect(PORT, 'localHost', () => {
    console.log(`Conectado al servidor`);
    client.write('Hola, soy el cliente'); // Envía un mensaje al servidor
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
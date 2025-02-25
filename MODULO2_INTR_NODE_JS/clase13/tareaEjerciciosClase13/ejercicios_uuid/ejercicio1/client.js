const net = require ('net');
const PORT = 8080;

const client = net.createConnection ({port: PORT}, () =>{
    console.log("Hola cliente, estas conectado al servidor");
    client.write("Cliente conectado");
    })

client.on('data', (data) =>{
    console.log("Respuesta del servidor: \n" + data.toString());
    client.destroy(); 
})   // Cierra la conexión después de recibir la respuesta . 
     // En este caso es mejor usar client.destroy() porque estás manejando UUIDs (identificadores únicos) y quieres asegurarte de que la conexión se cierre lo más rápido posible después de recibir los datos, sin dejar ninguna posibilidad de que queden abiertos canales de comunicación innecesarios.


client.on('close', () => {
    console.log('Conexión cerrada');
});

    
client.on('error', (err) => {
    console.error('Error en el cliente:', err);
});

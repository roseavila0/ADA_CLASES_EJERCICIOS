const net = require ('net');

const client =  net.createConnection({port: 8080}, () => {
    console.log("conectado al servidor");
    
    
    // Enviar varias rutas como comandos
    client.write('/home/user/documento.txt'); // Comando 1: Ruta absoluta
    client.write('documento.txt'); // Comando 2: Ruta relativa
    client.write('/another/path/to/file'); // Comando 3: Otra ruta absoluta
});

//leemos la respuesta del servidor
client.on('data', (data) =>{
    console.log(data.toString());
    client.end(); // terminar la conexión después de recibir la respuesta
});

client.on('end', () =>{
    console.log("Desconectado del servidor") //el cliente cierra la conexión
});


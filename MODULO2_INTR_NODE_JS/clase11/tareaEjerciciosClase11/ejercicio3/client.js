const net = require ('net');

const client = net.createConnection({port: 8082}, () => {
    console.log("cliente conectado al servdor");

    client.write('/home/user/docs/file.txt'); // Ruta completa de ejemplo
});

//leemos la respuesta que nos envia el servidor
client.on('data', data =>{
    console.log("Información de la ruta:\n", data.toString().trim());
    client.end();
});

client.on('end', () =>{
    console.log("Desconectado del servidor");
});
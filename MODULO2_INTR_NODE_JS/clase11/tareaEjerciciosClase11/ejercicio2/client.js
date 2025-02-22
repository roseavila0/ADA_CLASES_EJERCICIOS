
const net = require ('net');

const client = net.createConnection({port: 8082}, () =>{
    console.log("Conectado al servidor");


    //Enviar rutas redundentes
    client.write('/home/..usero\../documento.txt\n'); 
    client.write('documento\.txt\n'); 
    client.write('/another.y/path/to/file\n'); 
});

client.on('data',(data) =>{
    console.log("Rutas normalizadas", data.toString());
    client.end(); //terminamos la conexión después de recibir la respuesta
});

client.on('end', () =>{
    console.log("Desconectado del servidor") 
});
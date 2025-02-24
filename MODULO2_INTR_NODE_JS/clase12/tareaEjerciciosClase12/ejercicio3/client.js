const net = require ('net');

const client =  net.createConnection ({port: 4002}, () =>{
    console.log("conectado al servidor");

    const movieTitle = "Freaks"
    client.write(movieTitle)
})

client.on('data', (data) =>{
    console.log("Respuesta del servidor", data.toString());
    client.end();
})

client.on ('end', () =>{
    console.log("conexión cerrada");
})
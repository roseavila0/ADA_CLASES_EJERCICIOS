const net = require ('net')

const client =  net.createConnection({port:4001}, () =>{
    console.log("conectado al servidor");

    const hotelId = "1"
    client.write(hotelId)
})

client.on('data', (data) =>{
    console.log("Respuesta del servior", data.toString());
    client.end();
})

client.on('end', () =>{
    console.log("conexión cerrada");
})
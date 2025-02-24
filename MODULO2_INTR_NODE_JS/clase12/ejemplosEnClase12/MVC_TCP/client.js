//importamos el modulo net 
const net = require ('net')

//creamos una conexión tcp al servidor que esta escuchando en el puerto 4000
const client = net.createConnection ({port: 4000}, ()  =>{
    console.log('conectado al servidor');

    //enviamos un id de vehiculo al servidor
    const vehicleId = "5"
    client.write(vehicleId)// enviando el id al servidor
})

//event data
client.on('data', (data) =>{
    console.log("Respuesta del servidor:", data.toString());
    client.end()
})

//evento end
client.on('end', () =>{
    console.log("conexión cerrada");
})
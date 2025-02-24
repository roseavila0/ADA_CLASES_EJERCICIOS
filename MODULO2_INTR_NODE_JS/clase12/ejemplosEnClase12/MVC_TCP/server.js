//importamos eel modulo net 
const net = require ('net')


//importamos el controlador
const vehicleController = require ('./controllers/vehicleController')


//creamos el servir 
const server = net.createServer((socket) =>{
    console.log('Cliente conectado');

    //evento data
    socket.on ('data', (data) =>{
        //convertimos los datos recibidos a una cadenad e texto y eliminamos espacios
        const vehicleId= data.toString().trim()
        console.log(`Solicitud recibida: ID ${vehicleId}`);

        //Llamamos al metodo handlerRequest del controlador para manejar la solicitud
        //este metodo toma el id del vehiculo y devuelve una respuesta formateada
        const response =  vehicleController.handleRequest(vehicleId)

        //enviamos la respuesta al cliente usando metodo write
        socket.write(response)
    })

    //evento end
    socket.on('end', () =>{
        console.log("cliente desconectado");
    })
})


server.listen(4000, () =>{
    console.log("Servidor escuchando en el puerto 4000");
})
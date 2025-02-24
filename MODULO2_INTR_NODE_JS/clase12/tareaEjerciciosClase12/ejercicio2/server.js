const net = require ('net');

const hotelController = require('./controllers/hotelController');



const server =  net.createServer((socket) => {
    console.log ("cliente conectado");

    socket.on ('data', (data) => { 
        const hotelId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${hotelId}`);

        const response = hotelController.handleRequest(hotelId)

        socket.write(response)
    })

    socket.on('end', () =>{
        console.log("cliente desconectado");
    })

})

server.listen(4001, () => {
    console.log("Servidor escuchando en el puerto 4001")
});
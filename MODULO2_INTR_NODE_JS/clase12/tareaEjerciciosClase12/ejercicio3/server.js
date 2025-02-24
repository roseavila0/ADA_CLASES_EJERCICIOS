
const net =  require ('net');

const movieController = require ('./controllers/movieController');



const server = net.createServer((socket) =>{
    console.log("El cliente se ha conectado");

    socket.on('data', (data) =>{
        const movieTitle = data.toString().trim();
        console.log(`Solicitud recibida: pelicula ${movieTitle}`);

        const response = movieController.handleRequest(movieTitle)

        socket.write(response)
    })

    socket.on('end', () => {
        console.log("Cliente desconectado")
    })
})

server.listen (4002, () =>{
    console.log("Servidor escuchando en el puerto 4002")
});
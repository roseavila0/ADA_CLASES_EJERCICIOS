const net = require ('net')

const bookController =  require ('./controllers/bookController')


const server = net.createServer((socket) => {
    console.log("cliente conectado");

    socket.on('data', (data) =>{
        const bookId = data.toString().trim() 
        console.log(`Solicitud recibida: ID ${bookId}`);
    

    const response = bookController.handleRequest(bookId)

    socket.write(response)
    })

    socket.on('end', () =>{
        console.log("cliente desconectado");
    })
})

server.listen(4000, () =>{ 
    console.log("Servidor escuchando en el puerto 4000");
})

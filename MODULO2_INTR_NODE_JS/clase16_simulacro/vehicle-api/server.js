const net = require('net');
const fs = require('fs');
const {showVehicles, addVehicle} = require('./controllers/constroller');  // Asegúrate de que la ruta sea correcta

const port = 8080;

const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    socket.on('data', (data) => {
        const command = data.toString().trim();
        console.log("Información recibida: ", command);

     
        if (command.toLowerCase() === 'get vehicles'){
            const response = showVehicles()
            socket.write(response);
        }else if(command.toLowerCase() === 'add vehicle'){
             const vehicleData = command.replace('add vehicle', '').trim(); 
             const vehicle = JSON.parse(vehicleData); 
             addVehicle(vehicle);

             socket.write('Vehiculo agregado correctamente'); 
         }else{
            socket.write('El comando ingresado no pudo ser reconocido'); 
            }

    })

    socket.on('end', () => {
        console.log("\nCliente desconectado.");
    });

    socket.on('error', (err) => {
        console.log("Error: ", err.message);
    });
 
});

server.listen(port, () => {
    console.log("El servidor está escuchando en el puerto ", port);
});
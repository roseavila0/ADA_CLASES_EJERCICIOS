/*
Ejercicio 9: Servidor de Transferencia de Archivos
Consigna:
Crea un servidor TCP que permita a los clientes enviar un archivo de
texto al servidor. El servidor debe guardar el archivo en el sistema y
notificar al cliente cuando la transferencia se haya completado. Además,
el servidor debe verificar que el archivo no exceda un tamaño máximo
de 1 MB.
Requisitos:
• Usa el evento data para recibir el archivo en trozos (chunks).
• Usa el método socket.write() para notificar al cliente sobre el
progreso de la transferencia.
• Usa el método fs.writeFile() para guardar el archivo en el servidor.
• Si el archivo excede 1 MB, cierra la conexión y notifica al cliente.
*/


const net = require("net"); 
const fs = require("fs"); //importamos el modulo fs para  manipular archivos.

const server = net.createServer((Socket) => {
 console.log("Un cliente se ha conectado al servidor");

    //Buffer.alloc(0); en Node.js crea un buffer vacío con un tamaño inicial de 0 bytes.
    //Se usa cuando no sabemos aún cuántos datos recibiremos.
    let fileData = Buffer.alloc(0); //Almacena el contenido del archivo en un buffer.
    let fileSize = 0; //variable Lleva el conteo del tamaño del archivo en bytes.

    // Evento que se ejecuta cada vez que el cliente envía datos
    socket.on('data', (data) => {
        //A medida que llegan datos, el buffer se expande dinámicamente con Buffer.concat().
        fileData = Buffer.concat([fileData, data]); // Añadimos los nuevos datos al buffer
        fileSize += data.length;  // Sumamos el tamaño de los datos recibidos // data es un fragmento del archivo.

          // Verificamos si el archivo supera el tamaño máximo permitido (1 MB)
        if (fileSize > 1048576) { // 1 MB
            socket.write('El archivo excede el tamaño máximo permitido (1 MB).\n');
            socket.end(); // Cerramos la conexión con el cliente
            return; // Salimos de la función
        }

        // Enviamos al cliente una notificación del progreso
        socket.write(`Recibidos ${fileSize} bytes...\n`);
    });

    // Evento que se ejecuta cuando el cliente finaliza la transferencia
    socket.on('end', () => {
        if (fileSize <= 1048576) {
            fs.writeFile('archivo_recibido.txt', fileData, (err) => {
                if (err) {
                    console.error('Error al guardar el archivo:', err);
                } else {
                    console.log('Archivo guardado correctamente.');
                    socket.write('Archivo recibido y guardado.\n');
                }
            });
        }
    });

    // Manejo de errores en la conexión
    socket.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
    });
});



// Hacemos que el servidor escuche en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor de transferencia de archivos escuchando en el puerto 3000');
});


/* Ejercicio 2: Servidor con Timeout
Consigna:
Crea un servidor TCP que cierre automáticamente la conexión con un
cliente si no recibe datos en un período de 10 segundos. Si el cliente
envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar
el contador de tiempo.
Requisitos:
• Usa el método socket.setTimeout() para establecer un tiempo de
espera.
• Usa el evento timeout para cerrar la conexión si se alcanza el
tiempo límite.
• Usa el evento data para reiniciar el contador de tiempo cada vez
que se reciben datos.
*/

const net = require ("net");

const server = net.createServer((socket) => {
    console.log("Un cliente se ha conectado al servidor")

     // Establecemos un tiempo de espera
     socket.setTimeout(10000) // 10000 = 10 segundos

     socket.on('timeout', () => {
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos. Cerrando conexión.');
        // podemos cerrar la conexion si se alcanza el timeout
        socket.setTimeout(10000); // Reinicia el timeout.
    });

    socket.on("data", (data) => { 
        console.log(`Datos recibidos del cliente ${data.toString()}`);
    });
});

const PORT = 3000
server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
     });
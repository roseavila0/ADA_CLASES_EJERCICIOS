/*
DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
 Objetivo: Implementar un timeout que cierre la conexión si no recibe
datos en 10 segundos.
 El cliente debe:
 Conectarse y enviar un mensaje inicial.
 Configurar un setTimeout() de 10 segundos para cerrar la conexión si
no recibe datos.
 Escuchar el evento 'data' y cancelar el timeout si recibe información.
 Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un
mensaje en consola.
*/

const net = require ('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () =>{ 
    client.write("Hola servidor");
});

client.on('connect', () =>{ 
    console.log("conectado al servidor");
});

const timeout= setTimeout(() =>{ 
    console.log("No se ha recibido respuesta en los 10 segundos.Destruyendo la conexión...");
    client.destroy();
},10000);


client.on('data', (data) => { 
    console.log("Mensaje recibido", data.toString());
    clearTimeout(timeout); // Evita que el timeout cierre la conexión
}); 

client.on('error', (err) => {
    console.error("Error de conexión:", err.message);
});
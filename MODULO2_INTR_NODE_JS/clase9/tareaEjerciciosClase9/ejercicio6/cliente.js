/*
A partir de aquí son ejercicios un poco más complejos:
 DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo
de Fallos
 Objetivo: Crear un cliente TCP que intente reconectarse si la
conexión se pierde, pero que abandone después de 5 intentos fallidos.
 El cliente debe:
 Intentar conectarse al servidor.
 Si se desconecta, volver a intentar cada 2 segundos.
 Llevar un contador de intentos fallidos.
 Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de
error.
 Manejar adecuadamente los eventos 'error', 'close' y 'data'.
 PISTA: Usen un contador global de intentos y un setTimeout() para
gestionar los reintentos.

*/

const net =  require ('net');

const PORT= 5000;
const HOST= 'localhost';
let intentosFallidos= 0;
const maxIntentos = 5;

function conectarCliente() {
    if (intentosFallidos >= maxIntentos){
        console.log("Se alcanzó el máximo de intentos. Saliendo del programa.");
        return;
    }


    const client =  net.createConnection({port: PORT, host:HOST}, () => {  
        console.log("cliente conectado al servidor");
        client.write('Hola, servidor');
        intentosFallidos = 0; //RESETEAR INFO SI LA CONEXIÓN ES EXITOSA
    });


    client.on('data', (data) => { 
        console.log("mensajes recibidos", data.toString());
    });
    
    client.on('error', (err) => {  
        console.error("Error:", err.message);
    });
    
    client.on('close',() => { 
        console.log(`conexión cerrada. Intentando reconectar..." (${intentosFallidos + 1} / ${maxIntentos})`);
        intentosFallidos++;
    setTimeout(conectarCliente, (2000));
    });
}

conectarCliente();



/* OTRA FORMA DE RESOLVER
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';
let intentosFallidos = 0;
const maxIntentos = 5;

function conectarCliente() {
    if (intentosFallidos >= maxIntentos) {
        console.log("Se alcanzó el máximo de intentos. Saliendo del programa.");
        return;
    }

    const client = net.createConnection({ port: PORT, host: HOST }, () => {  
        console.log("Cliente conectado al servidor");
        client.write('Hola, servidor');
        intentosFallidos = 0; // Reseteamos intentos fallidos si la conexión es exitosa
    });

    client.on('data', (data) => { 
        console.log("Mensaje recibido:", data.toString());
    });

    client.on('error', (err) => {  
        console.error("Error:", err.message);
        client.destroy(); // Asegura que el socket se cierra antes de reintentar
        reintentarConexion();
    });

    client.on('close', () => { 
        console.log(`Conexión cerrada. Intentando reconectar... (${intentosFallidos + 1} / ${maxIntentos})`);
        reintentarConexion();
    });
}

function reintentarConexion() {
    if (intentosFallidos < maxIntentos) {
        intentosFallidos++;
        setTimeout(conectarCliente, 2000);
    } else {
        console.log("Máximo de intentos alcanzado. No se pudo conectar al servidor.");
    }
}

conectarCliente();
*/

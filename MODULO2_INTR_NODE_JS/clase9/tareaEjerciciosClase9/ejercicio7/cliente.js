/*
DESAFÍO 7: Cliente con Envío de Comandos, Validación y AutoDesconexión
 Objetivo: Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, los valide antes de enviarlos y cierre la
conexión si se recibe una respuesta específica del servidor.

 El cliente debe:
 Conectarse al servidor en el puerto 5000.
 Leer la entrada del usuario desde la terminal con readline.
 Solo permitir comandos que empiecen con CMD_ (ejemplo:
CMD_HOLA, CMD_ADIOS).
 Enviar los comandos al servidor solo si son válidos.
 Escuchar respuestas del servidor.
 Si el servidor responde "EXIT", cerrar la conexión y terminar el
programa.
 PISTA: Usen readline para capturar la entrada del usuario y RegExp
para validar los comandos.

OJO!!! LEER LA EXPLICACIÓN DEL USO DE EXPRESIONES REGLARES QUE ESTAN EN EL PDF DE TAREAS
*/

const net = require('net');
const readline =  require ('readline');

const PORT= 5000;
const HOST= 'localhost';


const client = net.createConnection({port: PORT, host:HOST}, () =>{ 
 console.log("cliente conectado al servidor, Escribe un comando:"); //esto es lo que mostramos en la terminal
 client.write("Hola servidor, soy el cliente"); //esto es lo que enviamos al servidor para comunicaros como va el proceso
});

// Configurar la lectura de la terminal, creo la interza con readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


client.on('data', (data) =>{
    const mensaje = data.toString().trim();
    console.log(`Servidor dice: ${mensaje}`);

     // Si el servidor envía "EXIT", cerrar conexión y terminar
    if (mensaje === "EXIT"){
        console.log("El servidor ha solicitado la desconexión. Cerrando cliente...");
        client.end();
        rl.close();
    }
});

client.on('error', (err) =>{ 
    console.error("Error: ", err.message);
});

client.on('close', () =>{  
   console.log("conexión cerrada.");
   rl.close();
});


//leer comandos desde la terminal
rl.on('line', (input) =>{  
    const comando = input.trim().toUpperCase();

    //validar que el comando comience con "CMD_"
    if ( /^CMD_\w+$/.test(comando)){
        client.write(comando);
    }else{
        console.log("Comando no válido. Usa el formato: CMD_ALGO");
    }
});










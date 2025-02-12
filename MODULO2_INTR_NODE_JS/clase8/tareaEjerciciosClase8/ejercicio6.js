/*
Ejercicio 6: Cliente interactivo con la usuaria
 Consigna
Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
enviarlos al servidor.
• Después de cada mensaje, la usuaria puede escribir otro.
• Si escribe "salir", el cliente se desconecta.
 Pistas
• Usa readline para capturar texto de la usuaria.
• Si el mensaje es "salir", cierra la conexión con client.end().
*/

const net = require ('net');
const readline =  require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client =  net.createConnection ({port: 3000, host:'localhost'}, () => {
    console.log('Conectado al servidor');
});

    // Solicitar al usuario que ingrese el primer mensaje
rl.setPrompt("Escriba un mensaje (o escriba 'salir' para terminar): ");
rl.prompt();

// Manejamos la entrada de usuario , lo que escribe el usuario como mensaje
rl.on('line', (input) => {  
    if (input.toLocaleLowerCase() === 'salir'){
        console.log("desconectando el servidor...");
        client.end();
        rl.close();
    } else {
        client.write(`Mensaje de la usuaria: ${input}`);
        rl.prompt();
     };
});

//desconectamos el servidor
//client.on (end...)... ayuda a que la interfaz readline se cierre correctamente cuando el servidor desconecta al cliente.

client.on('end', () => {
    console.log('Desconectado del servidor.');
    rl.close();
});

//es una buena practica manejarerrores
client.on('error', (err) =>{
    console.error('Error en la conexión:', err.message);
    rl.close();
});
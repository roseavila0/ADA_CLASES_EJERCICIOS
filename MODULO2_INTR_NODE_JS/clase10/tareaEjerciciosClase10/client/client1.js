/*
Parte 2: Crear el Cliente TCP
1. Descripción: Crea un cliente TCP en Node.js que se conecte al
servidor en el puerto 5000. El cliente debe permitir al usuario
ingresar mensajes en la consola y enviar esos mensajes al servidor.
El cliente debe mostrar la respuesta del servidor en la consola.

2. Requisitos:
o El cliente debe conectarse al servidor en el puerto 5000 y en la dirección localhost.
o Debe permitir al usuario ingresar mensajes y enviarlos al servidor.
o Debe mostrar en la consola la respuesta del servidor.
o El cliente debe manejar la desconexión y mostrar un mensaje cuando se desconecta

Instrucciones
1. Configuración:
o Crea dos archivos, server.js y client.js, y coloca el código proporcionado en cada uno.
o Asegúrate de que el módulo readline-sync esté instalado en el proyecto (para el cliente) usando npm install readline-sync.
2. Ejecución:
o Ejecuta primero el servidor usando node server.js.
o Luego, ejecuta el cliente usando node client.js.
o Prueba enviando mensajes desde el cliente y verifica que el servidor los reciba y responda adecuadamente.
*/

const net = require ('net');
const readline = require ('readline-sync');

const options = {
    port: 5000,
    host: 'localhost'
};


const client = net.createConnection (options);
// TBN PUEDE SER ASI const client = net.createConnection({ port: 4000, host: 'localhost' });

client.on('connect', () =>{ 
    console.log("conexión satisfactoria");
    sendLine() // llamo a la funcion sendLine para que el usuario ingrese los datos
});


client.on('data', (data) => {
    console.log('El servidor dice: ' + data);
    sendLine()
})

client.on('error', (err) => {
    console.log("Error: ", err.message);
})

client.on('close', () =>{ 
    console.log("El servidor cerró la conexión");
});

// PASO 4: Definimos la funcion sendLine() que permite al usuario
// ingresar un mensaje y decide que hacer con el
function sendLine() {
    //muestra un prompt y lee la entrada del usuario de manera sincrona
    let line = readline.question("Ingrese un mensaje: ")
    if (line === "0") { // verifica si el usuario 0
        client.end() // cierra la conexion con el servidor si se ingreso 0
    } else {
        client.write(line) // envia el mensaje ingresado por el usuario.
    }
}

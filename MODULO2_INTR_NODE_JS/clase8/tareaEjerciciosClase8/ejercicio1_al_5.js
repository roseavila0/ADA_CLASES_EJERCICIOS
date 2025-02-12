/*
Ejercicio 1: Conectar y enviar un mensaje al servidor
 Consigna
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
servidor!".
3. Escuche los datos recibidos y los muestre en consola.
 Pistas
• Usa net.createConnection() para conectar al servidor.
• Maneja el evento 'connect' para saber cuándo la conexión está
lista.
• Usa client.write() para enviar el mensaje.
• Captura los datos con el evento 'data'.
*/


const net = require ('net');


//Crea un cliente TCP que: 1. Se conecte a un servidor en localhost:5000.
const client = net.createConnection ({port: 5000, host: 'localhost'});

    //2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!".
    client.on('connect', () => {
    console.log("conectado al servidor");
    });

    //envía un msj al servidor
    client.write("Hola, servidor");
   


    //3. Escuche los datos recibidos y los muestre en consola.
    client.on('data', (data) => {
    console.log(`Recibiendo el msj del servidor: ${data.toString()}.`);
    });


/*
Ejercicio 2: Implementar un timeout en la conexión
 Consigna
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la
conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de
cerrar.
 Pistas
• Usa client.setTimeout() con 5000 milisegundos.
• Cuando el timeout ocurra, usa client.end() para cerrar la conexión.
*/

client.setTimeout(5000, () => {
    console.log('Tiempo de espera agotado.');
    client.end()
});


/*
Ejercicio 3: Pausar y reanudar la recepción de datos
 Consigna
Crea un cliente TCP que:
1. Reciba mensajes continuamente del servidor.
2. Al recibir el primer mensaje, pause la recepción durante 3
segundos.
3. Luego de los 3 segundos, reanude la recepción y siga mostrando
los mensajes.
 Pistas
• Usa client.pause() y client.resume().
• Un setTimeout() puede ayudarte a reanudar después de 3
segundos.
*/

setTimeout(() => {
    console.log('Pausando la recepcion de datos...');
    client.pause()

    setTimeout(() => {
        console.log('Reanudando la recepcion de datos...');
        client.resume()

    }, 3000)
}, 3000)

/*
Ejercicio 4: Manejo de errores en la conexión
 Consigna
Modifica el cliente para que:
1. Si ocurre un error (como un servidor no disponible), lo detecte y lo
muestre con " Error: [mensaje]".
2. Si la conexión se cierra inesperadamente, muestre " Conexión
cerrada inesperadamente".
 Pistas
• Usa client.on('error', callback) para manejar errores.
• Usa client.on('close', callback) para detectar cierres.
*/

client.on('error', (err) => {
    console.log('Error:', err.message)
});

client.on ('close', () =>{
    console.log('Se cierra conexión');
});

/*
Ejercicio 5: Detectar cuando el servidor cierra la conexión
 Consigna
Crea un cliente que:
1. Se conecte y envíe "¿Sigues ahí, servidor?".
2. Cuando el servidor cierre la conexión, muestre " Servidor cerró
la conexión".
 Pistas
• El evento 'end' se activa cuando el servidor finaliza la conexión.
*/

client.write("¿Sigues ahí, servidor?");

client.on('end', () =>{
    console.log("Servidor cerró la conexión")
});



























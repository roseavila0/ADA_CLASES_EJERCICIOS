/*
DESAFÍO 5: Cliente con Eventos y Control de Referencias
 Objetivo: Aplicar ref() y unref() para controlar la terminación del
proceso de Node.js.
 El cliente debe:
 Conectarse y enviar un mensaje inicial.
 Escuchar los eventos 'data', 'end', 'close' y 'error'.
 Llamar a client.unref() a los 10 segundos para permitir que el proceso
termine.
 A los 15 segundos, llamar a client.ref() para que el proceso se
mantenga activo.
 Cerrar la conexión a los 20 segundos.
*/

const net = require ('net');
const PORT= 5000;
const HOST= 'localhost';


const client =  net.createConnection ({port: PORT, host:HOST}, () =>{  
    console.log("conectado al servidor");
    client.write("hola servidor, soy el cliente");
});

client.on ('data', (data) =>{ 
    console.log("Datos recibidos", data.toString());
});

client.on('end', () =>{ 
    console.log("servidor cerrando conexión")
});

client.on('close', () => console.log('🚪 Conexión cerrada.'));

client.on('error', (err) =>{ 
    console.error("Error:", err.message);
});

setTimeout(()  =>{
    console.log("Llamando a unref(), permitiendo que el proceso termine si no hay más tareas.");
    client.unref();
}, 10000);

setTimeout(()  =>{
    console.log("Llamando a ref(), manteniendo el proceso activo.")
    client.ref();
}, 15000);


setTimeout(()  =>{
    console.log("cerrando conexión...");
    client.end();
}, 20000);

//PARA ENTENDER MEJOR EL PROCESO
//Orden de ejecución esperado

/*
	0s	Se conecta al servidor y envía "Hola servidor, soy el cliente".
    ?s	Si el servidor responde, se imprime "Datos recibidos: ...".
    10s	Se ejecuta unref(), permitiendo que el proceso termine si no hay más tareas activas.
    15s	Se ejecuta ref(), manteniendo el proceso activo.
    20s	Se ejecuta client.end(), cerrando la conexión.
    20s+	Se imprime "🚪 Conexión cerrada.". 
    ?s	Si hubo un error, se muestra "Error: ...".

*/
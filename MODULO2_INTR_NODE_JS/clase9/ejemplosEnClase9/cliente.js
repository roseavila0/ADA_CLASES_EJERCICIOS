const net = require ('net');

const client = net.createConnection({port:5000, host: 'localhost'}, ()  =>{
    console.log("Conectando al servidor...");
    client.write("Hola servidor, soy el cliente");
});

client.on('data', (data)  =>{
    console.log("Mensaje recibido", data.toString());
});

client.on('end', () =>{
    console.log("El servidor ha cerrado la conexión");
});

client.on('close', () => {
    console.log("conexión cerrada con el servidor");
});

client.on('error', (err) =>{
    console.log('Error: ', err.message);
});

client.setTimeout(() => {
    console.log("Pausando la recepción de datos");
    client.pause()
}, 2000);

client.setTimeout(()  =>{
    console.log("reanudando la recepción de datos")
    client.resume() 
}, 2000);

client.setTimeout(()  =>{
    console.log("Destruyendo la conexión.");
    client.destroy()
}, 2000);

client.setTimeout(()  =>{
    console.log("Eliminando la referencia del socket")
    client.unref()
}, 2000);

client.setTimeout(()  =>{
    console.log("Manteniendo la conexión activa")
    client.ref()
}, 2000);

client.setTimeout(()  =>{
    console.log("Cierre correcto de conexión")
    client.end()
}, 2000);
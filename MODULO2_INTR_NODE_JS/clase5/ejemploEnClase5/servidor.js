//PASO1: importamos el modulo NET (este modulo nos permite trabajar con servidores TCP)

const net = require('net');

//PASO2: Creamos el servidor TCP usando la funcion de createServer del modulo net
const server = net.createServer((socked) => {  
  //Este mensaje aparece cuando un cliente se conecta al servidor
    console.log('Un cliente se ha conectado');

    //Escuchamos el evento 'data' que se activa cuando el cliente envia datos al servidor //MANEJA LOS DATOS RECIBIDOS DEL CLIENTE
    Socket.on ('data', (data) => { 
        //mostrara en consola el mensaje recibido de cliente 
        console.log('Mensaje recibido: ', data.toString());

    });

    //Escuchamos el evento 'end' que se activa cuando el cliente se desconectado del servidor
    socked.on('end', () => {  
        console.log('El cliente se ha desconectado'); 
    });
});
  //PASO 3: Definimos el puerto en el que el servidor estara escuchando conexiones
  const PORT = 4000;

  //Iniciamos el servidor y lo ponemos a escuchar en el puerto especifico
  server.listen(PORT, () =>{
    //Mostramos un mensaje por consola indicando que el servidor esta listo
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
  });

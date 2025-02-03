/*    Ejercicio 1: Crear el servidor básico
Objetivo: Configurar un servidor TCP que escuche en el puerto 5000.
Guía paso a paso:
1. Crea un archivo llamado servidor.js.
2. Importa el módulo que te permite trabajar con servidores TCP (net).
3. Usa el método que crea un servidor.
o Pista: Este método necesita una función que se ejecuta cuando alguien se conecta.
4. Configura el servidor para que escuche en el puerto 5000.
o Pista: Usa el método que pone al servidor "a escuchar".
5. Agrega un mensaje en la consola para confirmar que el servidor
está listo. */

/* Ejercicio 2: Detectar conexiones de clientes
Objetivo: Mostrar en la consola cuando un cliente se conecta al servidor.
Guía paso a paso:
1. Revisa la función que agregaste al crear el servidor.
o Pista: Esa función se ejecuta cada vez que un cliente se conecta.
2. Dentro de esa función, agrega un mensaje en la consola que diga: "¡Un cliente se ha conectado!".
3. Verifica que el mensaje aparezca cuando el servidor recibe una conexión.
*/


/*        Ejercicio 3: Recibir y mostrar datos del cliente
Objetivo: Mostrar en la consola cualquier mensaje que el cliente envíe al servidor.
Guía paso a paso:
1. Usa el evento data para detectar cuando el cliente envía datos.
o Pista: El evento se llama en el socket que representa la
conexión del cliente.
2. En el callback del evento, convierte los datos recibidos (buffer) en
texto usando .toString().
3. Muestra el mensaje en la consola con un texto como:
"Mensaje recibido del cliente: <mensaje>".
*/

/*
Ejercicio 4: Responder al cliente
Objetivo: Enviar una respuesta al cliente después de recibir un mensaje.
Guía paso a paso:
1. Dentro del evento data, agrega una línea para enviar datos al
cliente.
o Pista: Usa el método que permite escribir datos en el socket.
2. Escribe un mensaje que diga:
"¡Hola, cliente! Tu mensaje fue recibido correctamente."
3. Verifica que el cliente reciba esta respuesta después de enviar un
mensaje.
*/

/*
Ejercicio 5: Detectar cuando el cliente se desconecta
Objetivo: Mostrar en la consola un mensaje cuando el cliente cierra la conexión.
Guía paso a paso:
1. Usa el evento end para detectar cuándo el cliente se desconecta.
o Pista: Este evento también está disponible en el socket.
2. Dentro del callback del evento, agrega un mensaje en la consola
que diga:
"El cliente se ha desconectado."
3. Verifica que el mensaje aparezca después de que el cliente cierre la
conexión.
*/

const net = require("net");

const server = net.createServer ((socket) => {
    console.log ("Un cliente se ha conectado");

   // socket.on("data", (data) => {
   //    console.log("Datos recibidos:", data.toString())
   // });


//ejercicio 3
//socket.on("data"): Captura los datos enviados por el cliente.
   socket.on ("data", (data) => {  
    console.log("Mensaje recibido del cliente:", data.toString());
   
      
//ejercicio4  --- Respuesta al cliente después de recibir su mensaje
socket.write("¡Hola, cliente! Tu mensaje fue recibido correctamente.");
});


//ejercicio5
    socket.on("end", () => {
        console.log("El cliente se ha desconectado");
    }); 
});

    const PORT = 5000;

    server.listen(PORT, () => {
         console.log( `Servidor TCP Escuchando en el puerto ${PORT}`)
        });





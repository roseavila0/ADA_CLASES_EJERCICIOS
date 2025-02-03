/* 

POR TERMINAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!OJO

Ejercicio Extra: Contador de Clientes Conectados

Objetivos centrales:
• Cada vez que un cliente se conecte, aumentaremos un contador.
• Cuando un cliente se desconecte, disminuiremos ese contador.
• Mostraremos en la consola cuántos clientes están conectados en
ese momento.
Guía paso a paso:
1. Paso 1: Crear una variable para el contador de clientes
o Antes de crear el servidor, declara una variable llamada
clientesConectados e inicialízala en 0.
o Pista: Esta variable será global, ya que debe funcionar para
todos los clientes.
2. Paso 2: Incrementar el contador al conectar un cliente
o En la función que se ejecuta cuando un cliente se conecta,
incrementa la variable clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha conectado. Clientes conectados: X", donde
X es el número actual de clientes conectados.
3. Paso 3: Decrementar el contador al desconectar un cliente
o En el evento end, decrementa el valor de la variable
clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha desconectado. Clientes conectados: X",
donde X es el número actual de clientes conectados.


*/

const net = require("net");

/*
1. Paso 1: Crear una variable para el contador de clientes
o Antes de crear el servidor, declara una variable llamada
clientesConectados e inicialízala en 0. 
*/

let clientesConectados = 0;


/*
2. Paso 2: Incrementar el contador al conectar un cliente
o En la función que se ejecuta cuando un cliente se conecta,
incrementa la variable clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha conectado. Clientes conectados: X", donde
X es el número actual de clientes conectados. 
*/


const server = net.createServer ((socket) => {
    clientesConectados = clientesConectados + 1;
    //tbn puede usar ++  asi =    clientesConectados++; //o tbn clientesConectados+=1;  Incrementamos cuando un cliente se conecta
    console.log ("Un cliente se ha conectado");
    console.log (`Clientes conectados: ${clientesConectados}.`);

   // socket.on("data", (data) => {
   //    console.log("Datos recibidos:", data.toString())
   // });


    //socket.on("data"): Captura los datos enviados por el cliente.
   socket.on ("data", (data) => {  
    console.log("Mensaje recibido del cliente:", data.toString());
   
      
    //--- Respuesta al cliente después de recibir su mensaje
socket.write("¡Hola, cliente! Tu mensaje fue recibido correctamente.");
});


/*
3. Paso 3: Decrementar el contador al desconectar un cliente
o En el evento end, decrementa el valor de la variable
clientesConectados. 
*/

    socket.on("end", () => {
        clientesConectados = clientesConectados +1 // Restamos cuando un cliente se desconecta
        console.log("El cliente se ha desconectado");
        console.log (`Clientes conectados: ${clientesConectados}.`);
    }); 
});

    const PORT = 5000;

    server.listen(PORT, () => {
         console.log( `Servidor TCP Escuchando en el puerto ${PORT}`)
        });

/*
4. Paso 4: Probar el servidor
o Inicia el servidor y observa cómo el contador cambia a
medida que se conectan y desconectan clientes.
o En este caso, no se preocupen por probarlo con clientes
reales, ya que el próximo paso será aprender a probar estos
servidores.
*/
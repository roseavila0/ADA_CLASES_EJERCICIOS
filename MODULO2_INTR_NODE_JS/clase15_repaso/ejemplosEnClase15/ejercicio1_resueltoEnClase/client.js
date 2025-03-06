//ES ES UN EJEMMPLO DE LA ESTRUCTURA DE CLIENTE MAS BASICO QUE SE PUEDE CREAR

//FALTA enviar comando por terminal

//paso 6: importacion en el cliente

const net = require ('net')
const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//paso 7: creamos al cliente
const client = net.createConnection({port: 3000}, () => {
    console.log("\n conectado al servidor \n");
    //client.write("hola servidor")

     //Llamada incial para pedir el primer mensaje(solo cuando estamos conectados)
    pedirMensaje();
});

    //funcion para pedir mensaje o comando y enviarlo
    function pedirMensaje() {
        rl.question("Ingresa tu mensaje o '/historial' para ver el historial: \n", (input) => {
        if (input === '/historial'){ 
            client.write('/historial'); //ENVIAMOS EL COMANDO AL SERVIDOR
        }else{ 
            client.write(input); //ENVIAMOS EL MENSAJE AL SERVIDOR 
        }
       
    });
    }

   
   
// Evento data: muestra la respuesta del servidor
client.on('data', (data) =>{
    console.log("Respuesta del servidor:", data.toString());
      // Una vez que recibimos la respuesta del servidor, pedimos otro mensaje
      pedirMensaje(); 
});


//evento end: cuando se desconecta del servidor
client.on('end', () =>{
    console.log("Desconectado del servidor");
    rl.close(); // Cerraos la interfaz de readline cuando el cliente se desconecta
});
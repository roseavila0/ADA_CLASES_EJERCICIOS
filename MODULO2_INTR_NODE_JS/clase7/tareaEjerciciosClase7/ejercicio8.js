/*
Ejercicio 8: Servidor con Autenticación Simple
Consigna:
Crea un servidor TCP que requiera que los clientes se autentiquen antes
de poder enviar mensajes. El servidor debe solicitar un nombre de
usuario y una contraseña. Si las credenciales son correctas, el servidor
debe permitir que el cliente envíe mensajes. Si no, debe cerrar la
conexión.
Requisitos:
• Usa el evento data para recibir las credenciales y validarlas.
• Usa el método socket.write() para solicitar credenciales y enviar
mensajes de éxito/error.
• Usa el método socket.end() para cerrar la conexión si las
credenciales son incorrectas.
*/


const net = require("net");

const server = net.createServer((Socket)=> {
    console.log("Un cliente se ha conectado al servidor"); 

    let autenticado = false; //variable para saber si el usuario ha iniciado sesión

    //Enviamos msj al cliente - El servidor debe solicitar un nombre de usuario y una contraseña.
    socket.write("Hola, ingresa tu nombre de usuario: \n");

    Socket.on("data", (data) => {
        if(!autenticado){ //si el usuario no esta autenticado aún
            const entradaDatos = data.toString().trim(); //convertimos los datos que ingresa a texto y eliminamos espacios en blanco
            
            if(entradaDatos === "usuario:contraseña"){
                autenticado = true; //marcamos el usuario como autenticado
                socket.write("Usuario autenticado, puedes enviar mensajes.\n");
            } else {
                socket.write("Credenciales incorrectas. Cerrando conexión...\n");
                socket.end(); //del lado del servidor, cerramos la conexión con el cliente.
            }
            } else {
                //si el usuario ya está auténticado, simplemente recibimos su mensaje y respondemos.
                const mensaje = data.toString().trim();
                socket.write(`Mensaje recibido: ${mensaje}\n`);
            };       
    });

    //evento que se activa cuando se desconecta el cliente
    socket.on("end", () =>{
        console.log("Cliente desconectado.");
    });
});

    //El servidor escucha en el puerto #
    const PORT = 3000;
    server.listen(PORT, ()=> {
        console.log(`El servidor de autenticación esta escuchando en el puerto ${PORT}`);
    });



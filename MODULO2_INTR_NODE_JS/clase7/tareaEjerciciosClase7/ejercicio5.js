/*
Ejercicio 5: Servidor con Contador de Conexiones
Consigna:
Crea un servidor TCP que lleve un contador de cuántos clientes se han
conectado. Cada vez que un nuevo cliente se conecta, el servidor debe
enviarle un mensaje indicando cuántos clientes se han conectado hasta
ese momento. Cuando un cliente se desconecta, el servidor debe reducir
el contador.
Requisitos:
• Usa una variable global para mantener el contador de conexiones.
• Usa el evento connection para incrementar el contador y enviar el
mensaje al cliente.
• Usa el evento close para reducir el contador cuando un cliente se
desconecta.
*/

const net =  require ("net");
let contador = 0; //contador de las conexiones

const server = net.createServer ((Socket) => {
    contador ++;
    console.log(`Un cliente se ha conectado al servidor - Cantidad de clientes conectados: ${contador}`);

    //envio del #de conexión designado al cliente
    socket.write(`Bienvenido, eres el cliente # ${contador} en conectarte. \n`);

    //Evento "close":  Reduce el contador cuando un ciente se desconecta.
    socket.on('close', () => {
        contador --;
        console.log((`Un cliente se ha desconectado. Total de clientes conectados ${contador}`));
    })
});

const PORT= 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
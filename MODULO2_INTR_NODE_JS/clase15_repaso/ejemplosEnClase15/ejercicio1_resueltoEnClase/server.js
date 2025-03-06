/*
Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos
Consigna:
Crea un servidor TCP que reciba mensajes de los clientes y los guarde en
un archivo JSON. Luego, permite a los clientes consultar todos los
mensajes almacenados.
Pasos:
• Usa el módulo net para crear el servidor.
• Usa fs para guardar los mensajes en un archivo mensajes.json.
• Implementa un comando especial (ej: /historial) para que los
clientes puedan consultar todos los mensajes.
*/




//paso 1: importamos los modulos necesarios

const net = require ('net') //servidor
const fs = require ('fs') //archivos
const path = require ('path') //rutas

//paso 2:  definimos la ruta donde se guardaran los mensajes en formato json
const rutaMensajes = path.join(__dirname, 'mensajes.json')

//paso 3: verificamos si el archivo json existe y sino que se cree con una array vacio 

if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8')
}

//paso 4: creamos el servidor
const server =  net.createServer((socket) =>{
    console.log('cliente conectado');

    //Manejamos los datos recibidos del cliente
    socket.on ('data', (data) => {
        const mensaje = data.toString().trim(); //to string convierte buffer a texto y trim quita espacios antes y despues.


        //si el mensaje recibido es "/historial", enviamos todos los mensajes almacenados
        if (mensaje === '/historial') {
            //leemos el contenido del archivo mensaje.json
            const historial = fs.readFileSync(rutaMensajes, 'utf-8')
            //enviamos el historial (todos los mensajes)
            socket.write(`Historial de mensajes: \n ${historial}`)
        } else {
            //sino me manda ese comando hace lo siguiente
            //leemos el archivo json y los convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]')
            //agregamos el nuevo mensaje con la fecha y hora actual
            mensajes.push({fecha: new Date().toISOString(), mensaje})
            //guardamos el array actualizado en el archivo mensajes.json con un formato legible
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8')
            //enviamos una confirmación de que se guarda bien al cliente
            socket.write("Mensaje guardado correctamente \n")

        }
    })

    //manejamos la desconexión del cliente
    socket.on('end', () =>{
        console.log("cliente desconectado");
    })
})

//paso 5: inicio del servidor
server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
});
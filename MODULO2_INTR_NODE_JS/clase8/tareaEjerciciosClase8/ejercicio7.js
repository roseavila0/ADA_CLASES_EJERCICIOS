/*
Ejercicio 7: Cliente que destruye el socket al fallar
 Consigna
Crea un cliente que:
1. Se conecte al servidor.
2. Si hay un error en la conexión, use client.destroy() y muestre "
Conexión destruida".
 Pistas
• client.destroy() libera los recursos del socket de inmediato.
*/

const { error } = require('console');
const net = require ('net');

const client = net.createConnection ({port: 3000, host: 'localhost'}, () =>{
    console.log("conectado al servidor"); 
});

client.on('error', (err) => {
    console.error('Error:', err.message);
    client.destroy() //esto cierra el socket de inmediato
    console.log("Conexión destruida como tu alma");
}); 

//manejamos la desconexión del servidor
client.on('end', () =>{ 
    console.log("Desconectado del servidor");
});
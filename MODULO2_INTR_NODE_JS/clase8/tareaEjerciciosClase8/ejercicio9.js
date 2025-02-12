
/*
Ejercicio 9: Cliente que reconecta automáticamente
 Consigna
Crea un cliente que:
1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
que tenga éxito.
 Pistas
• Usa setTimeout() para intentar de nuevo tras 3 segundos.
• Llama a net.createConnection() dentro del reintento.
*/

const net = require ('net');

const client = net.createConnection({port: 3000, host: 'localhost'}, () =>{
    console.log("conectado al servidor");
});

function reconectar() {
    setTimeout(() => {
        console.log('🔄 Reintentando conexión...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar); //Si hay un error en la conexión, intenta reconectarse.
client.on('close', reconectar); //Si la conexión se cierra, intenta reconectarse.



//OTRA FORMA DE RESOLVER
/*
const net = require('net');

function conectar() {
    const client = net.createConnection({ port: 3000, host: 'localhost' }, () => {
        console.log("✅ Conectado al servidor");
    });

    client.on('error', (err) => {
        console.log(`❌ Error: ${err.message}`);
        console.log('🔄 Reintentando conexión en 3 segundos...');
        setTimeout(conectar, 3000);
    });

    client.on('close', () => {
        console.log('🔌 Conexión cerrada. Reintentando...');
        setTimeout(conectar, 3000);   //RECUERDA LA SINTAXIS  setTimeout(funcion, tiempo_en_milisegundos);
    });
}

conectar();
*/
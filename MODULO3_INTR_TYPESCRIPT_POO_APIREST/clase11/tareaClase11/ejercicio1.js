/*1. Simulación de Tiempo de Respuesta de un Servidor
Imagina que quieres simular cómo responde un servidor cuando un cliente
realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta
variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada
simulacionServidor que simule este comportamiento utilizando async y await.
La función deberá:
• Tener un retardo de tiempo aleatorio.
• Retornar el mensaje "Servidor listo" una vez que haya transcurrido el
tiempo.
Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos
asíncronos, fundamental cuando trabajamos con peticiones de red en el
desarrollo web.
*/


/* RECUERDA!!!
Math.random() * 2000 // genera un número entre 0 y 1999.99...
Math.floor(...) + 1000 // lo redondea hacia abajo y suma 1000 => entre 1000 y 2999 ms*/

function simulacionServidor(){
    return new Promise((resolve)  => {
        const retardo = Math.floor(Math.random()* 2000) + 1000; //// aleatorio entre 1000 y 3000 ms
        setTimeout(()  => resolve ("Servidor listo."), retardo)
    })
}

async function respuestaServidor (){
    console.log("Respondiendo peticiones")

    const resultado =  await simulacionServidor()
    console.log(resultado); // Debería imprimir: "Servidor listo"
}

respuestaServidor();


//RESOLUCIÓN DE LA PROFE
/*
// Creamos una función retardo que retorna una promesa que se resuelve después de un tiempo aleatorio
const retardo = () => new Promise(resolve => {
    // Generamos un tiempo aleatorio entre 1 y 3 segundos
    const tiempoAleatorio = Math.random() * 2000 + 1000;
    setTimeout(resolve, tiempoAleatorio); // Esperamos ese tiempo antes de resolver la promesa
});

// Definimos la función asincrónica simulacionServidor
async function simulacionServidor() {
    await retardo(); // Pausamos la ejecución hasta que el retardo aleatorio se complete
    return "Servidor listo"; // Una vez terminado el retardo, retornamos un mensaje
}

// Llamamos a la función y esperamos a que se resuelva
simulacionServidor().then(console.log); // Imprime "Servidor listo" en la consola tras el retardo
*/


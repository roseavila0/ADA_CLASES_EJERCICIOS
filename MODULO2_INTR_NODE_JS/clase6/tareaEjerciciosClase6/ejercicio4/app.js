/*
Ejercicio 4: Mensaje de despedida personalizado
Consigna:
Crea un programa interactivo que pregunte al usuario su nombre y lo use en un mensaje de despedida. Usa variables de entorno para
personalizar el saludo inicial. Requisitos del programa:
1. Usa una variable de entorno llamada START_MESSAGE para configurar el saludo inicial.
2. Usa readline para preguntar el nombre del usuario.
3. Despídete del usuario con un mensaje personalizado.
*/

// Importamos dotenv para leer variables de entorno.
require ("dotenv").config();
// Importamos readline para la interacción.
const readline = require ("readline");


// Obtenemos el mensaje inicial de las variables de entorno.
const startMessage = process.env.START_MESSAGE || "¡Bienvenido al programa!";
console.log(startMessage);

//se crea la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


//preguntar por el nombre del ususario
rl.question("¿what is your user name?" , (userName) => { 
    //Despídete del usuario con un mensaje personalizado.
    console.log(`¡Nos vemos, ${userName}. Hasta la próxima!` );
    rl.close();
});


// Manejamos el cierre del programa.
rl.on("close", () => {
    process.exit(0);
});
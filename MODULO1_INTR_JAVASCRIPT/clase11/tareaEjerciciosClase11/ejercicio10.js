//Ejercicio 10: Adivina el número.

//Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1
//y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. 
//Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
//Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.
//< > 

const prompt = require('prompt-sync')();

// Generar un número aleatorio entre 1 y 10
//Usamos Math.random() para generar un número entre 1 y 10.
//La fórmula Math.floor(Math.random() * 10) + 1 asegura que el número esté en el rango deseado.

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("Adivina el número secreto entre 1 y 10. Tienes 3 intentos.");

for (let i= 1; i<= 3; i++) {
    let respuesta = parseInt(prompt(`Intento ${i}: `));

    if (respuesta === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        break; // Salir del ciclo si acierta
    } else if (i === 3) {
        console.log(`Lo siento, no adivinaste. El número secreto era: ${numeroSecreto}`);
    } else {
        console.log("Incorrecto. Intenta de nuevo.");
    }
}
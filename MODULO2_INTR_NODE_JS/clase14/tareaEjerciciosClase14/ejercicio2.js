/*
Ejercicio 2: Menú Interactivo con readline-sync
Crea un script de Node.js que muestre un menú de opciones usando
readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
ver un mensaje de bienvenida, generar un hash de un texto, o salir.
*/

const readlineSync = require ('readline-Sync');

const options = ['Mensaje de Bienvenida', 'Generar hash de un texto', 'salir'];

const selectionItem = readlineSync.keyInSelect(options, "Chose an option");


if (selectionItem === -1) {
    console.log("You have not chosen any option.")
} else {
    console.log(`You have selected: ${options[selectionItem]}`);
}



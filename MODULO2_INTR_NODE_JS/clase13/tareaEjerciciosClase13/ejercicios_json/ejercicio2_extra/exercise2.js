/*
Ejercicio 2: Leer y Modificar un Archivo JSON
Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos
nuevamente.
Instrucciones:
• Crea un archivo llamado data.json con el siguiente contenido:
• Crea un archivo llamado exercise2.js.
• Lee el archivo data.json, modifica el campo age a un nuevo valor, y
guarda el archivo modificado
*/

//1. Importamos el modulo path 
//importamos tambien fs para trabajar con los archivos

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../ejercicio2_extra/data.json');

fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const jsonPerson = JSON.parse(data); // Convertimos el JSON en un objeto JS
    jsonPerson.age = 45; // Modificamos la propiedad "age"

    // Convertimos el objeto modificado de vuelta a JSON
    const updateData = JSON.stringify(jsonPerson, null, 2);

    // Escribimos los datos actualizados en el archivo JSON
    fs.writeFile(dataPath, updateData, 'utf-8', (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
        } else {
            console.log('El archivo ha sido modificado y guardado correctamente');
        }
    });
});





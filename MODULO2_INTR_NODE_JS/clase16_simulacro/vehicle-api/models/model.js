/*
models/ - Modelos para la gestión de datos y la lógica de negocio. //SISTEMA PARA EL REGISTRO DE VEHICULOS
Implementa en el modelo la lógica para leer y escribir datos desde y hacia estos archivos usando el módulo FS.
*/

const fs = require ('fs');
const path = require('path');

// Usamos path.join para asegurar que la ruta sea correcta y compatible con todos los sistemas operativos
const filePath = path.join(__dirname, '../data/vehicles.json'); 

function readVehicles() {
    if (!fs.existsSync(filePath)) { 
        //fs.writeFileSync(filePath,  JSON.stringify([])); //convertimos a json
        fs.writeFileSync(filePath, '[]');
        //return []; // Retornar un array vacío en caso de no existir
        }else{
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data); //convertimos a js
    }
};


function saveVehicles (vehicle) {
    fs.writeFileSync(filePath, JSON.stringify(vehicle, null, 2));

}


module.exports = { readVehicles, saveVehicles};
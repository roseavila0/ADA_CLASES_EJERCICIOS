const {readVehicles, saveVehicles} = require('../models/model');
const {formatVehicleResponse}  = require('../views/view');

// Muestra los vehículos
function showVehicles() {
    const vehicles = readVehicles(); // Lee los vehículos desde el modelo
    return formatVehicleResponse(vehicles)
}

// Agrega un vehículo
function addVehicle(vehicle) {
    const vehicles = readVehicles(); // Lee los vehículos actuales  
    vehicles.push(vehicle)
    saveVehicles(vehicles)
}

module.exports = { showVehicles, addVehicle };
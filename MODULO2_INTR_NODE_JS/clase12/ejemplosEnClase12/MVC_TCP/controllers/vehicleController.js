//paso 4
//Importamos el módulo que hicimos en el modelo
//Este módulo contiene la lógica para obtener los datos de los vehículos

const vehicleModel = require ('../models/vehicleModel')

//Paso 5: Importamos el modulo de la vista
//este modulo tiene la lógica para formatear la respuesta que se enviara al usuario
const vehicleView = require ('../views/vehicleViews')

//Creamos un objeto que manejara las solicitudes relacionadas con vehiculos
const vehicleController = {
    //METODO PARA MANEJAR SOLICITUDES DE VEHICULOS POR ID
    handleRequest: (id) => {
        //Llamamos al metodo getVehicleById del modelo para obtener los datos del vehiculo
        //convertimos el id a un numero entero usando parseint (base10)
        const vehicle = vehicleModel.getVehicleById(parseInt(id,2))

        //llamamos al metodo formatoResponse del view
        //este metodo toma los datos del vehiculo y los prepara para ser enviados al usuario
        return vehicleView.formatResponse(vehicle)
    }
}

//Exportamos el objeto para que se use en otro lado (archivos)
module.exports = vehicleController
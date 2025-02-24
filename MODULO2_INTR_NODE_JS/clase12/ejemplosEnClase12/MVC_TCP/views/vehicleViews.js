//paso 3: Creamos un objeto que contendra los metodos para formatear respuestas relacioandas con vehículos

const vehicleView = {
    //Metodo para formatear la respuesta que se enviara al usuario
    formatResponse: (vehicle) =>{
        //Verificamos si el vehículo es null o undefined (osea que no se encontro)
        if (!vehicle) {
            //Si no se encontro el vehículo, devolvemos un objeto json con un mensaje
            return JSON.stringify({
                status: "error", //indicamos que hubo un error
                message: "vehiculo no encontrado" //mensaje descriptivo
            });
        }
        //si se encontró el vehículo, devolvemos un objeto json con los datos del vehículo
        return JSON.stringify({
            status: "success", //Indicamos que fue exitoso
            data: vehicle // incluimos los datos del vehiculo
        })
    }
}

module.exports = vehicleView
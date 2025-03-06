const formatVehicleResponse = (vehicle)=>{
    if(!vehicle){
        return JSON.stringify({
            status: "error", 
            message: "Vehiculo no encontrado"
        })
    }

    return JSON.stringify({
        status: "sucess",
        data: vehicle
    })
}

module.exports = {formatVehicleResponse}







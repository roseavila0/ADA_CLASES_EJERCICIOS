//Paso 1: empezamos con el modelo, hacemos las importaciones: 
// fs =  file system y es para trabajar con el sistema de archivos
//path = Nos ayuda a manejar las rutas de archivos

const fs = require ('fs')
const path =  require ('path')

//Paso 2: Definimos la ruta del archivo "data.json " que esta en el mismo directorio que este archivo.
// __dirname es una variable global que contiene la ruta del directorio actual.

const dataPath = path.join(__dirname, 'data.json')

//Paso 3: Creamos un objeto que contendra metodos para interactuar con los datos de los vehículos.
const vehicleModel = {
    //METODO PARA ADQUIRI UN VEHÍCULO POR ID

    getVehicleById: (id) => {
        //Leemos el archivo json de manera sincrono
        const rawData = fs.readFileSync(dataPath);
        //convertimos el contenido del archivo JSON a JS
        const vehicles = JSON.parse(rawData);
        //Buscamos el vehículo cuyo id coincida con el id proporcionado
        // si no encuentra ningun vehículo con ese id, reetorn null
        return vehicles.find(vehicle => vehicle.id === id || null)
    }
}

//exportamos el objeto 'vechicleModel' para que pueda ser utilizado en otros archivos
module.exports = vehicleModel
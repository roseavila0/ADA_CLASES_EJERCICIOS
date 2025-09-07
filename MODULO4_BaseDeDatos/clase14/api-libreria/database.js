const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("conectado a MongoDB correctamente");
    } catch (error){
        console.error("Error al conectar con MongoDB:", error);

        //Si hay un error, detenemos la ejecución del programa con un código de salida 1(indica un error).
        process.exit(1);
    };
};

module.exports = connectDB;
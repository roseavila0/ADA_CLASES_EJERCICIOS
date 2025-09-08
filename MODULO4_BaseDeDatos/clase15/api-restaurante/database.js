const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a MongoDB correctamente");
    } catch (error){
        console.error("Error al conectar con MongoDB:", error);
        process.exit(1);
    };
}; 

module.exports = connectDB
const mongoose = require("mongoose");

const LibroSchema = new mongoose.Schema ({
    titulo:{type:String, required:true}, 
    anioPublicacion:{type: Number},

    //Definimos el campon'autor' como una referencia a un documento de la colección 'Autor'.
    //Utilizamos mongoose.Schema.types.ObjectId para almacenar el ID del autor.
    //La opción 'ref: "Autor"' indica que este campo esta relacionado con el modelo 'Autor' 
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "Autor"}  //Relación con el modelo Autor.
});

module.exports = mongoose.model("Libro", LibroSchema);
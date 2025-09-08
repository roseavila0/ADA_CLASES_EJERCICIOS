const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema ({
    nombre: {type: String, required:true},
    correo: {type: String},
    telefono: {type: Number},
    vip: {type: Boolean}
})

module.exports = mongoose.model("Cliente", ClienteSchema);
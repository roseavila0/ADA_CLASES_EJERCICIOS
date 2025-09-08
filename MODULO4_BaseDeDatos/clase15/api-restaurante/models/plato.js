const mongoose= require ("mongoose");

const PlatoSchema = new mongoose.Schema ({
nombre: {type: String, required: true},
precio: {type: Number},
categoria: {type: String},
disponible: {type: Boolean}
});

module.exports = mongoose.model("Plato", PlatoSchema);
const mongoose = require ("mongoose");

const PedidoSchema= new mongoose.Schema ({
    
cliente: {type: mongoose.Schema.Types.ObjectId, ref: "Cliente"},
platos: { type: mongoose.Schema.Types.ObjectId, ref: "Plato", required: true },
total: {type: Number, required: true},
fecha: {type: Date},
entregado: {type: Boolean}
});

module.exports= mongoose.model("Pedido", PedidoSchema);
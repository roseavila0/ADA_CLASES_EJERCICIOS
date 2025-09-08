const express = require ('express');
const router = express.Router();

const Pedido = require('../models/pedido');

router.post ("/", async (req, res) =>{
    const nuevoPedido = new Pedido(req.body);
    await nuevoPedido.save();
    res.json(nuevoPedido);
})

router.get ("/", async (req , res) =>{
    const pedidos = await Pedido.find();
    res.json(pedidos);
});

router.put("/:id", async (req , res) =>{
    const pedido =  await pedido.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(pedido);
});

router.delete("/:id", async (req , res) =>{
    await pedido.findByIdAndDelete(req.params.id);
    
    res.json({mensaje: "Pedido eliminado"});
});

module.exports = router;
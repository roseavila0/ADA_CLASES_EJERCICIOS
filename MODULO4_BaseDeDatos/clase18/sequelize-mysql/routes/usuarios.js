const express = require("express"); 
const Usuario = require("../models/usuario");

const router = express.Router(); 

router.post("/", async (req, res)=>{
    try{
        const usuario = await Usuario.create(req.body)
        res.status(201).json(usuario)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}); 

router.get("/", async (req, res)=>{
    const users = await Usuario.findAll(); 
    res.json(users); 
})

router.get("/:id", async (req, res)=>{
    const usuario = await Usuario.findByPk(req.params.id)
    if (usuario){
        res.json(usuario)
    }else{
        res.status(404).json({error: "Usuario no encontrado"})
    }
})

router.put("/:id", async(req, res)=>{
    const usuario = await Usuario.findByPk(req.params.id)
    if(usuario){
        await usuario.update(req.body)
        res.json(usuario)
    }else{
        res.status(404).json({error: "Usuario no encontrado"})
    }
})

router.delete("/:id", async (req, res)=>{
    const usuario = await Usuario.findByPk(req.params.id)
    if(usuario){
        await usuario.destroy()
        res.json({mensaje: "Usuario eliminado"})
    }else{
        res.status(404).json({error: "Usuario no encontrado"})
    }
})

module.exports = router; 
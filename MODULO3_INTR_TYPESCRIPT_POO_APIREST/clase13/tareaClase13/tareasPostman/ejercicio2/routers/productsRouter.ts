
import { Router } from "express";
const productsRouter = Router()

productsRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los productos'})
})

productsRouter.get('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del paramentro de la url
    res.json({message: `Producto con ID ${id}`})
})

export default productsRouter
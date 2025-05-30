
import { Router } from "express";
const usersRouter = Router()


usersRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'})
})

usersRouter.get('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del paramentro de la url
    res.json({message: `Usuario con ID ${id}`})
})

export default usersRouter;

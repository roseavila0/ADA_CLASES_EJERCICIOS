/*
Ejercicio 1. Crear un router básico para productos y usuarios.

Descripción:
1. Crea un router en Express para manejar rutas de productos y usuarios.
2. Crea un archivo userRouter.ts para manejar las rutas de usuarios.
3. En el archivo userRouter.ts, define las rutas:
• Ruta GET /users que devuelva una lista de usuarios.
• Ruta GET /users/:id que devuelva un usuario con el id correspondiente.


Pistas:
• Usa express.Router() para crear un router.
• Utiliza req.params.id para acceder al id de la URL en las rutas dinámicas. 
*/

//RECUERDA:  archivo userRouter.js = Define rutas de usuario
//archivo index.ts = Inicia el servidor y usa el router 


  /* importa el módulo Router desde Express. Es lo que te permite agrupar rutas en un solo archivo modular, en lugar de definirlas directamente en app.ts o index.ts.*/
import {Router} from "express"

    //Aquí estás creando una instancia del router para usuarios.
const userRouter = Router()


    //Esta ruta responde a GET /users. 
    //Devuelve un mensaje genérico por ahora, pero en el futuro podrías conectar esto a una base de datos o una lista de usuarios.
userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'})
})


userRouter.get('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del paramentro de la url
    res.json({message: `Usuario con ID ${id}`})
})

// 👇 ESTA LÍNEA ES IMPORTANTE
export default userRouter;
// Importamos express y algunos tipos especificos de express
/* Traes Express y sus tipos (Application, Request, etc.)

Importas tu router (archivo que maneja las rutas /api/quotes)

Importas un middleware personalizado para manejar errores

*/

import express, { Application, Request, Response, NextFunction } from 'express'
import quotesRouter from './routes/quotes-routes'
import {errorMiddleware} from './middlewares/error-middleware'

// cramos una instancia de express // Esto genera la "aplicación" de Express, que usas para definir rutas, middlewares y escuchar peticiones.
const app: Application = express()

// middleware global para analizar el cuerpo de soli en formato json
//  Middleware global para leer JSON “Cuando recibas un body en formato JSON (como cuando mandas data con Postman o fetch), interprétalo y guárdalo en req.body”.
app.use(express.json())

// configuracion de rutas principales de la api // “Si alguien accede a /api/quotes, usa lo que está definido en quotesRouter (tu archivo de rutas)”.
app.use('/api/quotes', quotesRouter)

// Esto se activa si ninguna ruta coincide. Sirve para avisar que la ruta no existe.
app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint no encontrado'})
})

// middleware global para manejar la api //Este se encarga de capturar errores que ocurran en cualquier parte del programa y devolver una respuesta ordenada.
app.use(errorMiddleware)

// definimos el puerto
const PORT = 3000

// iniciar el servidor 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})
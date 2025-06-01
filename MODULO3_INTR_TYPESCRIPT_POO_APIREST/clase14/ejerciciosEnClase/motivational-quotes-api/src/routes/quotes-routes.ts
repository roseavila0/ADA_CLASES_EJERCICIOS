//El “mapa de rutas”
/*Este archivo le dice a Express:
“Cuando lleguen solicitudes a /api/quotes, esto es lo que debes hacer dependiendo del método HTTP (GET, POST, etc.) y la URL”.*/

import {Router} from 'express'

// importacion de funciones
import {
    getAllQuotes,
    getQuotesById,
    createQuotes,
    updateQuotes,
    deleteQuotes
} from '../controllers/quotes-controllers'

import {validateQuote} from '../middlewares/validate-middleware'

/*
 Importaciones importantes:
 Cargas el enrutador de Express

Importas las funciones controlador (las que hacen el trabajo real)

Importas un middleware de validación para revisar los datos antes de crear una frase */


// crando la instancia del router (para manejar las rutas) // Este router es como una mini-app de Express solo para manejar /api/quotes.
const router: Router = Router()

// Rutas y lógica conectada:
router.get('/', getAllQuotes)                            // Si alguien hace GET /api/quotes→ Ejecuta la función getAllQuotes
router.get('/:id', getQuotesById)                        //Si alguien hace GET /api/quotes/5→ Ejecuta getQuotesById con el ID 5
router.post('/', validateQuote, createQuotes)            // Si alguien hace POST /api/quotes con un body → Primero revisa con validateQuote si el contenido es válido → Luego ejecuta createQuotes
router.patch('/:id', updateQuotes)                       //Si alguien hace PATCH /api/quotes/7 con cambios → Ejecuta updateQuotes con el ID 7
router.delete('/:id', deleteQuotes)                     // Si alguien hace DELETE /api/quotes/3 → Ejecuta deleteQuotes con el ID 3



export default router
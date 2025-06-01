/*  quotes-controllers.ts – Los “mecánicos” de cada ruta
Este archivo contiene las funciones que ejecutan lo que se necesita hacer con las frases motivacionales. Se llaman “controladores”. */


/* Usas los tipos Request y Response para trabajar con la solicitud y respuesta.
Importas el modelo QuotesModel, que es quien realmente guarda y maneja las frases (lo veremos en el próximo paso).   */

import { Request, Response } from "express";
import {QuotesModel} from '../models/quotes-models'

// controlador para obtener todas las frases // Obtiene todas las frases del modelo y las devuelve como JSON.
export const getAllQuotes = (req: Request, res: Response): void => {
    const quotes = QuotesModel.getAllQuotes()
    res.json(quotes)
}

// controlador para frase por id  // Saca el id desde la URL -  Le pide al modelo una frase específica - Si no la encuentra, responde con 404 
export const getQuotesById = (req: Request, res: Response): void => {
    const {id} = req.params
    // extraemos el parametro id de la soli
    const quote = QuotesModel.getQuotesById(id)
    // llamamos al metodo del modelo para buscar la frase por id
    if (!quote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(quote)
}


// Recibe el contenido de una nueva frase en el cuerpo (req.body) - La guarda usando QuotesModel.addQuote - Devuelve la nueva frase con código 201 (creado)
export const createQuotes = (req: Request, res: Response): void => {
    const newQuote = QuotesModel.addQuote(req.body)
    // llamemos al metodo del modelo para agregar una nueva frase con los datos de la soli
    res.status(201).json(newQuote)
}


// Usa el ID de la URL - Usa los datos del body para actualizar esa frase -⚠️ ⚠️ OJO: aquí falta responderle al cliente con res.json(...) o un mensaje. Está incompleto. Ya veremos cómo mejorarlo.
/*export const updateQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    // extraemos el parametro id de la soli
    const updateQuotes = QuotesModel.updateQuote(id, req.body)
}
    */

export const updateQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    const updatedQuote = QuotesModel.updateQuote(id, req.body)

    if (!updatedQuote) {
        res.status(404).json({ error: "Frase no encontrada para actualizar" })
        return
    }

    res.status(200).json(updatedQuote)
}


// Borra una frase por su ID - Si no existe, manda error 404 - Si la borra bien, responde con 204 No Content (borrado exitoso sin contenido)
/*export const deleteQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    // extraemos el parametro id de la soli
    const isDeleted = QuotesModel.deleteQuote(id)
    if (!isDeleted) {
        res.status(404).json({error: "Frase no encontrada para ser borrada"})
        return
    }
    res.status(204).send()
}*/


export const deleteQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    const isDeleted = QuotesModel.deleteQuote(id)

    if (!isDeleted) {
        res.status(404).json({error: "Frase no encontrada para ser borrada"})
        return
    }

    res.status(200).json({ message: "Frase eliminada correctamente" })
}

/* ¿Y cómo se conecta?
Cada una de estas funciones es llamada desde el archivo de rutas (quotes-routes.ts) cuando alguien visita un endpoint.*/
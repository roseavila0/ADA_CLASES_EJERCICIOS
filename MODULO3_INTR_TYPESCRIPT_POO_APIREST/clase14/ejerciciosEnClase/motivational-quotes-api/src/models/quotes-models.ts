/*
quotes-models.ts: El modelo que se conecta con los datos reales
Este archivo usa un archivo .json como si fuera una base de datos, y define métodos estáticos para trabajar con las frases motivacionales.
*/

import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, '../database/quotes.json')
// definimos la ruta al archivo json que actua como bd de las frases // Aquí se define la ruta al archivo donde se almacenan las frases (quotes.json).


//ESTRUCTURA DE UNA FRASE --- Cada frase tiene:       id: identificador único     -    text: el contenido de la frase   -  autor: quién la dijo
interface Quote {
    id: string;
    text: string;
    autor: string;
}


//✅ getAllQuotes() -----Devuelve todas las frases del archivo .json:
export class QuotesModel {
    static getAllQuotes(): Quote[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contedion del archivo json y lo convierta a js
        return data.quotes
    } 


// getQuotesById(id) -----    Busca una frase por su id:
    static getQuotesById(id: string): Quote | undefined {
        const data = this.getAllQuotes()
        // obtenda todas las frases
        return data.find((quote) => quote.id === id)
        //busque y devuelva la frase cuyo id coincide con el que le pasamos
    }


// ➕ addQuote(newQuote) ----Agrega una nueva frase:
    static addQuote(newQuote: Quote): Quote {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
         // lee el contedion del archivo json y lo convierta a js
        const newId = (data.quotes.length + 1).toString()
        // genera un nuevo id tomando en cuenta la longitud del array
        const quote = {...newQuote, id: newId}
        // crea un frase nueva agregando el id que generamos

        data.quotes.push(quote)
        // agrego la frase al array
        data.info.total += 1
        // incremento el contador
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        // guardamos lo datos actualizados en el json
        return quote
        // devuelve la frase 
    }

    /*static updateQuote(id: string, updatedData: Partial <Quote>): Quote | null {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
         // lee el contedion del archivo json y lo convierta a js
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
        // encuentra el indice de la frase que coincide con el id
        if (index === -1) return null
        data.quotes[index] = {...data.quotes[index], ...updatedData}
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return data.quotes[index]
    } */

    static updateQuote(id: string, updatedData: Partial<Quote>): Quote | null {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
    if (index === -1) return null

    // Actualizamos la cita existente con los nuevos datos
    data.quotes[index] = { ...data.quotes[index], ...updatedData }

    // Escribimos los datos actualizados al archivo
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    return data.quotes[index]
}

    static deleteQuote(id: string): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierta a js
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
        // encuentra el indice de la frase que coincide con el id
        if (index === -1) return false
        data.quotes.splice(index, 1)
        data.info.total -= 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return true
    }

}
const fs = require ('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'books.json')

const bookModel = {

    getBookById: (id) => {
        const rawBooks = fs.readFileSync(dataPath);
        const books = JSON.parse(rawBooks);
        return books.find(book => book.id === id || null) 
    }
}

//exportamos el objeto "bookModel"
module.exports = bookModel

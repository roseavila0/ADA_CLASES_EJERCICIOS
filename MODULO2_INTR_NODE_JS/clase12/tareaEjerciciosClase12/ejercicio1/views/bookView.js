
const bookView = {
    formatResponse: (book) => {
        if (!book) {
            return JSON.stringify({ //convierte un objeto de JavaScript en una cadena de texto en formato JSON.
                status: "error",
                message: "Libro no encontrado"
            })
        }

        return JSON.stringify ({
            status: "success",
            data: book
        })
    }
}

module.exports = bookView
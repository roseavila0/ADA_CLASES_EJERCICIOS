

const movieView = {
    formatResponse: (movie) =>{
        if(!movie) {
            return JSON.stringify({
                status: "error",
                message: "Hotel no encontrado"
            })
        }

        return JSON.stringify ({
            status: "success",
            data: movie
        })
    }
}

module.exports = movieView 
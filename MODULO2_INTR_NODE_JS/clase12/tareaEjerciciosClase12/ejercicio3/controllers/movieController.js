

const movieModel = require ('../models/movieModel')
const movieView = require ('../views/movieView')

const movieController = {

    handleRequest: (title) => {
        const movie = movieModel.getMovieByTitle(title);
        return movieView.formatResponse(movie)
    }

}

module.exports = movieController
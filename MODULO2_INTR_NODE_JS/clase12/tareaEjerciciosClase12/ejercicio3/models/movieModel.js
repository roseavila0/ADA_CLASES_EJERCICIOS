const fs = require ('fs')
const path  = require ('path');

const dataPath = path.join(__dirname, '../data/movies.json');

const movieModel = {

    getMovieByTitle: (title) => {
        const rawData = fs.readFileSync(dataPath);
        const movies = JSON.parse(rawData);
        return movies.find( movie => movie.title.toUpperCase() === title.toUpperCase()) || null;

    }
}

module.exports = movieModel
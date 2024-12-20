//Encuentra la película más corta y analiza los títulos largos
//Supón que tienes una lista de películas con su duración en minutos:
//const movies = [
// { title: 'El Señor de los Anillos', duration: 200 },
// { title: 'Inception', duration: 148 },
// { title: 'Matrix', duration: 136 },
// { title: 'Toy Story', duration: 81 },
// { title: 'Coco', duration: 105 }
//];
// Queremos:
//o Encontrar la película más corta en duración.
//o De las películas restantes, quedarnos con aquellas cuyo título tenga
//más de 10 caracteres.
//o Crear una lista de los títulos largos en minúsculas.
//o Imprime en la consola:
//o El título de la película más corta.
//o La lista de títulos largos en minúsculas.



const moviesList = [
 { title: 'El Señor de los Anillos', duration: 200 },
 { title: 'Inception', duration: 148 },
 { title: 'Matrix', duration: 136 },
 { title: 'Toy Story', duration: 81 },
 { title: 'Coco', duration: 105 }
];

let shortDuration = moviesList.reduce(function(acc, movies){  //acumulador = accumulator
    return movies.duration < acc.duration ? movies : acc; 
}, moviesList[0]);

let longTitle = moviesList.filter(function(movies){
    return movies.title.length > 10;
});

let lowerCaselongTitle =  longTitle.map (function(movies){
    return movies.title.toLowerCase();
})

console.log('El título de la película más corta es: ' + shortDuration.title);
console.log('La lista de películas de títulos largos en minúsculas es: ' + lowerCaselongTitle.join(', '));





//OTRA FORMA DE RESOLVER  ------------------------------------------------------------------------------------------------------
//RESOLUCIÓN DE LA PROFE 

/*
const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

// Paso 1: Encontrar la película más corta.
const shortestMovie = movies.reduce((shortest, movie) =>
    movie.duration < shortest.duration ? movie : shortest, movies[0]);

// Paso 2: Filtrar las películas con títulos de más de 10 caracteres.
const longTitleMovies = movies.filter(movie => movie.title.length > 10 && movie !== shortestMovie);

// Paso 3: Transformar los títulos largos a minúsculas.
const longTitlesLowercase = longTitleMovies.map(movie => movie.title.toLowerCase());

console.log(`La película más corta es: ${shortestMovie.title}`);
console.log(`Títulos largos en minúsculas: ${longTitlesLowercase}`);
// Resultado:
// La película más corta es: Toy Story
// Títulos largos en minúsculas: ['el señor de los anillos']
*/

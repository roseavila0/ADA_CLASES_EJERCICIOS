/*
Ejercicio 3: Crear un Servicio de Búsqueda de Películas

Descripción:

1. Crea un archivo searchMovie.js.
2. Escribe una función que reciba el título de una película como parámetro,
realice una solicitud a la API de OMDb y devuelva el título y el año de
lanzamiento de la primera película que coincida con la búsqueda.
(Requiere clave de API gratuita).
3. Llama a esta función pasando un título, y muestra el resultado en la
consola.

Pistas:

• Usa fetch("https://www.omdbapi.com/?s=" + titulo +
"&apikey=TU_API_KEY") para realizar la solicitud.

• La respuesta contiene una lista de películas en Search; accede a la primera
película con Search[0]. 
*/


//API_KEY: Tu clave de acceso (tienes que sacarla de https://www.omdbapi.com/apikey.aspx).
const API_KEY = "c37b5ba2"; // reemplaza esto con tu API real


function buscarPelicula(title) {
//fetch(...): Llama a la API con el título que elijas.
fetch('https://www.omdbapi.com/?s=' + title + '&apikey=' + API_KEY)
  .then(response => {
    console.log("Respuesta recibida: ", response.status);
    return response.json();
    //.then(response => response.json()): Convierte la respuesta en un objeto JSON.
  })
  .then(data => {
    if (data.Response === "True") {
      const firstMovie = data.Search[0]; // toma la primera película encontrada
      const movieName = firstMovie.Title;
      const movieYear = firstMovie.Year; 
      console.log("Movie:", movieName, "Year:", movieYear);  //Title y Year: Son los campos del JSON que te interesan.
    } else {
      console.log("No se encontraron películas.");
    }
  })


  .catch(error => {
    console.error('Error al obtener los datos:', error);   //Captura errores como problemas de conexión o de clave.
  });
}

buscarPelicula("shrek");
buscarPelicula("titanic");
buscarPelicula("el señor de los anillos");

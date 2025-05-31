/*
Ejercicio 4: Obtener Información de un País por Nombre

1. Crea un archivo getCountry.js.
2. Escribe una función que reciba el nombre de un país como parámetro,
realice una solicitud a la API de REST Countries, y devuelva el nombre,
capital y región del país.
3. Muestra estos datos en la consola.
Pistas:

• La URL para buscar un país es
https://restcountries.com/v3.1/name/{name}.
• La respuesta contiene un arreglo; accede al primer objeto con [0] para
extraer la información. 
*/

function obtenerPais(nombrePais) {
  // Se usa template literal para insertar dinámicamente el nombre del país en la URL
  fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
    .then(response => {
      console.log("Respuesta recibida:", response.status);
      if (!response.ok) {
        throw new Error("País no encontrado");
      }
      return response.json();
    })
    .then(data => {
      // La API devuelve un array, accedemos al primer país con [0]
      const pais = data[0];
      const nombre = pais.name.common;
      const capital = pais.capital[0]; // capital es un array
      const region = pais.region;

      console.log(`País: ${nombre}`);
      console.log(`Capital: ${capital}`);
      console.log(`Región: ${region}`);
    })
    .catch(error => {
      console.error("Error al obtener los datos:", error.message);
    });
}

// Llamada de prueba
obtenerPais("Ecuador");
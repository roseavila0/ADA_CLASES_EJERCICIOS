/*
Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus
Propiedades
Objetivo: Convertir una cadena JSON a un objeto y acceder a sus
propiedades.
Instrucciones:
• Crea un archivo llamado exercise3.js.
• Define una cadena JSON que represente a un libro (incluye
campos como title, author, y year).
• Convierte la cadena JSON a un objeto y muestra cada
propiedad en la consola.
*/

const stringJsonBook = '{"title": "El quijote de la mancha", "author": "Miguel de Cervantes", "year": 1605}'; //PARA QUE SEA UNA CADEMA JSON HAY QUE PONERLA ENTRE COMILLAS

const objectBook = JSON.parse(stringJsonBook);
console.log(`BOOK
            Title: ${objectBook.title}
            Author: ${objectBook.author}
            Year: ${objectBook.year}`)
    

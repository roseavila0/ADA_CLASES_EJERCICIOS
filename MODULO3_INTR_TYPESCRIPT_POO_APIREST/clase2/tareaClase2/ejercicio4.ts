/* Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola.*/

function crearLibro(titulo: string, autor: string, paginas: number) {
    return { titulo, autor, paginas };
}

// Crear dos libros
let libro1 = crearLibro("1984", "George Orwell", 328);
let libro2 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 471);

// Mostrar los detalles en consola
console.log(`Libro 1: ${libro1.titulo}, Autor: ${libro1.autor}, Páginas: ${libro1.paginas}`);
console.log(`Libro 2: ${libro2.titulo}, Autor: ${libro2.autor}, Páginas: ${libro2.paginas}`);
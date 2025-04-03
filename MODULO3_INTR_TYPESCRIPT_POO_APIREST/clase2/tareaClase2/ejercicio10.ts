/* Ejercicio 10: Funciones y arrays de objetos
Consigna: Crea una función llamada listarLibros que acepte un array de objetos
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
función debe recorrer el array y mostrar los detalles de cada libro en la consola. */

function listarLibros(libros: { titulo: string, autor: string }[]): void {
    // Recorrer el array de libros
    for (let libro of libros) {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    }
}

// Array de objetos libro
let libros = [
    { titulo: "La nieta del señor Lihn", autor: "Guillaume Musso" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" }
];

// Llamar a la función para listar los libros
listarLibros(libros); 
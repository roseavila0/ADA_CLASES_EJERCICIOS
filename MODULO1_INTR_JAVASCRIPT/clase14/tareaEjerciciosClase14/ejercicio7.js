//Ejercicio 7: Libros
//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
//✓título: una cadena con el título del libro.
//✓autor: una cadena con el nombre del autor del libro.
//✓anioPublicacion: un número con el año de publicación del libro.
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
//como parámetro y muestre por consola la información de cada libro en el formato especificado.


let libro1={
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Safón',
    anioPublicación: 2021
};


let libro2={
    titulo: 'Rebelión en la granja',
    autor: 'George Orwell',
    anioPublicación: 1945
}; 

function mostrarLibro (libros){
    console.log('Los libros ingresados son: ');
   for (let i=0 ; i < libros.length; i++) {
    console.log (`${libros[i].titulo}, ${libros[i].autor}, ${libros[i].anioPublicación}`);
 }
}

mostrarLibro([libro1, libro2]);



//OTRA FORMA DE REALIZAR - EJEMPLO DE LA PROFE BERNI 
/*
let libro1 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
};

let libro2 = {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    anioPublicacion: 2007
};


function mostrarLibro(libros) {
    console.log('Los libros ingresados son: ');
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i]; // tambien se puede hacer "for (let libro of libros) { console.log()}""
        console.log(`El libro ${libro.titulo}, escrito por ${libro.autor}, se publicó en ${libro.anioPublicacion}.`);
    }
}

let biblioteca = [libro1, libro2]; // arreglo

mostrarLibro(biblioteca);
 */



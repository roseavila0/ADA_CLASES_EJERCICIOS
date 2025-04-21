/*
Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.

*/

class Libro {
    //propiedades
    public nombre: string;
    public autor: string;
    private anio: number;


    //constructor 
    constructor(nombre: string, autor:string, anio:number) {
        this.nombre = nombre;
        this.autor = autor;
        this.anio = anio
    }
}


//Creamos la instancia de la clase libro
const Libro1 = new Libro ("Rebelión en la granja", "George Orwell", 1945)

//llamamos al metodo obtenerInfoLibro
console.log(Libro1);



//-------------------------------------------------------------------------
// VERSION SOLUCION DE LA PROFE
/*
// Definir el objeto Libro
export const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    añoPublicacion: 1943
  };
  
  // Mostrar las propiedades del libro
  console.log(libro);
  
  */

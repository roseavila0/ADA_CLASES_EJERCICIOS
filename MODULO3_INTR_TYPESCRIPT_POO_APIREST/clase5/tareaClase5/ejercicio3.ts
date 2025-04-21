/*
Ejercicio 3: Métodos en Objetos

1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.

*/

export class Libro {
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

    //metodo para obtener info del libro
    public obtenerInfoLibro(): void {
        console.log(`Nombre: ${this.nombre}, Autor: ${this.autor}, Anio: ${this.anio}`);
    }

}


//Creamos la instancia de la clase libro
const Libro1 = new Libro ("Rebelión en la granja", "George Orwell", 1945)

//llamamos al metodo obtenerInfoLibro
Libro1.obtenerInfoLibro();
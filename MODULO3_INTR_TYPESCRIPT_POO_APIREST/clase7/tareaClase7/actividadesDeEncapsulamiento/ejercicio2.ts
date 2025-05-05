/*
2. Ejercicio de Libro
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible.
Implementa métodos para prestar y devolver el libro, asegurando que solo se
pueda prestar si está disponible y que se pueda devolver solo si ha sido
prestado. Imprime un mensaje en caso de que se intente realizar una acción no
válida.
*/

export class Libro{
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;


    constructor(_titulo: string, _autor: string, _anioPublicacion: number, _disponible: boolean){
    this._titulo= _titulo;
    this._autor= _autor;
    this._anioPublicacion= _anioPublicacion;
    this._disponible= _disponible;
}



public prestar(): void {
    if (this._disponible) {
        this._disponible = false;   // disponible era true → se presta → disponible ahora es false
        console.log(`Has prestado el libro "${this._titulo}".`);
    } else {
        console.log(`El libro "${this._titulo}" no está disponible para préstamo.`);
    }
}

public devolver(): void {
    if (!this._disponible) {
        this._disponible = true;
        console.log(`Has devuelto el libro "${this._titulo}".`);
    } else {
        console.log(`El libro "${this._titulo}" no ha sido prestado.`);
    }
}

    public get disponible(): boolean{
        return this._disponible;
    }
}


// --- Uso del libro ---
export const libro = new Libro('1984', 'George Orwell', 1949, true);

// Ver estado inicial
console.log(`¿Está disponible? ${libro.disponible}`);

// Intentar prestar
libro.prestar();
console.log(`¿Está disponible? ${libro.disponible}`);

console.log("----------------------------------------------------------------------------------------");

// Intentar devolver
libro.devolver();
console.log(`¿Está disponible? ${libro.disponible}`);

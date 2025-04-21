/*
Ejercicio 5: Interfaz

1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse().
*/

// 1. Interfaz
export interface IPersona {
    nombre: string;
    edad: number;
    mensajePresentación(): string   
}


// 2. Clase que implementa la interfaz
export class Persona implements IPersona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mensajePresentación(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Crear instancia
const persona1 = new Persona("Rose", 30);
console.log(persona1.mensajePresentación());


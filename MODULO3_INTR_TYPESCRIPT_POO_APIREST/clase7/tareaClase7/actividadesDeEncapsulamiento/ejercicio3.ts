/*
3. Ejercicio de Estudiante
Diseña una clase Estudiante que contenga propiedades privadas para nombre,
edad, y calificaciones. Implementa métodos para agregar calificaciones y
calcular el promedio. Imprime un mensaje en caso de que se intente agregar
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para
calcular el promedio.
*/


class Estudiante {
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number[];

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = []; // comienza como una lista vacía
    }

    public agregarCalificacion(calificacion: number): void {
        if (calificacion < 0 || calificacion > 100) {
            console.log("Calificación inválida (fuera del rango 0-100).");
        } else {
            this._calificaciones.push(calificacion);
            console.log("La calificación ha sido agregada.");
        }
    }

    public calcularPromedio(): number | void {
        if (this._calificaciones.length === 0) {
            console.log("No hay calificaciones registradas para calcular promedio.");
            return;
        }

        const suma = this._calificaciones.reduce((a, b) => a + b, 0);
        const promedio = suma / this._calificaciones.length;
        console.log(`El promedio general es: ${promedio.toFixed(2)}`);
        return promedio;
    }
}

const alumno = new Estudiante("Rose", 30);
alumno.agregarCalificacion(76);
alumno.agregarCalificacion(80);
alumno.agregarCalificacion(-8); // inválida
alumno.calcularPromedio(); // debería mostrar promedio de 95 y 80

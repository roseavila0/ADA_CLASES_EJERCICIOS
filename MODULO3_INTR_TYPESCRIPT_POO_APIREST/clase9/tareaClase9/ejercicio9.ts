/*
Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
Crea un sistema que represente el juego Pac-Man utilizando clases. Define una
clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa
métodos para moverse por el mapa y realizar acciones. Define una interfaz
EntidadMovible que contenga el método moverse. Usa herencia para que PacMan y los fantasmas compartan el comportamiento de moverse y polimorfismo
para que cada personaje pueda implementar su propio comportamiento de
movimiento.
*/

// Interfaz que obliga a tener el método moverse
interface EntidadMovible {
  moverse(): void;
}

// Clase base que puede contener atributos comunes (posición, nombre, etc.)
class Personaje {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

// PacMan hereda de Personaje e implementa la interfaz EntidadMovible
class PacMan extends Personaje implements EntidadMovible {
  moverse(): void {
    console.log(`${this.nombre} se mueve comiendo puntos.`);
  }
}

// Fantasma también hereda de Personaje e implementa su propia forma de moverse
class Fantasma extends Personaje implements EntidadMovible {
  moverse(): void {
    console.log(`${this.nombre} se mueve intentando atrapar a Pac-Man.`);
  }
}

// Pruebas
const pacman = new PacMan("Pac-Man");
const fantasmaRojo = new Fantasma("Blinky");

pacman.moverse();       // "Pac-Man se mueve comiendo puntos."
fantasmaRojo.moverse(); // "Blinky se mueve intentando atrapar a Pac-Man."
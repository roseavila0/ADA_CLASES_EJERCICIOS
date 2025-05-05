/*
Este ejercicio trata sobre polimorfismo por sobrecarga, también conocido como polimorfismo en tiempo de compilación.

Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
Implementa una clase Calculadora que tenga un método sumar. El método debe
estar sobrecargado para permitir la suma de:
• Dos números enteros.
• Tres números enteros.
• Dos cadenas, concatenando las dos cadenas.
*/

class Calculadora {
    // 👉 Estas son las "firmas" del método sumar (las formas en que puede llamarse)
    sumar(a: number, b: number): number;
    sumar(a: number, b: number, c: number): number;
    sumar(a: string, b: string): string;
  
    // 👉 Esta es la implementación real del método
    sumar(a: any, b: any, c?: any): any {
      if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        // caso: tres números
        return a + b + c;
      } else if (typeof a === "number" && typeof b === "number") {
        // caso: dos números
        return a + b;
      } else if (typeof a === "string" && typeof b === "string") {
        // caso: dos strings
        return a + b;
      } else {
        throw new Error("Argumentos no válidos");
      }
    }
  }

  const calc = new Calculadora();

console.log(calc.sumar(2, 3));          // ➡️ 5
console.log(calc.sumar(1, 2, 3));       // ➡️ 6
console.log(calc.sumar("Hola, ", "Neo")); // ➡️ "Hola, Neo"

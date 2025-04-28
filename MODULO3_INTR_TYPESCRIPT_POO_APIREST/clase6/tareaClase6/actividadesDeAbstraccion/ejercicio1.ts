/*
Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
para que ambas bebidas oculten su lógica de preparación interna pero
expongan un comportamiento común.
*/

// Crea una interfaz Bebida 
interface Bebida {
    preparar(): void;
}


// Clase Cafe que implementa Bebida
 class Cafe implements Bebida {
    preparar(): void {
        console.log(`Preparación de café: pasar el café, vertir agua caliente, mezclar.`)
    }

}

  
// Clase Te que implementa Bebida
class Te implements Bebida{
    preparar(): void {
        console.log(`Preparación de te: usar 1 o 2 bolsitas de te, dejar disolver en agua tivia.`)
    }
}

//Usando las clases sin preocuparnos por su lógica interna
const cafe = new Cafe();
const te = new Te();

cafe.preparar();
te.preparar(); 

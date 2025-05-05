/*
Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para
proporcionar una implementación específica de cómo arrancar.
*/

class Vehiculos{
    arrancar():void{
        console.log("El vehículo esta listo para arrancar.")
    }
}

export class Coche extends Vehiculos{
    arrancar():void{
        console.log(`El coche calienta el motor y esta listo para arrancar.`)
    }
    }



class Moto extends Vehiculos{
    arrancar():void{
        console.log(`La moto arranca con un rugido ligero.`)
    }
    }



// Función que recibe cualquier tipo de vehículo
function iniciarVehiculo(Vehiculo: Vehiculos){
    Vehiculo.arrancar(); // Aquí es donde ocurre el polimorfismo en tiempo de ejecución
}

// Pruebas
const miCoche = new Coche();
const miMoto = new Moto();
const generico = new Vehiculos();

iniciarVehiculo(miCoche);   // ➡️ "El coche ruge y arranca con fuerza."
iniciarVehiculo(miMoto);    // ➡️ "La moto arranca con un rugido ligero."
iniciarVehiculo(generico);  // ➡️ "El vehículo está listo para arrancar."
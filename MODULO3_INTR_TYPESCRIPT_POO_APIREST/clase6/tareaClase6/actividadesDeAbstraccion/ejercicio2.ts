/*
Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades.

*/

abstract class Vehiculo {
    constructor(protected velocidad: number){}

    abstract mover():void; 
}

class Auto extends Vehiculo{
    constructor(velocidad: number){
        super(velocidad)
    }

    public mover(): void{
    console.log(`La velocidad a la que se mueve el auto es ${this.velocidad}`)
    }

}

class Bicicleta extends Vehiculo{
    constructor(velocidad: number){
        super(velocidad)
    }

    public mover(): void{
    console.log(`La velocidad a la que se mueve la bicicleta es ${this.velocidad}`)
    }
}

const auto1 = new Auto(180);
auto1.mover();

const b= new Bicicleta(30);
bicicleta1.mover();






/*
Ejercicio 4: Abstracción con Clases Abstractas
Implementa una clase abstracta DispositivoElectronico con métodos abstractos
encender y apagar. Crea dos clases concretas Televisor y Radio, que
sobrescriban estos métodos.
*/

abstract class DispositivoElectronico {

    abstract encender():void;
    abstract apagar():void;

}

class Televisor extends DispositivoElectronico{
    encender():void{
        console.log("El televisor esta encendido.")
    }

    apagar():void{
        console.log("El televisor esta apagado.")
    }

}

class Radio extends DispositivoElectronico{
    encender():void{
        console.log("La radio esta encendida.")
    }

    apagar():void{
        console.log("La radio esta apagada.")
    }
}

const miTelevision = new Televisor();
const miRadio = new Radio();

miTelevision.encender();
miTelevision.apagar();
miRadio.encender();
miRadio.apagar();



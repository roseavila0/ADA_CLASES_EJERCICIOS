/*
Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
Consigna: Crea dos interfaces: Volador con el método volar() y Transportable
con el método transportar(). Luego crea una clase Avion que implemente ambas
interfaces y sobrescriba los métodos.
*/

interface Volador {
    volar(): void;
}

interface Transportable{
    transportar(): void;

}

// En esta Clase podemos implementar múltiples interfaces 
class Avion implements Volador, Transportable {
    volar():void {
        console.log(`El avion vuela muy alto.`);
    }

    transportar():void {
        console.log(`El avion transporta muchos pasajeros.`);
    }
}


const elAvion = new Avion();
elAvion.volar();
elAvion.transportar();
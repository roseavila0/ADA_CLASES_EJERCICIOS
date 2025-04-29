/*
Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
Diseña un sistema de transporte público. Define:
• Una interfaz VehiculoElectrico con el método cargarBateria().
• Una clase abstracta Transporte con el método abstracto mover().
Implementa ambas estructuras en una clase concreta AutobusElectrico.
*/

interface VehiculoElectrico {

    cargarBateria():void;
}


// Clase abstracta con método abstracto
abstract class Transporte{
    abstract mover():void; 
}



// Clase concreta que extiende la abstracta y también implementa la interfaz
class AutobusElectrico  extends Transporte implements VehiculoElectrico{

    cargarBateria(): void {
        console.log(`Cargando batería del autobus eléctrico`);
    }

    mover():void{
        console.log(`El autobús eléctrico se esta moviendo`);
    }
}

const busElectrico =  new AutobusElectrico();
busElectrico.cargarBateria();
busElectrico.mover();






/*
Ejercicio 1: Herencia Simple
Consigna: Define una clase base Torta que tenga propiedades generales como
nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
general de la torta. Luego, crea una clase derivada TortaDeChocolate que
extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
"Soy una torta de chocolate, deliciosa y suave."

*/

class Torta{
    nombre: string;
    tipo: string;                   

    constructor(nombre: string, tipo:string){
        this.nombre = nombre;                              //iniciliza el nombre de la torta puede ser "Señora Selva"
        this.tipo = tipo; 
    }

    hacerDescripcion(): void {                                //método que describe la torta
        console.log(`La torta más pedida se llama: ${this.nombre}, de tipo ${this.tipo}.`);
    }
}

class TortaDeChocolate extends Torta {                        //clase derivada, la clase tortadechocolate hereda de torta usando extends
   constructor(nombre:string, tipo:string){
    super(nombre,tipo)
   }
   
   
    hacerDescripcion(): void {                                 //sobreescritura del metodo hacerdescripcion
        console.log(`Hola, soy una torta de chocolate, deliciosa y suave.`) //añadimos un msj especifico para tortadechocolate
    }
}

//creamos una instancia de tortadechocolate
const tortaCumpleaños = new TortaDeChocolate ("Señora Selva", "chocolate");

//usamos el metodo sobreescrito
tortaCumpleaños.hacerDescripcion();




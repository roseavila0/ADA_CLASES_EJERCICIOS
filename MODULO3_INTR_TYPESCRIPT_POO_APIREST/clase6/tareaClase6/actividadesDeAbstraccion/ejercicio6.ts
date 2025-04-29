/*
Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases
Crea un sistema de inventario que gestione diferentes tipos de productos.
Define una clase abstracta Producto con:
• Propiedades protegidas: nombre, precio.
• Un método abstracto calcularDescuento().
Implementa dos subclases: Ropa y Electronica.
• La subclase Ropa aplicará un 10% de descuento.
• La subclase Electronica tendrá un 5% de descuento.
Añade un método concreto en la clase abstracta para mostrar la información del
producto.
*/

abstract class Producto {
    constructor(protected nombre:string, protected precio:number) {};

    abstract calcularDescuento():number;

    infoProducto():void{
        console.log(`El producto ${this.nombre} cuesta $${this.precio.toFixed(2)}.`);
    }
}

//La subclase Ropa aplicará un 10% de descuento.
class Ropa extends Producto {
    
    calcularDescuento(): number{
        const precioConDescuento = this.precio  - (this.precio * 10 / 100 )
        console.log(`Este producto tiene un 10% de Dscto, su precio final es $${precioConDescuento.toFixed(2)}`)
        return precioConDescuento;
    }
    
}


// La subclase Electronica tendrá un 5% de descuento.
class Electronica extends Producto{

    calcularDescuento(): number{
        const precioConDescuento = this.precio  - (this.precio * 5 / 100 )
        console.log(`Este producto tiene un 5% de Dscto, su precio final es $${precioConDescuento.toFixed(2)}`)
        return precioConDescuento;
    }
}

const blusa = new Ropa ("Blusa blanca, lino.", 15)
blusa.infoProducto();
blusa.calcularDescuento();

console.log("-------------------------------------------------------------------------------------")
const DiscoDuro = new Electronica ("Disco duro 1TB", 92)
DiscoDuro.infoProducto();
DiscoDuro.calcularDescuento();


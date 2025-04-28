/*
Ejercicio 4: Comparación - Clases Abstractas vs Interfaces

Crea una interfaz PagoOnline con un método procesarPago().
Crea una clase abstracta Pago con un método concreto validarMonto() y un
método abstracto completarPago().
Implementa ambas estructuras en una clase concreta PagoConTarjeta.
*/
// Interfaz PagoOnline con un método procesarPago().
interface PagoOnline {
    procesarPago(): void;
}

// Clase abstracta Pago
abstract class Pago {
    monto: number;

    constructor(monto: number) {
        this.monto = monto;
    }

    // Método concreto para validar el monto
    //validarMonto(): boolean {
    //    console.log(`Validando su monto: ${this.monto}`);
    //    return true;  // Devuelve true por defecto, pero puedes modificarlo si es necesario
   // }


   // Modificamos validarMonto para comprobar si el monto es mayor que cero
   validarMonto(): boolean {
    if (this.monto > 0) {
        console.log(`El monto de ${this.monto} es válido.`);
        return true;
    } else {
        console.log(`El monto de ${this.monto} no es válido.`);
        return false;
    }
}

    // Método abstracto para completar el pago, que debe implementarse en la clase hija
    abstract completarPago(): void;
}

// Clase concreta PagoConTarjeta que implementa la interfaz PagoOnline y extiende de Pago
class PagoConTarjeta extends Pago implements PagoOnline {
    constructor(monto: number) {
        super(monto);  // Llama al constructor de la clase base (Pago)
    }

    // Implementación del método de la interfaz PagoOnline
    procesarPago(): void {
        console.log("Su pago está siendo procesado con tarjeta.");
    }

    // Implementación del método abstracto completarPago() de la clase Pago
    completarPago(): void {
        console.log("Gracias por su compra. El pago con tarjeta fue completado.");
    }
}

// Instanciamos un nuevo objeto de PagoConTarjeta y ejecutamos sus métodos
const nuevaCompra = new PagoConTarjeta(15000);
nuevaCompra.procesarPago();  
nuevaCompra.validarMonto(); 
nuevaCompra.completarPago();  

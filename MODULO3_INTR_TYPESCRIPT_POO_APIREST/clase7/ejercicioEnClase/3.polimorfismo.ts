
//clase base
export abstract class Pago {
    abstract procesarPago(monto: number): void;
}

//Clase derivada que va a tener un comportaiento específico
class PagoConTarjeta extends Pago{
    procesarPago(monto: number): void{
        console.log(`Pago de $ ${monto} procesado con tarjeta de crédito`);
    }
}

class PagoEnEfectivo extends Pago{
    procesarPago(monto: number): void{
        console.log(`Pago de $ ${monto} procesado en efectivo.`);
    }
}

class PagoPorTransferencia extends Pago{
    procesarPago(monto: number): void{
        console.log(`Pago de $ ${monto} procesado por transferencia.`);
    }
}

//uso del polimorfismo
const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto)
}

const formaDePago1 = new PagoConTarjeta();
const formaDePago2 = new PagoEnEfectivo();
const formaDePago3 = new PagoPorTransferencia();

procesar(formaDePago1, 100)
procesar(formaDePago2, 50)
procesar(formaDePago3, 300)
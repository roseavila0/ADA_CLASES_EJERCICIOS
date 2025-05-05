/*
Ejercicio 3: Encapsulamiento con Métodos Privados
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser
modificado a través de un método depositar y otro retirar, los cuales deben
validar que la cantidad no sea negativa. Implementa métodos públicos para
consultar el saldo.
*/

class Banco{
    private _saldo!: number;

    constructor(saldoInicial: number){
        this._saldo = saldoInicial;
    }

    public depositar(monto:number):void {
        if (monto < 0){
            console.log("El valor a depositar es negativo, no se puede realizar el depósito.")
        }else{
            this._saldo += monto;
            console.log(`El depósito se realizó con exito. Saldo actual $ ${this._saldo}`)
        }
    }


    public retirar(monto: number):void {
        if (monto < 0){
            console.log("No puede retirar un monto negativo.")
        }else if (monto > this._saldo) {
            console.log("Saldo insuficiente. No se puede realizar el retiro.")
        }else {
            this._saldo -= monto;
            console.log(`Retiro realizado con éxito. Saldo actual: $ ${this._saldo}`);
        }
    }


public consultarSaldo(): number{
    return this._saldo;
}
}

const miCuenta = new Banco(1000);

miCuenta.depositar(500);       // Aumenta el saldo
miCuenta.retirar(200);         // Disminuye el saldo
console.log(miCuenta.consultarSaldo()); // Muestra el saldo actual

miCuenta.depositar(-50);       // Mensaje de error
miCuenta.retirar(2000);        // Mensaje de saldo insuficiente
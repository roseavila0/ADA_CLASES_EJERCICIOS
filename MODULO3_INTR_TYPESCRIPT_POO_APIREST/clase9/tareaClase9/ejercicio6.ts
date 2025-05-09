/*
Ejercicio 6: Encapsulamiento en clases
Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
método público para consultar el saldo y otro para depositar dinero. 
*/


export class CuentaBancaria {
    private _saldo: number;

    constructor(saldo: number) {
        this._saldo = saldo;
    }

    // Método para consultar el saldo
    public consultaSaldo(): void {
        if (this._saldo < 0) {
            console.log("Saldo insuficiente.");
        } else {
            console.log(`El saldo de su cuenta es $${this._saldo}.`);
        }
    }

    // Método para depositar dinero
    public depositarDinero(monto: number): void {
        if (monto <= 0) {
            console.log("El monto debe ser mayor que cero.");
            return;
        }
        this._saldo += monto;
        console.log(`Depósito exitoso. Su saldo actual es: $${this._saldo}.`);
    }
}

// Ejemplo de uso
const cuenta1 = new CuentaBancaria(1500);
cuenta1.consultaSaldo();
cuenta1.depositarDinero(500);
cuenta1.consultaSaldo();
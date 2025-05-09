/*
5. Banco: Transferencias Programadas

Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta
debe tener un nombre del propietario, un saldo y un estado (activo o inactivo).
Implementa las siguientes funciones:
• Añadir una cuenta.
• Realizar una transferencia entre cuentas después de un retraso de 8
segundos utilizando setTimeout().
• Mostrar todas las cuentas.
*/

type CuentasBancarias =[string, number, boolean]

let cuentas:  CuentasBancarias[] = [];

//agregar cuenta
function agregarCuenta(nombrePropietario: string, saldo:number, estado:boolean){
    const nuevaCuenta: CuentasBancarias= [nombrePropietario, saldo, estado]
    cuentas.push(nuevaCuenta);
    console.log(`Cuenta del cliente ${nombrePropietario} agregada con éxito. `)
}

//Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando setTimeout().
function realizarTransferencia(origen: string, destino: string, monto: number) {
    console.log(`Procesando transferencia de $${monto} de ${origen} a ${destino}...`);
    setTimeout(() => {
        const cuentaOrigen = cuentas.find(c => c[0] === origen && c[2]);
        const cuentaDestino = cuentas.find(c => c[0] === destino && c[2]);

        if (!cuentaOrigen) {
            console.log(`Error: cuenta origen "${origen}" no encontrada o inactiva.`);
            return;
        }

        if (!cuentaDestino) {
            console.log(`Error: cuenta destino "${destino}" no encontrada o inactiva.`);
            return;
        }

        if (cuentaOrigen[1] < monto) {
            console.log(`Error: saldo insuficiente en la cuenta de ${origen}.`);
            return;
        }

        cuentaOrigen[1] -= monto;
        cuentaDestino[1] += monto;

        console.log("------------------------------------------------------------------------------------------")
        console.log(`Transferencia de $${monto} realizada con éxito de ${origen} a ${destino}.`);
    }, 8000);
}


// Mostrar todas las cuentas
function mostrarCuentas() {
    if (cuentas.length === 0) {
        console.log("No se ha encontrado cuentas registradas.");
    } else {
        console.log("------------------------------------------------------------------------------------------")
        console.log("CUENTAS REGISTRADAS:")
        console.log("------------------------------------------------------------------------------------------")
        cuentas.forEach(([nombrePropietario, saldo, estado]) => {
            const estadoTexto = estado ? "Activa" : "Inactiva";
            console.log(`Propietario: ${nombrePropietario}, Saldo: $${saldo}, Estado: ${estadoTexto}`);
        });
    }
}

// Pruebas


agregarCuenta("Mariana López", 1500, true);
agregarCuenta("Carlos Pérez", 800, true);
agregarCuenta("Ana Torres", 1000, false); // cuenta inactiva

mostrarCuentas();
realizarTransferencia("Mariana López", "Carlos Pérez", 300);
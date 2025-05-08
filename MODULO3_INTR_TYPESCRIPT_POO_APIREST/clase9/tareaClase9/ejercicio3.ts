/*
3. Compañía de Seguros: Renovación Automática de Pólizas

Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
una fecha de renovación. Implementa las siguientes funciones:
• Añadir una póliza.
• Programar la renovación de la póliza utilizando setTimeout().
• Mostrar todas las pólizas activas.
*/

// Definimos la tupla para la póliza
type Poliza= [number, string, number, Date]


// Creamos una lista de pólizas
let polizas: Poliza[]= [];


//• Añadir una póliza.
function agregarPoliza(id: number, nombreCliente: string, montoAsegurado: number, fechaDeRenovacion: Date){
    const nuevaPoliza: Poliza = [id, nombreCliente, montoAsegurado, fechaDeRenovacion] // Aquí es donde se forma la tupla con los datos dados.
    polizas.push(nuevaPoliza); // Se agrega la nueva tupla al array polizas.
    console.log(`Póliza agregada para el cliente ${nombreCliente}`);
}

// Funcion para Programar la renovación de la póliza utilizando setTimeout().

function programarRenovacionPoliza(indice: number) {
    if (!polizas[indice]) {
        console.log("No existe una póliza en esa posición.");
        return;
    }

    const nombreCliente = polizas[indice][1];
    console.log(`⏳ Programando renovación de la póliza de ${nombreCliente}. Espere 5 segundos...`);

    setTimeout(() => {
        const fechaActualizada = new Date(polizas[indice][3]);
        fechaActualizada.setFullYear(fechaActualizada.getFullYear() + 1); // +1 año
        polizas[indice][3] = fechaActualizada;

        console.log(`🔄 La póliza de ${nombreCliente} fue renovada. Nueva fecha: ${fechaActualizada.toDateString()}`);
    }, 5000); // Renovación después de 5 segundos
}



//• Mostrar todas las pólizas activas.
function mostrarPolizasActivas(){
    if (polizas.length === 0){
        console.log("No se ha encontrado ninguna poliza activa.")
    } else{
        console.log("Polizas activas registradas: ");
        polizas.forEach(([id, nombreCliente, montoAsegurado, fecha]) => {
              console.log(`• ID: ${id}, Cliente: ${nombreCliente}, Monto: $${montoAsegurado}, Renovación: ${fecha.toLocaleDateString()}`)
        })
}
}





// Agregamos pólizas con fecha de hoy
agregarPoliza(1, "Laura", 10000,  new Date());
agregarPoliza(2, "Lana", 10000,  new Date());
agregarPoliza(3, "Ricardo", 20000,  new Date());
agregarPoliza(4, "Matilda", 50000,  new Date());

programarRenovacionPoliza(0);
mostrarPolizasActivas();

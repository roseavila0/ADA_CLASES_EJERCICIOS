/*
4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
Diseña una función que simule un proceso de pago que tarda 3 segundos en
completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y
lanzar un error. Utiliza try/catch para manejar el error de manera adecuada.
Esta simulación es relevante para entender cómo gestionar errores en procesos
financieros o de pago, en los cuales las validaciones son cruciales.
*/

// Función que simula el proceso de pago y valida el monto
function procesoDePago(monto){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (monto > 1000) { // Si el monto es mayor a $1000, lanzamos un error
                reject("\nError: monto excede el límite");
            } else {
               resolve ("Pago completado.") // Si el monto es válido, completamos el pago
            }
        }, 3000); // Simulamos un retardo de 3 segundos
    })
}


// Función principal para ejecutar el pago y manejar errores
async function ejecutarPago(monto) {
    try{
        const resultado = await procesoDePago(monto); // Intentamos procesar el pago
        console.log(resultado); // Mostramos el mensaje si el pago fue exitoso
    } catch (error){
        console.error("Error en el pago:", error); // Capturamos y mostramos el error si falla

    } 
}

ejecutarPago(1200);  // Cambia el monto para probar el manejo de errores
ejecutarPago(650); 
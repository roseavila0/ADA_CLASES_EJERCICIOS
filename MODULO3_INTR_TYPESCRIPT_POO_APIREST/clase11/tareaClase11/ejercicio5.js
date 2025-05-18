/*
5. Actualización Concurrente de Datos de Usuario y Pedidos
En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos
suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos
funciones asíncronas, una que actualice los datos del usuario y otra que
actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa
Promise.all para ejecutar ambas funciones en paralelo y luego muestra un
mensaje cuando ambas actualizaciones se hayan completado.
*/

async function actualizarDatosCliente() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve ("Datos del cliente actualizados."), 1500)
    })
    
}

async function actualizarPedidos() {
     return new Promise((resolve) =>{
        setTimeout(() => resolve ("Pedidos Actualizados"), 1500)   
    })
}

async function actualizarEcommerce() {
    const resultado = await Promise.all([actualizarDatosCliente(), actualizarPedidos()]);
    console.log("Actualización completada:", resultado);
}

actualizarEcommerce();


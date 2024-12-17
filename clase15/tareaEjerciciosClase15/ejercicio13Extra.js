//Simulador de una cola de atención al cliente
//Simula una cola de atención al cliente donde los clientes llegan y son
//atendidos uno por uno. Tienes una lista inicial de clientes en espera y un
//bucle que los atiende de a uno. Realiza lo siguiente:
//1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo
//por consola.
//2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando
//un mensaje especial.
//3. Al final, muestra cuántos clientes fueron atendidos en total.
//Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

let listaInicialClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contador=0; 

for (let i=0 ; i < listaInicialClientes.length; i++){
    let cliente = listaInicialClientes[i];
     console.log('El cliente ', cliente , 'ha sido atendido.'); {
        if (cliente === "VIP"){
            console.log('El cliente VIP por favor acercarse directo al consultorio principal.');   
        }
        contador ++
     } 
}

console.log('El total de clientes que han sido atendido el día de hoy es: ', contador);


//OTRA FORMA DE RESOLVERLO SIN QUE SE REPITA VIP -----------------------------------------------------------------------------------------------------
 /*let listaInicialClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contador = 0; 

for (let i = 0; i < listaInicialClientes.length; i++) {
    let cliente = listaInicialClientes[i];

    // Si encontramos un cliente VIP, lo atendemos y lo eliminamos de la lista
   
    if (cliente === "VIP") {
        console.log('El cliente VIP por favor acercarse directo al consultorio principal.');
        listaInicialClientes.splice(i, 1); // Eliminar el cliente VIP      //.splice() modifica directamente el array: Elimina elementos- Inserta elementos O reemplaza elementos.
        i--; // Ajustar el índice tras eliminar un elemento
        contador++; // Contar al cliente VIP
        continue; // Pasar a la siguiente iteración
    }

    // Atender al cliente no VIP
    console.log('El cliente', cliente, 'ha sido atendido.');
    contador++;
}

console.log('El total de clientes que han sido atendidos el día de hoy es:', contador); */


//SOLUCIÓN DE LA PROFE BERNI -----------------------------------------------------------------------------------------------------------------------------
/*
let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contador = 0;

// 1. Mientras haya clientes en la cola
while (clientes.length > 0) {
    let clienteActual = clientes.shift(); // Atender al primer cliente en la cola
    contador++;

    // 2. Verificar si el cliente es VIP
    if (clienteActual === "VIP") {
        console.log(`🚨 Atención prioritaria para: ${clienteActual}`);
    } else {
        console.log(`Atendiendo a: ${clienteActual}`);
    }
}

// 3. Mostrar cuántos clientes fueron atendidos
console.log(`Total de clientes atendidos: ${contador}`);

// Resultado esperado:
// "Atendiendo a: Ana"
// "Atendiendo a: Carlos"
// "🚨 Atención prioritaria para: VIP"
// "Atendiendo a: Sofía"
// "Atendiendo a: Juan"
// "Total de clientes atendidos: 5"
*/
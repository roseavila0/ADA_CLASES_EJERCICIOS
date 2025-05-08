/*
1. Mueblería: Actualización de Precios

En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles.
*/

// Definimos la tupla para el mueble
type Mueble = [number, string, number]; // [id, nombre, precio]

// Creamos un inventario
let inventario: Mueble[] = [];

// Función para añadir un nuevo mueble
function agregarMueble(id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble ${nombre} añadido con éxito.`);
}

// Función para mostrar el inventario
function mostrarInventario() {
    console.log("Inventario de la Mueblería:");
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}

// Función para actualizar el precio de un mueble
function actualizarPrecio(id: number, nuevoPrecio: number) {
    setTimeout(() => {
        const mueble = inventario.find(m => m[0] === id);  //busca el primer elemento que cumpla la condición. significa: "de cada mueble m, toma su primer valor (m[0]) y compáralo con el id que recibimos."
        if (mueble) {
            mueble[2] = nuevoPrecio; // Actualizar el precio
            console.log(`El precio del mueble ${mueble[1]} se ha actualizado a $${nuevoPrecio}.`);
        } else {
            console.log("Mueble no encontrado.");
        }
    }, 3000); // Después de 3 segundos
}

// Añadimos algunos muebles
agregarMueble(1, "Sofá", 300);
agregarMueble(2, "Mesa", 150);

// Mostramos el inventario
mostrarInventario();

// Actualizamos el precio del sofá
actualizarPrecio(1, 350);




/*ESTA ES UNA VERSIÓN MAS SIMPLIFICADA

// Usamos objetos en vez de tuplas, más legible para principiantes
type Mueble = {
    id: number;
    nombre: string;
    precio: number;
};

let inventario: Mueble[] = [];

function agregarMueble(id: number, nombre: string, precio: number) {
    inventario.push({ id, nombre, precio });
    console.log(`Mueble "${nombre}" añadido con éxito.`);
}

function mostrarInventario() {
    console.log("Inventario de la Mueblería:");
    inventario.forEach(mueble => {
        console.log(`ID: ${mueble.id}, Nombre: ${mueble.nombre}, Precio: $${mueble.precio}`);
    });
}

function actualizarPrecio(id: number, nuevoPrecio: number) {
    console.log("Actualizando precio... espera 3 segundos");
    setTimeout(() => {
        const mueble = inventario.find(m => m.id === id);
        if (mueble) {
            mueble.precio = nuevoPrecio;
            console.log(`Precio actualizado: ${mueble.nombre} ahora cuesta $${nuevoPrecio}`);
        } else {
            console.log("Mueble no encontrado.");
        }
    }, 3000);
}

// Prueba
agregarMueble(1, "Silla", 100);
agregarMueble(2, "Mesa", 200);

mostrarInventario();

actualizarPrecio(2, 250);

*/

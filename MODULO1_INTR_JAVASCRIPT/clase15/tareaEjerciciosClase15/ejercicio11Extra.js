//Gestión de inventario de una tienda
//Eres encargado de una tienda y tienes un inventario inicial de productos.
///La lista de productos es:
//let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
//Debes realizar las siguientes acciones:
//1. Agregar un nuevo producto "Impresora" al inventario usando el
//método adecuado.
//2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje
//adecuado.
//3. Eliminar el primer producto del inventario.
//4. Mostrar la lista actualizada de productos en una sola cadena,
//separados por comas.

let inventario = ["Laptop", " Teclado", " Mouse", " Monitor"];
inventario.push(" Impresora.");
//console.log(inventario);

let IncluyeTablet = inventario.includes("Tablet");
console.log('¿El inventario incluye la "Tablet"? ' + IncluyeTablet);

let productoEliminado = inventario.shift();
let listaActualizadaInventario = inventario;
console.log('La lista actualizada del inventario es:' + listaActualizadaInventario);


//OTRA FORMA DE RESOLVERLO (EJEMPLO PROFE BERNI)-------------------------------------------------------------------------------------------
/*let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

// 1. Agregar "Impresora" al inventario
inventario.push("Impresora");

// 2. Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
    console.log("La Tablet está en el inventario.");
} else {
    console.log("La Tablet no está en el inventario.");
}

// 3. Eliminar el primer producto del inventario
let productoEliminado = inventario.shift();
console.log("Producto eliminado:", productoEliminado);

// 4. Mostrar el inventario actualizado como una cadena
let inventarioString = inventario.join(", ");
console.log("Inventario actualizado:", inventarioString);

// Resultado esperado:
// "La Tablet no está en el inventario."
// "Producto eliminado: Laptop"
// "Inventario actualizado: Teclado, Mouse, Monitor, Impresora"

*/
//Ejercicio 3: Gestión Compleja de Arrays
//A partir del siguiente array de productos, escriba la función
//‘gestionarProductos’ que realice las siguientes tareas:
//1. Añada un nuevo producto al array.
//2. Elimine el último producto del array.
//3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()”
//https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//5. Devuelva una cadena de nombres de productos separados por comas.


let listaDeProductos = [
    {nombre: 'leche', precio: 0.80}, 
    {nombre: 'Pan', precio: 0.50}, 
    {nombre: 'galletas', precio: 5}, 
    {nombre: 'frijoles', precio: 3}, 
    {nombre: 'aceite', precio: 2}
];

function gestionarProductos (productos) {
// 1. Añadir un nuevo producto al array
let productoNuevo = {nombre: 'aguacate', precio: 1};
productos.push(productoNuevo);
// 2. Eliminar el último producto del array
productos.pop();
// 3. Encontrar el índice de un producto específico (por ejemplo, 'galletas')
const indiceProductos = productos.findIndex(function(productos){
    return productos.nombre === 'galletas';
});
 // 4. Verificar si existe un producto con precio mayor a 50
const precioMayor = productos.some(function(productos) {
       return productos.precio > 50;
});
// 5. Devolver una cadena de nombres de productos separados por comas
const listaFinal = productos.map (function(productos){ 
    return productos.nombre        
});
listaFinal.join(',');

return{ 
      indiceProductos: indiceProductos,
      precioMayor: precioMayor,
      listaFinal: listaFinal
};
};

const resultados = gestionarProductos(listaDeProductos);
console.log(`Resultados de la gestión de productos:
    1. Índice del producto "galletas" : ${resultados.indiceProductos}
    2. ¿Hay algún producto con precio mayor a $50? ${resultados.precioMayor ? 'Si' : 'No'}
    3. La lista final de los productos es : ${resultados.listaFinal}.
`);




//OTRA FORMA DE RESOLVER -------------------------------------------------------------------------------------------------------------
//EJEMPLO PROFE BERNI
/*
let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto al array
    let nuevoProducto = { nombre: "Galletas", precio: 25 };
    productos.push(nuevoProducto);

    // 2. Eliminar el último producto del array
    productos.pop();

    // 3. Encontrar el índice de un producto específico usando forEach
    let productoBuscado = "Chocolates";
    let indiceProductoBuscado = -1;

    productos.forEach((producto, index) => {
        if (producto.nombre === productoBuscado) {
            indiceProductoBuscado = index;
        }
    });

    // 4. Verificar si existe un producto con precio mayor a 50 usando some
    let existeProductoMayor50 = productos.some(producto => producto.precio > 50);

    // 5. Devolver una cadena de nombres de productos separados por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    // Devolver los resultados como un objeto
    return {
        productos,
        indiceProductoBuscado,
        existeProductoMayor50,
        nombresProductos
    };
}

// Llamada a la función y mostrar el resultado
let resultado = gestionarProductos(productos);
console.log("Resultado:", resultado);
*/


//OTRA RESOLUCIÓN  -----------------------------------------------------------------------------------------------------------
/*
let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto al array
    let nuevoProducto = { nombre: "Galletas", precio: 25 };
    productos.push(nuevoProducto);

    // 2. Eliminar el último producto del array
    productos.pop();

    // 3. Encontrar el índice de un producto específico usando findIndex
    let productoBuscado = "Chocolates";
    let indiceProductoBuscado = productos.findIndex(producto => producto.nombre === productoBuscado);

    // 4. Verificar si existe un producto con precio mayor a 50 usando some
    let existeProductoMayor50 = productos.some(producto => producto.precio > 50);

    // 5. Devolver una cadena de nombres de productos separados por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    // Devolver los resultados como un objeto
    return {
        productos,
        indiceProductoBuscado,
        existeProductoMayor50,
        nombresProductos
    };
}

*/
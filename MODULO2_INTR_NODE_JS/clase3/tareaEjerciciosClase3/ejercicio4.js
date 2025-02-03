
/*
Actividad 4: Control de inventario
Consigna: Crea un programa para llevar el control de un inventario. El
programa debe permitirte:
1. Agregar un producto: Registrar un producto con su nombre y cantidad disponible.
2. Listar los productos: Mostrar todos los productos registrados.
3. Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario.
Pistas:
• Usa un archivo JSON para guardar los productos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada producto debe tener un ID único que se pueda utilizar para actualizar su cantidad.
*/

const fs = require ("fs");
const filePath = "./inventario.json";

const args = process.argv.slice(2);
const comando = args[0];
const descripcionTarea = args.slice(1).join(" "); // Tomamos los argumentos restantes como una cadena


const leerProductos = () => { 
    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, "[]");
    }
    const contenido = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(contenido);
};

//escribri/guardar productos en formato json

const escribirProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
};

//AGREGAR un producto
const agregarProducto = (nombreProducto, cantidadProducto) => {
    const productos = leerProductos ();
    productos.push({id: productos.length +1, nombre: nombreProducto, cantidad: parseInt(cantidadProducto) });
    escribirProductos(productos);
    console.log(`Producto registrado: ${nombreProducto}, cantidad: ${cantidadProducto} unidades.`);
};

//LISTAR LOS PRODUCTOS
const listarProductos = () => {
    const productos = leerProductos();
    console.log ("Lista de productos:");
    productos.forEach((producto) => { 
        console.log(`${producto.id}, ${producto.nombre}, cantidad: ${producto.cantidad} unidades.`);
 }); 
};

//Actualizar la cantidad de un producto en el inventario
const actualizarProducto = (idProducto, nuevaCantidad) => {
    const productos = leerProductos(); //leemos los productos
    const producto = productos.find (producto => producto.id === idProducto);
        

    if (producto) {
        producto.cantidad = parseInt(nuevaCantidad);
        escribirProductos (productos);
        console.log(`Producto actualizado: ${producto.nombre}, nueva cantidad: ${producto.cantidad}`);
    } else {
        console.log('Producto no encontrado.');
    }
};

switch (comando) {
    case "agregar":
        const [nombreProducto, cantidadProducto] = descripcionTarea.split(",");
        agregarProducto(nombreProducto, cantidadProducto);
        break;
    case "listar":
        listarProductos();
        break;
    case "actualizar":
        const [idProducto, nuevaCantidad] = descripcionTarea.split(",");
        actualizarProducto(parseInt(idProducto), nuevaCantidad);
        break;
    default:
        console.log("Comando no reconocido. Usa 'agregar', 'listar' o 'actualizar'.");
}
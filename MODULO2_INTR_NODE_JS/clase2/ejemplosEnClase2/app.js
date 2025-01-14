const fs = require('fs');

//definimos la ruta del archivo json que vamos a manipular
const rutaArchivo = "./productos.json"

//Paso 1: Leer archivos JSON
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if(err){
        console.error('Error al leer el archivo:', err)
        return // detiene la ejecución
    }

//convertimos el contenido del archivo json (texto) a un obj javascrcipt utilizando "JASON.parse".
const productos = JSON.parse(data)
console.log("Productos actuales: ", productos);


//Paso 2: Agregar un nuevo producto al listado
//creamos un nuevo objeto que representa el nuevo producto.

const nuevoProducto = {
    id: productos.length + 1,
    nombre: "Webcan",
    precio: 40
}


//Agregamos el nuevo producto al array de productos existente.
productos.push(nuevoProducto)
console.log("Productos actualizados: ", productos);

//Paso 3- Escribir al archivo JSON actualizado
//convertimos el obj de js (productos) nuvamente a texto json utilizando json.stringify
const contenidoActualizado = JSON.stringify (productos, null, 2)

//escribimos el nuevo contenido en el archivo, mostramos el error por consola
fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
    if (err) {
        console.error("Error al escribir el archivo: ", err)
        return
    }
    console.log("Archivo actualizado correctamente");

})
})
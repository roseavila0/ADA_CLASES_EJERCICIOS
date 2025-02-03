/* Actividad 1: Registro de libros favoritos
Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON.
Implementa las siguientes funciones:
1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
Para esto, el libro tendrá solo un campo: su nombre.
2. Listar los libros: Muestra todos los libros registrados.
Pistas:
• Usa un archivo JSON para guardar los libros.
• Si el archivo no existe, comienza con un arreglo vacío.
*/



const fs = require ('fs')   //Importa el módulo fs de Node.js, que permite trabajar con archivos (leer, escribir, crear, etc.).
const filePath =  './libros.json' // Establece la ruta donde se almacenarán los libros. //Si no existe, se creará.


// Función para leer los libros desde el archivo JSON
const leerLibros = () => {
      // Si el archivo no existe, creamos un archivo vacío con un arreglo
      if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
      }
      const contenido = fs.readFileSync(filePath, 'utf-8'); // Leemos el archivo
      return JSON.parse(contenido); // Convertimos el contenido a un arreglo de libros a js
  };

  /*Verifica si el archivo existe con fs.existsSync(filePath).
Si no existe, crea el archivo con un arreglo vacío: [].
Lee el archivo con fs.readFileSync(filePath, 'utf-8').
Convierte el contenido a un arreglo usando JSON.parse().
📥 Resultado: Devuelve un arreglo de libros ya guardados.*/


  
  // Función para escribir los libros en el archivo JSON
  const escribirLibros = (libros) => {
      fs.writeFileSync(filePath, JSON.stringify(libros, null, 2)); // Escribimos los libros en el archivo JSON
  };

  
  /*Convierte el arreglo de libros a formato JSON con JSON.stringify().
Guarda el arreglo en el archivo libros.json.
📝 Nota: El null, 2 sirve para que el JSON tenga un formato más legible (indentado).*/
  
  // Agregar un libro a la lista
  const agregarLibro = (nombreLibro) => {
      const libros = leerLibros(); // Leemos los libros existentes
      libros.push({ id: libros.length + 1, nombre: nombreLibro }); // Agregamos el nuevo libro
      escribirLibros(libros); // Guardamos la lista actualizada
      console.log(`Libro agregado: "${nombreLibro}"`);
  };

  /*¿Qué hace paso a paso?

Lee la lista de libros actuales con leerLibros().
Agrega un nuevo libro al arreglo con un id y su nombre.
Guarda el arreglo actualizado en el archivo con escribirLibros(libros).
Muestra un mensaje confirmando que el libro fue agregado.*/

  
  // Listar los libros almacenados
  const listarLibros = () => {
      const libros = leerLibros(); // Leemos los libros
      console.log('Lista de libros favoritos:');
      libros.forEach(libro => {
          console.log(`${libro.id}. ${libro.nombre}`);
      });
  };

  
/*Lee los libros desde el archivo con leerLibros().
Muestra en consola la lista de libros.
Recorre cada libro y lo imprime con su id y nombre.*/


  // Ejemplo de uso de las funciones
  agregarLibro('Rebelión en la granja');
  listarLibros();
  

/* Resumen del flujo
Verifica si existe el archivo, si no lo crea.
Lee los datos del archivo.
Permite agregar nuevos libros con un id único.
Guarda los cambios.
Muestra la lista de libros.
*/

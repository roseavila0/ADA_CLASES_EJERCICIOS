/*
2. Lectura de Datos con Retraso Simulado y Manejo de Errores
Escribe una función que simule la obtención de datos de una base de datos o
API. La función debe simular un retraso de 2 segundos para obtener los datos.
Sin embargo, en ocasiones esta operación puede fallar (simula este fallo
lanzando un error manualmente).
Detalles:
• Utiliza async y await para hacer que la función sea asíncrona.
• Usa try/catch para capturar posibles errores.
• Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
• En caso de error, muestra "Error al leer datos".
Esta simulación es muy útil para ver cómo manejar errores en operaciones de
obtención de datos, una tarea común en programación backend.
*/

function lecturaDeDatos() {
  return new Promise((resolve, reject) => {
    const retardo = 2000;
    const fallo = Math.random() < 0.5; // 50% de probabilidad de error //Math.random() < 0.5: genera un número aleatorio entre 0 y 1. Si es menor a 0.5, simula un fallo.

    setTimeout(() => {
      if (fallo) {
        reject(new Error("Fallo en la lectura de datos"));  //reject(...): lanza un error, lo que hace que el flujo vaya al bloque catch.
      } else {
        resolve("Datos obtenidos con éxito");
      }
    }, retardo);
  });
}


//try/catch: captura errores si ocurren y muestra el mensaje correspondiente.
async function manejarLectura() {
  try {
    const resultado = await lecturaDeDatos();  //await: espera a que la promesa se resuelva o se rechace.
    console.log(resultado);
  } catch (error) {
    console.log("Error al leer datos");
  }
}

manejarLectura();

/*
// Función que simula la obtención de datos con retardo
const obtenerDatos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos la obtención de datos exitosa
            resolve("Datos obtenidos con éxito");
        }, 2000); // Retraso de 2 segundos
    });
};

// Función principal que usa try/catch para manejar errores
async function leerDatos() {
    try {
        const datos = await obtenerDatos(); // Esperamos la respuesta de obtenerDatos
        console.log(datos); // Mostramos el mensaje si fue exitoso
    } catch (error) {
        console.error("Error al leer datos:", error); // Si falla, manejamos el error aquí
    }
}

leerDatos(); // Llamamos a la función para iniciar el proceso
*/
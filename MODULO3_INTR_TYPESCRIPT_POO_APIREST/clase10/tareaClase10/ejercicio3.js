/*
Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all()
Consigna:
Simula la consulta a tres APIs diferentes que devuelven información sobre
usuarios, productos y ventas. Cada consulta debe realizarse usando una función
que retorne una promesa. Usa Promise.all() para esperar a que todas las
consultas se completen y luego:
1. Imprime un mensaje con los resultados si todas las consultas fueron
exitosas.
2. Si alguna falla, imprime un mensaje de error.
3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4
segundos).
Opcional: Modifica el comportamiento para que si alguna consulta falla, se
devuelva el mensaje: "No se pudo completar la operación: [API que falló]".
*/

/*
function consultarAPIs() {
  const usuarios = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("usuarios cargados");
    }, 2000); // 2 segundos
  });

  const productos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("productos cargados");
    }, 3000); // 3 segundos
  });

  const ventas = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ventas cargadas");
    }, 4000); // 4 segundos
  });

  Promise.all([usuarios, productos, ventas])
    .then((resultados) => {
      console.log("Resultados de todas las consultas:", resultados);
    })
    .catch((error) => {
      console.error("No se pudo completar la operación:", error);
    });
}

consultarAPIs();
*/


/*
.catch((error) => {
      console.error("No se pudo completar la operación:", error);
    });

    Si alguna promesa falla (por ejemplo, si usas reject("API de ventas")), se ejecuta este bloque.
Imprime un mensaje de error con la razón que dio el reject. */

//CON REJECT
 function consultarAPIs() {
  const usuarios = new Promise((resolve, reject) => {
    setTimeout(() => { 
      reject("API de usuarios"); // <-- para probar fallo
    }, 2000);
  });

  const productos = new Promise((resolve, reject) => {
    setTimeout(() => {
       reject("API de productos"); // <-- para probar fallo
    }, 3000);
  });

  const ventas = new Promise((resolve, reject) => {
    setTimeout(() => {
       reject("API de ventas"); // <-- para probar fallo
    }, 4000);
  });

  Promise.all([usuarios, productos, ventas])
    .then((resultados) => {
      console.log("Resultados de todas las consultas:", resultados);
    })
    .catch((error) => {
      console.error(`No se pudo completar la operación: ${error}`);
    });
}

consultarAPIs();

//**Promise.all() se detiene en la primera promesa que falla**, por eso solo ves "API de usuarios", aunque también fallaron las otras. No ejecuta las demás una vez que una falla.
//Para que todas las promesas se ejecuten aunque algunas fallen, y saber cuáles fallaron y cuáles no, puedes usar el método: Promise.allSettled() 
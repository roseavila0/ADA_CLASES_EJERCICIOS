/*
3. Ejecución de Múltiples Consultas en Paralelo
Simulemos un caso donde un sistema necesita realizar varias consultas a
distintos servicios externos de manera simultánea. Escribe tres funciones que
simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3
segundos). Luego, crea una función que ejecute estas tres consultas en paralelo
usando Promise.all, de modo que se esperen los tres resultados antes de
continuar.
Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones
asíncronas independientes ejecutándolas en paralelo.
*/

function consultaProductos(){
    return new Promise((resolve) =>{
        setTimeout(()=> resolve("Productos actualizados."),1000)
    })
}

function consultaValores(){
    return new Promise((resolve) =>{
        setTimeout(()=> resolve("Valores actualizados."),2000)
    })
}

function consultaDirecciones(){
    return new Promise((resolve) =>{
        setTimeout(()=> resolve("Direcciones actualizados."),3000)
    })
}

/*
Promise.all([consultaProductos(), consultaValores(), consultaDirecciones()])
.then((resultados) => { 
    console.log("Resultado de todas las consultas: ", resultados);
})
.catch((error) =>{
    console.error("Una de las consultas fue rechazada: ", error)
})*/

async function ejecutarConsultas() {
    try{
        const resultados = await Promise.all([
            consultaProductos(),
            consultaValores(),
            consultaDirecciones()
        ]);
        console.log("Todas las consultas culminadas: ", resultados);
    } catch (error) {
        console.error("Error en alguna consulta:", error)
    }   
}

ejecutarConsultas();




//resolucion de la profe
/*
// Función que simula una consulta que tarda 1 segundo en completarse
const consultaA = () => new Promise(resolve => setTimeout(() => resolve("Consulta A completa"), 1000));

// Función que simula una consulta que tarda 2 segundos en completarse
const consultaB = () => new Promise(resolve => setTimeout(() => resolve("Consulta B completa"), 2000));

// Función que simula una consulta que tarda 3 segundos en completarse
const consultaC = () => new Promise(resolve => setTimeout(() => resolve("Consulta C completa"), 3000));

// Función principal que ejecuta todas las consultas en paralelo
async function realizarConsultasParalelas() {
    try {
        // Promise.all permite ejecutar las consultas en paralelo y espera a que todas terminen
        const resultados = await Promise.all([consultaA(), consultaB(), consultaC()]);
        console.log("Todas las consultas completadas:", resultados);
    } catch (error) {
        console.error("Error en alguna consulta:", error); // Manejamos cualquier error aquí
    }
}

realizarConsultasParalelas(); // Inicia la ejecución de las consultas
*/

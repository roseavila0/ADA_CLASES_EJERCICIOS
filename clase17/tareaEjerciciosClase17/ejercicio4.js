//Ejercicio 4: Transformación y Análisis de Cadenas
//Pide al usuario que ingrese una lista de nombres separados por comas.
//Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,“Pablo” y “Pedro”.
//Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
//1. Quite los espacios en blanco alrededor de cada nombre.
//2. Verifique si existe el nombre "Juan".
//3. Reemplace todos los nombres "María" por "Ana".
//4. Encuentre el índice del nombre "Pedro".
//5. Devuelva una cadena de nombres en orden alfabético separados
//por puntos. Investigar el método “.sort()”
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const prompt = require ('prompt-sync')();

const listaDeNombres = prompt("Ingrese una lista de nombres separados por (,): ");  //Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,“Pablo” y “Pedro”.

function transformarYAnalizarNombres (listaDeNombres){

    let nombres = listaDeNombres.split(",").map(function(nombre){    //sin usar funcion flecha //nombre se utiliza como parameto automatico de la funcion que defines dentro del metodo .map
    return nombre.trim();
});


    const verificarNombre = nombres.includes("Juan");
  
    const reemplazarNombres = nombres.map (nombre => nombre === "Maria" ? "Ana" : nombre);

    const indicePalabra = reemplazarNombres.indexOf ("Pedro");

    listaFinal = reemplazarNombres.sort().join('.'); //el metodo sort te ayuda a ordenar las elementos de forma ascendente y descendente - funciona para orden alfabetico tbn.
    

    return{
        nombres: reemplazarNombres,
        verificarNombre: verificarNombre,
        indicePalabra: indicePalabra,
        listaFinal
    };
};

const resultado = transformarYAnalizarNombres(listaDeNombres);
console.log('Nombres: ', resultado.nombres);
console.log('¿Existe el nombre Juan en la lista final?: ', resultado.verificarNombre ? 'Si' : 'No');
console.log('El indice del nombre Pedro es: ', resultado.indicePalabra);   
console.log('Lista final: ', resultado.listaFinal);



//OTRA FORMA DE RESOLVER -----------------------------------------------------------------------------------------------------------------------
//EJEMPLO PROFE BERNI
/*
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese una lista de nombres separados por comas.
// Los nombres deben ser: Julia, Maria, Malena, Andrea, Pablo, Pedro
let nombresEntrada = prompt("Ingresa una lista de nombres separados por comas:");

// Función para transformar y analizar la lista de nombres
function transformarYAnalizarNombres(nombresEntrada) {
    // 1. Quitar los espacios en blanco alrededor de cada nombre
    let nombres = nombresEntrada.split(",").map(nombre => nombre.trim());

    // 2. Verificar si existe el nombre "Juan"
    let existeJuan = nombres.includes("Juan");

    // 3. Reemplazar todos los nombres "María" por "Ana"
    let nombresModificados = nombres.map(nombre => nombre === "María" ? "Ana" : nombre);

    // 4. Encontrar el índice del nombre "Pedro"
    let indicePedro = nombresModificados.indexOf("Pedro");

    // 5. Devolver una cadena de nombres en orden alfabético separados por puntos
    let nombresOrdenados = nombresModificados.sort().join(".");

    // Devolver los resultados como un objeto
    return {
        nombres: nombresModificados,
        existeJuan,
        indicePedro,
        nombresOrdenados
    };
}

// Llamada a la función y mostrar el resultado
let resultado = transformarYAnalizarNombres(nombresEntrada);
console.log("Resultado:", resultado);
*/
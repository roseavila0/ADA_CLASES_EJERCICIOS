//• Ejercicio 6: Autos y más autos…

//Escribe una función "gestionarAutos" que realice las siguientes tareas con
//una lista predefinida de marcas de autos:
//1. Quite los espacios en blanco alrededor de cada marca.
//2. Verifique si existe la marca "Tesla".
//3. Reemplace todas las marcas "Ford" por "BMW".
//4. Encuentre el índice de la marca "Chevrolet".
//5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos (entrada) {

    let marcas = entrada.split(",").map(marcas => marcas.trim());

    let verificarTesla = marcas.includes("Tesla");

    let reemplazoPalabras = marcas.map (function(marcas){
        return marcas === "Ford" ? "BMW" : marcas;
    });

    let indiceChevrolet = reemplazoPalabras.indexOf("Chevrolet");

    let listaFinal = reemplazoPalabras.sort().join(".");    

    return{
    marcas: reemplazoPalabras,
    verificarTesla: verificarTesla,
    indiceChevrolet: indiceChevrolet,
    listaFinal: listaFinal
    };
};

let resultado = gestionarAutos(entrada);
console.log ( `¿Existe algun carro marcas Tesla?: ${resultado.verificarTesla ? "Sí" : "No"}.
El índice del carro marca Chevrolet es: ${resultado.indiceChevrolet}
Lista final de marcas de carros ordenada alfatéticamente: ${resultado.listaFinal}.`);







//OTRA FORMA DE RESOLVER -----------------------------------------------------------------------------------------------------------------------
//EJEMPLO PROFE BERNI
/*

// Lista predefinida de marcas de autos

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

// Función "gestionarAutos" que realiza las tareas solicitadas
function gestionarAutos(listaDeMarcas) {
    // 1. Quitar los espacios en blanco alrededor de cada marca
    let marcas = listaDeMarcas.split(',').map(marca => marca.trim());

    // 2. Verificar si existe la marca "Tesla"
    let tieneTesla = marcas.includes("Tesla");
    if (tieneTesla) {
        console.log("La lista contiene la marca 'Tesla'.");
    } else {
        console.log("La lista no contiene la marca 'Tesla'.");
    }

    // 3. Reemplazar todas las marcas "Ford" por "BMW"
    marcas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

    // 4. Encontrar el índice de la marca "Chevrolet"
    let indiceChevrolet = marcas.indexOf("Chevrolet");
    if (indiceChevrolet !== -1) {
        console.log(`El índice de la marca 'Chevrolet' es: ${indiceChevrolet}`);
    } else {
        console.log("La marca 'Chevrolet' no está en la lista.");
    }

    // 5. Devolver una cadena de marcas en orden alfabético separadas por puntos
    marcas.sort();
    let resultado = marcas.join('.');
    return resultado;
}

// Llamar a la función con la lista predefinida y mostrar el resultado
let resultado = gestionarAutos(entrada);
console.log(`Marcas ordenadas alfabéticamente separadas por puntos: ${resultado}`);
 */
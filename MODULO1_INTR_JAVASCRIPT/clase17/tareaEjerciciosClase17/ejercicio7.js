//Ejercicio 7: “La Floreria”
//Escribe una función "gestionarFloreria" que realice las siguientes tareas
//con una lista predefinida de nombres de flores:
//1. Quite los espacios en blanco alrededor de cada flor.
//2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
//3. Reemplace todas las flores "Orquídea" por "Clavel".
//4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
//"Girasol" al inicio de la lista. 
//Devuelva una cadena de flores en orden alfabético separadas por puntos.
let entrada = "Rosa, Tulipán, Orquídeas, Lirio";

function gestionarFloreria (entrada){

    let listaDeFlores = entrada.split(",").map(function(entrada){
        return entrada.trim();
    });


    let verificarMargarita = listaDeFlores.includes("Margarita");
    if (verificarMargarita){
        listaDeFlores.push("Azucena");
    }

    let reemplazarFlores = listaDeFlores.map(function(entrada){
        return entrada === "Orquídeas" ? "Clavel" : entrada;
    });

    let indiceGirasol = listaDeFlores.indexOf("Girasol");
    if (indiceGirasol !== -1){
        console.log('El indice de la flor Girasol es', indiceGirasol);
    } else {
        listaDeFlores.unshift("Girasol");
    };

    let listaFinal = listaDeFlores.sort().join(".");
    
    return{

        verificarMargarita: verificarMargarita,
        listaFinal: listaFinal,
        indiceGirasol: indiceGirasol !== -1 ? indiceGirasol : "La flor 'Girasol' no estaba en la lista. Se agregó a inicio de la lista",
    };
};
let resultado = gestionarFloreria(entrada);
console.log(`¿Existe la flor "Margarita"? ${resultado.verificarMargarita ? "Sí" : "No"}
El índice de la flore Girasol es: ${resultado.indiceGirasol}
La lista final de flores es: ${resultado.listaFinal}`);
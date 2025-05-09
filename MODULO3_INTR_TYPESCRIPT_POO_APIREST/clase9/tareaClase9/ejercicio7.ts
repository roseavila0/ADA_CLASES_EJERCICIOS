/*
Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
Crea una función genérica que acepte una tupla con dos elementos de cualquier
tipo y retorne una nueva tupla con los elementos invertidos.
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica
de programacion 
*/

//PRIMER INTENTO CASI BIEN
type elementos= [string, string]

let elementitos: elementos[] = []

function generica(elementoA:string, elementoB:string){
    const nuevosElementos:elementos = ([elementoA, elementoB])
    console.log(`${nuevosElementos}`);

    const elementosInvertidos = ([elementoB, elementoA])
    console.log(`${elementosInvertidos}`);
}

generica("hola", "chao")


//CORRECCIÓn 
//TENIA QUE USAR SI O SI UNA FUNCION GENERICA
function invertirTupla<T, U>(tupla: [T, U]): [U, T] {
    return [tupla[1], tupla[0]];
}

// Ejemplos de uso
console.log(invertirTupla(["hola", "chao"]));        // ['chao', 'hola']
console.log(invertirTupla([1, true]));               // [true, 1]
console.log(invertirTupla([new Date(), "fecha"]));   // ['fecha', Date]
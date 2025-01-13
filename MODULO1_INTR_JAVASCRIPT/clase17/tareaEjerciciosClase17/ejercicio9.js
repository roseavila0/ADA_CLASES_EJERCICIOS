//Ejercicio 9: Desafío extra! Orden, lugar y números.

//Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
//mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista:
//Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes
//preguntas:
//o ¿Cuál es la posición del número 12?
//o ¿Cuál es la posición del número 5?
//o ¿Cuál es la posición del número 22?
//o ¿Cuál es la posición del número 100?

let lista = [12, 3, 5, 7, 1, 22, 47, 100];

function bubbleSort (lista) {
    let num = lista.length;
    for (let i=0 ; i<num ; i++){
        for (let j=0 ; j<num - i -1; j++){
            if (lista [j] > lista[j + 1]){
                let temp = lista [j];
                lista[j] = lista [j+1];
                lista[j+1] = temp; 
            }
        }
    }
    return lista;
}

let listaOrdenada = bubbleSort(lista);
console.log("Lista Ordenada:", listaOrdenada);

function busquedaBinaria (lista, num) {
    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === num) {
            return medio; // Devuelve la posición si se encuentra
        } else if (lista[medio] < num) {
            inicio = medio + 1; // Buscar en la mitad derecha
        } else {
            fin = medio - 1; // Buscar en la mitad izquierda
        }
    }
    return -1; // Devuelve -1 si no se encuentra
}

// Números a buscar
let numerosPorBuscar = [12, 5, 22, 100];
numerosPorBuscar.forEach(numero => {
    let posicion = busquedaBinaria(listaOrdenada, numero);
    console.log(`El número ${numero} está en la posición ${posicion}`);
});

//OTRA FORMA DE RESOLVER -----------------------------------------------------------------------------------------------------------------------
//EJEMPLO PROFE BERNI
/*
let list = [12, 3, 5, 7, 1, 22, 47, 100];

// Función de bubble sort
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Ordenar la lista
const listaOrdenada = bubbleSort(list.slice());
console.log('Lista ordenada:', listaOrdenada);

// Preguntas
const numeros2 = [12, 5, 22, 100];
numeros2.forEach(num => {
    console.log(`La posición del número ${num} es: ${busquedaBinaria(listaOrdenada, num)}`);
});

// Función de búsqueda binaria
function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (array[medio] === objetivo) {
            return medio;
        } else if (array[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return -1;
}
    */
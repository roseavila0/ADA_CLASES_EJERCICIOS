//Ejercicios - Algoritmos de Busqueda:
//Ejercicio 8: Lugar y números

//Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
//la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la solución.
//Dada la siguiente lista:
//Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
//o ¿Cuál es la posición del número 1?
//o ¿Cuál es la posición del número 5?
//o ¿Cuál es la posición del número 6?
//o ¿Cuál es la posición del número 9?
//o ¿Cuál es la posición del número 11?
//Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición
//de cada elemento, pero, la propuesta que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
//6, y nos indique por consola la posición del mismo.
//El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const busquedaBinaria = (lista, num)  => {
    let inicio = 0;
    let fin = lista.length -1;

    while (inicio <= fin ){
        let medio = Math.floor((inicio + fin) /2);

        if (lista [medio] === num){
            return  medio;
        } else if (lista [medio] < num) {
            inicio = medio + 1;
        } else{
            fin = medio -1;
        }
    }
    return -1;
};

let numerosPorBuscar = [1, 5, 6, 9, 11];

numerosPorBuscar.forEach(num => {
    let posicion = busquedaBinaria (lista,num);
    console.log(`El número ${num} está en la posición ${posicion}`);
});
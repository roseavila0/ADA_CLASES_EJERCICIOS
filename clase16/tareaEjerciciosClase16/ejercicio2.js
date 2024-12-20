//Ejercicio 2: Filtra los números pares de una lista
//Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y
//guardar únicamente los números pares en una nueva lista. Los números
//pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez
//que hayas creado la nueva lista, muéstrala en la consola.

let listaDeNumeros =[1, 2, 3, 4, 5, 6]; 

let numerosPares = listaDeNumeros.filter(function(numeros){
    return numeros % 2 === 0;
});

console.log('Lista de números pares: ', numerosPares);
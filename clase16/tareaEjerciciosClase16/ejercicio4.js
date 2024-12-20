//Ejercicio 4: Calcula la suma total de los números
//Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de
//sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al
//finalizar, imprime el total en la consola.

let listaDeNumeros = [1, 2, 3, 4];

const suma = listaDeNumeros.reduce (function(acum, num) { 
        return (acum + num);
    }); 
console.log ('La suma de todos los numero de la lista es: ', suma); 
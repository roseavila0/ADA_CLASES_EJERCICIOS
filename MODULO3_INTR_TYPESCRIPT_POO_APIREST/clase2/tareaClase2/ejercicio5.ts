/* Ejercicio 5: Función con parámetros rest
Consigna: Crea una función llamada sumarTodos que acepte una cantidad
indefinida de números y devuelva su suma. Luego, llama a la función con varios
números y muestra el resultado en la consola.
*/

function sumarTodos (...numeros: number[]): number {
   return numeros.reduce(function (total, num){
    return total + num;
    }, 0);                                              //, 0 → Es el valor inicial de total, lo que garantiza que si numeros está vacío, la función devuelva 0 en lugar de dar error.
}

let respuestaSuma: number = sumarTodos(3,5,6,7,9);
console.log("La respuesta de la suma es:", respuestaSuma);


//usando function arrow
/*
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}
*/
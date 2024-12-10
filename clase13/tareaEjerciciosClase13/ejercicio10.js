//Factorial de un número (Ejercicio entrevista) Crea una función 
//expresada llamada calcularFactorial que reciba un número y devuelva 
//su factorial. Fórmula del factorial: n! = n * (n-1) * . . . * 1

function calcularFactorial (num){
    let factorial= 1; 
    for (let i = 1; i <= num; i++) { 
        factorial *= i;
    }
    return factorial;
}
console.log("El factorial de 5 es:", calcularFactorial(5));


//otra forma de resolverlo
/*const calcularFactorial = function (num) {
    if (num === 0 || num === 1) { // Caso base: el factorial de 0 o 1 es 1.
        return 1;
    }
    return num * calcularFactorial(num - 1); // Llamamos a la función con (num - 1). Esta línea es el núcleo de la recursión. Multiplica el
                                            // número actual por el factorial del número inmediatamente inferior (num - 1).

    
};

console.log("El factorial de 5 es:", calcularFactorial(5));*/
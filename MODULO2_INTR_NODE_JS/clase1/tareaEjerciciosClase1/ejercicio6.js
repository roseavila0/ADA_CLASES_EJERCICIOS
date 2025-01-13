//Ejercicio 6: Calculadora de promedio
//Escribe una función que reciba un array de números y devuelva el
//promedio.
//Consigna:
//• Usa un bucle for para sumar los números.
//• Divide la suma total entre la cantidad de elementos del array.

let calificaciones = [8,9,10,7,6];

function calcularPromedio (notas) {
    let suma = 0;

    for (let i=0 ; i<notas.length; i++){
        suma += notas[i]; // Suma cada elemento del array.
}   
    let promedio = suma / notas.length;
    return promedio;
}

console.log("El promedio general es: " + calcularPromedio(calificaciones));


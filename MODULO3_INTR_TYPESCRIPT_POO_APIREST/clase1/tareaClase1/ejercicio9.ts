//Ejercicio 9: Comparaciones lógicas
/*Declara dos variables booleanas y realiza una comparación lógica (como AND,
OR). Imprime el resultado.*/

let esLunes: boolean = true;
let esViernes: boolean = false;

if (esLunes || esViernes) {
    console.log("Hoy es un inicio de semana o viernes.");
} else {
    console.log("Hoy no es lunes ni viernes.");
}

// Operador AND (&&)
if (esLunes && esViernes) {
    console.log("Esto nunca se imprimirá porque no pueden ser ambos true a la vez.");
} else {
    console.log("Al menos uno de los valores es false.");
}

//Ejercicio 5: Datos nulos y diferenciados
/*Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
el significado de null en TypeScript.*/

let nullValor: string | null = "Hola, soy un string";
console.log(`Valor inicial: ${nullValor}`);

// Ahora cambiamos su valor a null
nullValor = null;
console.log(`Valor después de cambiar a null: ${nullValor}`);

// Explicando null en TypeScript
if (nullValor === null) {
    console.log("El valor de la variable es null, lo que significa que no tiene un valor asignado actualmente.");
} else {
    console.log("La variable tiene un valor de tipo string.");
}
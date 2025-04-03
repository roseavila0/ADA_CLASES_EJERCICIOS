// Ejercicio 7: Tipos literales
/*Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
"Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
TypeScript.*/

let dia: "Lunes" | "Martes" | "Miércoles" = "Martes"; 
console.log(`Hoy es: ${dia}`);

// Intentemos asignar un valor no permitido (viernes no esta dentro de los dias que hemos registrado)
// dia = "Viernes"; // Error: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miércoles"'.
/*
Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo
devuelva. Prueba la función con diferentes tipos de datos.
*/

function generica <T> (valor: T): T{
    return valor
}

let año = generica <number> (2025)
console.log(`Tipo numero: ${año}`);

let mensaje = generica <string> ("Saludos terrícolas");
console.log (`Tipo string: ${mensaje}`);

//yo le puse el nombre "generica" , las profe usaron el nombre"identidad" creo que puedo cambiarle el nombre sin problema.
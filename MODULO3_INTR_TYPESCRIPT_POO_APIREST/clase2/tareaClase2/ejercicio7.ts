/*  Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */


function aumentarSalario(nombre: string, salario:number, aumento:number){
    let nuevoSalario: number = salario + ((salario * aumento) / 100); 
    return nuevoSalario;
}

let empleado = { nombre: "Manuel", salario: 400, aumento: 15 };

// Llamamos a la función y guardamos el resultado en una variable
let nuevoSalario = aumentarSalario(empleado.nombre, empleado.salario, empleado.aumento);

console.log(`El nuevo salario de ${empleado.nombre} aumentó el ${empleado.aumento}% y actualmente es: ${nuevoSalario}`);
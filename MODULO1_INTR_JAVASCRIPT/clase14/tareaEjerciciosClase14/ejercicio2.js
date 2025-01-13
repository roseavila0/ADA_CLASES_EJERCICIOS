//Ejercicio 2: Calcular promedio de calificaciones
//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio. // > <

const prompt = require ('prompt-sync')();


let calificaciones= parseInt (prompt('¿Cuántas calificaciones desea ingresar? '));
let suma= 0;

const calcularpromedio = (calificaciones) => {
    for (let i=1 ; i<=calificaciones ; i++) { 
        let calificacion = parseInt(prompt(`Ingrese la calificación del estudiante ${i}: `));
        suma += calificacion;
     }
     return suma/calificaciones;
 }

console.log ('El promedio de las 5 notas ingresadas es: ', calcularpromedio (calificaciones));



//una forma mas resumida de hacerlo --------------------------------------------------------------------------------------------

/*let calificaciones = parseInt(prompt('¿Cuántas calificaciones desea ingresar? '));

const calcularPromedio = calificaciones => {
    let suma = 0;
    for (let i = 1; i <= calificaciones; i++) {
        suma += parseInt(prompt(`Ingrese la calificación del estudiante ${i}: `));
    }
    return suma / calificaciones;
};

console.log('El promedio de las notas ingresadas es: ', calcularPromedio(calificaciones));*/




//Ejercicio 4: Parámetros opcionales simulados
/*Declara dos variables, una para almacenar un nombre y otra para almacenar una
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
proporcionada". Si se asigna la edad, imprímela junto al nombre.*/

let nombre: string = "Rose"
let edad: number | undefined;

if (edad !== undefined){
    console.log(`Nombre: ${nombre}, Edad: ${edad}`)
} else { 
    console.log(`Edad no proporcionada`);
}
//Ejercicio 4: Ciclo For - Array
//Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla: 

//1.Crear un array para almacenar las notas.
//2.Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
//3.Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
//4.Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
//5.Imprime en consola las notas ingresadas usando el array notas.

const prompt = require ('prompt-sync')();

let arrayNotas = [];
let notaEstudiantes= parseInt (prompt('¿Cuántas notas desea ingresar? '));

for (let i=0 ; i < notaEstudiantes ; i++) {
    let nota= parseInt(prompt(`Ingrese la nota del estudiante ${i + 1}: `));              //NOTA: i es el índice del ciclo, que comienza desde 0. // i + 1 simplemente convierte ese índice en un número más natural para los humanos (1, 2, 3, etc.).
    arrayNotas[i] = nota;                                                                 //NOTA: arrayNotas.push(nota); el metodoo push sirve para guardar valores en el array tbn.
    
}

console.log('Las notas ingresadas son: ');
for (let i = 0; i < arrayNotas.length; i++) {
   // console.log(`Nota del estudiante ${i + 1}: ${arrayNotas[i]}`);
   console.log(arrayNotas[i]);
}
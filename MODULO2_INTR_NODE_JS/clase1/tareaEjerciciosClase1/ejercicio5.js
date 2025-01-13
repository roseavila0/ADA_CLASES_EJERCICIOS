/*Ejercicio 5: Generador de iniciales
Escribe una función que reciba un nombre completo y devuelva las
iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string.*/


let nombre = "juan perez gomez"; 

function generarIniciales (nombreCompleto){
    let palabras = nombreCompleto.split(" ");
    let iniciales = ""; //almacenará las iniciales

    for (let i=0 ; i<palabras.length; i++){
        iniciales += palabras[i].charAt(0).toUpperCase();
       // iniciales +=  Es una forma abreviada de escribir: iniciales = iniciales + nuevaLetra; (como si lo va acumulando)
 } return iniciales;
}

console.log ("El nombre completo con iniciales en mayúsculas es: " + generarIniciales(nombre));
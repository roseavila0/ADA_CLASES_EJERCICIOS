//Ejercicio 10:
//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
//Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require ('prompt-sync')();

let num = parseInt (prompt('Ingrese un número del 1 al 7: '));

if(num === 1) {
    console.log('lunes');
}else if (num === 2) {
    console.log('martes');
}else if (num === 3) {
    console.log('miércoles');
}else if(num === 4) {
    console.log('jueves');
}else if(num === 5) {
    console.log('viernes');
}else if(num === 6) {
    console.log('sabado');
}else if(num === 7) {
    console.log('domingo');
}else {
    console.log('número fuera del rango');
}

//Ejercicio 4:
//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre.



const prompt = require ("prompt-sync")();

let nombreUsuario = prompt('Ingresa tu nombre: ');
const miNombre = 'Rosa';

if (nombreUsuario === miNombre) {
    console.log('Tenemos el mismo nombre');
} else  {
    console.log('Tenemos nombres diferentes');
}

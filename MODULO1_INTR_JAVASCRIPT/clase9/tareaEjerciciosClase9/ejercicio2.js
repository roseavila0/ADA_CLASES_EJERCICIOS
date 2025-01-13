//Ejercicio 2:
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

const prompt = require ("prompt-sync")();

let num = parseFloat (prompt('Ingrese un número: '));
const RANGO_MINIMO = 18 ;
const RANGO_MAXIMO = 26 ;

if (num >= RANGO_MINIMO && num <= RANGO_MAXIMO){
    console.log( 'Si esta dentro del rango definido')
} else{
    console.log('No esta dentro del rango definido' )
}
    
//Ejercicio 8: Encuentra los múltiplos de un número
//Consigna: Escribe un programa que le pida al usuario un número entero positivo y muestre todos 
//los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.
//< > 

const prompt = require ('prompt-sync')();

let num = parseInt(prompt('Ingrese un número entero positivo: '));

if (num > 0) { // Validar que sea positivo
    console.log(`Los múltiplos de ${num} entre 1 y 100 son:`);


for (let i=1 ; i<=100 ;i++ ){
    if (i % num === 0) { 
    console.log (i);
}
}
}else {
    console.log('Por favor, ingrese un número entero positivo.');
}


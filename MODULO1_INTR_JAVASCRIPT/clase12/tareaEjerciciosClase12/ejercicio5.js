//Ejercicio 5: Uso de Arrays y Condicionales
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
//Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
//(Pueden desglosar en pasos el código si eso les facilita su desarrollo).

const prompt = require ('prompt-sync')();

console.log('INGRESAR 5 NOMBRES');

let ArrayNombres = [] ;

for (i=0 ; i < 5 ; i++){
    let nombre = prompt ('Ingrese nombre ' + (i+1) + ': ');
    ArrayNombres [i]= nombre;
}
console.log('Los nombres almacenados son: ' + ArrayNombres.join(', ')); //El método .join() convierte un array en un string, uniendo los elementos con el separador que especifiques.

let nombre2 = prompt ('Ingrese un nombre: ');

if (ArrayNombres.includes(nombre2)){     // .includes(): Este método verifica si un valor está presente en un array. Si encuentra el valor, devuelve true, y si no, devuelve false.
    console.log(`El nombre ${nombre2} ya se encuentra almacenado.`)
} else {
    console.log(`El nombre ${nombre2} no se encuentra almacenado.`)
}
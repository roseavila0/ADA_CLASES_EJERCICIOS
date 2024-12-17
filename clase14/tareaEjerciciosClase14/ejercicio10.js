//Ejercicio 10: Flores Favoritas //Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
//1.Inicializa un array vacío para almacenar las flores favoritas.
//2.Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
//3.Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
//4.Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
const prompt = require ('prompt-sync')();

let arrayFloresFavoritas = [];
console.log ('Ingrese sus 3 flores favoritas: ');

let flor1 = prompt ('Ingresa la primera flor favorita: ');
arrayFloresFavoritas[0] = flor1;

let flor2 = prompt ('Ingresa la segunda flor favorita: ');
arrayFloresFavoritas[1] = flor2;

let flor3 = prompt ('Ingresa la tercera flor favorita: ');
arrayFloresFavoritas[2] = flor3;

let florEspecifica = prompt ('Ingrese el nombre de una flor para verificar si se encuentra entre las favoritas: ');
contador=0;

for (let i=0 ; i<arrayFloresFavoritas.length ; i++){
    if (florEspecifica.toLowerCase() === arrayFloresFavoritas[i].toLowerCase()){
      contador ++;  
 }
}


if (contador > 0) {
    console.log(`La flor "${florEspecifica}" se encuentra registrada entre las favoritas ${contador} vez/veces.`);
} else {
    console.log(`La flor "${florEspecifica}" no se encuentra registrada entre las favoritas.`);
}

console.log('Tus flores favoritas son:', arrayFloresFavoritas);

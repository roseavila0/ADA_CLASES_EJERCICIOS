//Contar hasta un número 
//Crea una función declarada llamada contarHasta 
//que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.
// > <



const contarHasta = function (num){
for (i=1; i<=num ;i++) {
console.log(i);
 }
}

contarHasta(3);


//otra forma de resolver 

//const contarHasta = function (num) {
//  let numeros = [];
// for (let i = 1; i <= num; i++) {
//     numeros.push(i);
// }
// return numeros;
//};

//console.log(contarHasta(8)); // [1, 2, 3, 4, 5, 6, 7, 8]

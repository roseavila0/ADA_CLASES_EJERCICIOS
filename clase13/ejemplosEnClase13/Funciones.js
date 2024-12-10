//1. Funcion Normal
//Una funcion tradicional de js, se define con la palabra reservada function, es un bloque de codigo que tiene una funcionalidad y que se va a reutilizar.


function calcularAreaRectangulo (base, altura){
    return base * altura; //formula para calcular

}

console.log ('Area de un rectangulo', calcularAreaRectangulo(10, 5));


2.// Declarada
//NO esta en variable y tiene un nombre (nombrada).
function esPar(numero) {
    if (numero % 2===0){
        return "Es par"; //si el num es divisible entre 2 , es par
}else {
    return "Es impar" // Si no es, es impar
}
}

console.log("El número 7: ", esPar(7)); // la impresión y dentro de ella la invocación (recuerda que tambien se puede guardar una funcion en una variable y poder imprimirla pero siempre debemos ahorrar codigo entonces puedo vincularla de una).
console.log("El número 8: ", esPar(8)); 

//Pasos para que la funcion FUNCIONE:
// 1.Declarar (Hacer la maqueta)
// 2.Imprimir (usando console.log)
// 3.Invocar (Dentro del cosole.log)

// 3.Función Expresada: Se guarda en variable y es anonima. //< > 
const encontrarMayor = function (a, b) {
    if (a > b ){
        return a;
    } else {
        return b;
    }
}
console.log ('El mayor de 15 y 20 es: ' + encontrarMayor(15, 20));
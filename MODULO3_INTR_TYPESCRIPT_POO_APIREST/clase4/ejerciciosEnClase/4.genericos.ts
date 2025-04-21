//Ejemplo de función genérica
function identidad <T> (valor: T): T{
    return valor
}

//Ejemplo de uso de la funcion 
let numero = identidad <number> (10)
console.log(`Ejemplo del uso con tipo number: ${numero}`);

let texto = identidad <string> ("Hola");
console.log (`Ejemplo del uso con tipo string: ${texto}`);

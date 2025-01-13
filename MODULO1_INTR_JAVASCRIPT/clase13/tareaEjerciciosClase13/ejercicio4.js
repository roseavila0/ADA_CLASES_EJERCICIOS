//Número par o impar Crea una función declarada llamada esPar que reciba un número y devuelva 
//"Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.



function esPar (numero) {
    let resultado;
    if (numero % 2 === 0){
        return 'Es par';
    } else {
        return 'Es impar';
    }
   
}

console.log('El número 5 es:', esPar (5));
console.log('El número 8 es:', esPar (8));






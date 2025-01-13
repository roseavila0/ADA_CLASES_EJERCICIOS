//Ejercicio 8: Rojo y Verde

//Para este ejercicio vamos a generar dos funciones:
//a) Una va a sumar los valores en la diagonal marcada en rojo.
//b) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único. Rojo: 505   -     Verde 505
//IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. 
//¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!

const matrizNumeros = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

function sumarDiagonalRoja(matriz){
    let suma=0;
    for (let i=0 ; i<matriz.length ;i++){
        suma += matriz [i][i];
    }
    return suma;
}

function sumarDiagonalVerde(matriz){
    let suma=0;
    for  (let i=0 ; i<matriz.length ;i++){
        suma += matriz [i] [matriz.length -1 -i];
}
    return suma;
}

const sumaRoja = sumarDiagonalRoja(matrizNumeros);
const sumaVerde = sumarDiagonalVerde(matrizNumeros);

console.log('Suma de la diagonal roja', sumaRoja);
console.log('Suma de la diagonal verde', sumaVerde);

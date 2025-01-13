//Ejercicio 7: Calculadora simple
//Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a 
//realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa 
//deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa 
//debe mostrar un mensaje de error. Usa switch para resolverlo.
const prompt = require ('prompt-sync')();

let numero1 = parseInt(prompt('Ingrese un primer número: '));
let numero2 = parseInt(prompt('Ingrese un segundo número: '));
let operacionMath = prompt('Escoja una operación matemática a realizar (suma, resta, multiplicación o división): ').toLowerCase();

switch (operacionMath){
    case 'suma':
        console.log(numero1 + numero2);
        break;
    case 'resta':
        console.log(numero1 - numero2);
        break;
    case 'multiplicacion':
        console.log(numero1 * numero2);
        break;
    case 'division':
        console.log(numero1/numero2);
        break;
    default:
     console.log('valor invalido, escoja una operación matemática.');    
} 

//AQUI HAY OTRA FORMA DE HACERLO

/*AQUI SE MUEESTRA QUE SE PUEDEN USAR VARIOS CASE PARA NOMBRE ALTERNATIVOS DE LAS OPERACIONES.
TBN SE REALIZA UNA CONDICIÓN con un if para cuando pidan divivir y el segundo # sea cero de ERROR xq ningun numero  se puede dividir para cero.
let num1 = parseFloat(prompt('Ingrese un primer número: '));
let num2 = parseFloat(prompt('Ingrese un segundo número: '));
let operacion = prompt('Escoja una operación matemática a realizar (suma, resta, multiplicación o división): ').toLowerCase();

switch (operacion) {
    case 'suma':
    case 'sumar':
        console.log(`El resultado de la suma es: ${num1 + num2}`);
        break;

    case 'resta':
    case 'restar':
        console.log(`El resultado de la resta es: ${num1 - num2}`);
        break;

    case 'multiplicacion':
    case 'multiplicar':
        console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
        break;

    case 'division':
    case 'dividir':
        if (num2 === 0) {
            console.log('Error: No se puede dividir entre cero.');
        } else {
            console.log(`El resultado de la división es: ${num1 / num2}`);
        }
        break;

    default:
        console.log('Operación inválida. Por favor, escoja entre suma, resta, multiplicación o división.');
         }*/
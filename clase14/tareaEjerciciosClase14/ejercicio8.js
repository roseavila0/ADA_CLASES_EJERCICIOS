//Ejercicio 8: Funcion backEnd()
//Creá la función backEnd() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100,
// pero teniendo en cuenta los siguientes criterios:
//✓Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
//✓Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
//✓Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.

function backEnd (numero1, numero2){
    for (let i=1 ; i <= 100 ; i++) {
        if (i % numero1 === 0 && i % numero2 === 0){
            console.log('Back End');
        } else if (i % numero2 === 0) {
            console.log('End');
        } else if (i % numero1 === 0) {
            console.log('Back');
        }else {
            console.log(i);
        }
            
    }

}
backEnd (34, 8);


//OTRA FORMA DE RESOLVER

function backEnd(num1, num2) {
    // Creamos un array vacío que llenaremos con los valores adecuados
    let resultado = [];

    // Recorremos los números del 1 al 100
    for (let i = 1; i <= 100; i++) {
        // Comprobamos si el número es múltiplo de ambos parámetros
        if (i % num1 === 0 && i % num2 === 0) {
            resultado[i - 1] = "Back End";  // Si es múltiplo de ambos, añadimos "Back End"
        }
        // Si es múltiplo solo del primer parámetro
        else if (i % num1 === 0) {
            resultado[i - 1] = "Back";  // Si es múltiplo de num1, añadimos "Back"
        }
        // Si es múltiplo solo del segundo parámetro
        else if (i % num2 === 0) {
            resultado[i - 1] = "End";  // Si es múltiplo de num2, añadimos "End"
        }
        // Si no es múltiplo de ninguno, dejamos el número
        else {
            resultado[i - 1] = i;  // El número mismo se mantiene
        }
    }

    // Retornamos el array resultante
    return resultado;
}

// Llamamos a la función con los números 3 y 5 como parámetros
console.log(backEnd(3, 5));


//ANALIIS DE CUAL ES LA MEJOR OPCION
//¿Cuál es la mejor opción?
//Para una solución simple, donde solo necesitas mostrar los resultados en la consola: La primera solución es suficiente. 
//Es más rápida de escribir y cumple con la función de mostrar los resultados de manera directa.

//Para una solución más flexible y reutilizable, donde los resultados pueden necesitar ser almacenados, procesados o 
//utilizados en otro contexto, la segunda solución es mejor. Retornar un array de resultados es más versátil, 
//ya que puedes usar esos datos más adelante de muchas formas diferentes.
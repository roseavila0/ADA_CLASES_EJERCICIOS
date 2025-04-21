/*
Actividad 5: Usar aserciones dobles

Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado.
*/

export let valor: any = "123";
let valorNumerico: number = (valor as unknown as number);

console.log(valorNumerico); // Esto puede producir un error en tiempo de ejecución


//¿Qué es una aserción doble?
//Es como decirle a TypeScript:

//"Sé que esto parece loco, pero confía en mí, esto es del tipo que yo digo."

//Se usa cuando quieres convertir de un tipo a otro que normalmente no son compatibles (por ejemplo, de string a number directo), y para eso se hace un "puente" usando unknown.
//OTRO EJEMPLO

let datos: any = "456";

// Aserción doble: de 'any' a 'unknown', luego a 'number'
let numeroConvertido: number = (datos as unknown as number);

console.log(numeroConvertido);
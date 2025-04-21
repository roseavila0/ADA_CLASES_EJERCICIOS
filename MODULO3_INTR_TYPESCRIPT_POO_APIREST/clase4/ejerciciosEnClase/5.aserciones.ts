//Ejemplo 1: aserción básica de tipo 'any' a 'string'

let valorGenerico: any =  'Typescript es increíble';
//console.log(valorGenerico.length)

let longitudDeString: number =  (valorGenerico as string).length
console.log(longitudDeString);

//Ejemplo 2: Aserciones con tipos de union
function obtenerNombreEnMayuscula(nombre: string | null): string{
    if (nombre) {
        return (nombre as string).toUpperCase()
    } else {
        return "Nombre no proporcionado"
     }
}

//Ponemos a prueba la funcion 
console.log(obtenerNombreEnMayuscula('ana'));
console.log(obtenerNombreEnMayuscula('null'));

console.log("-----------------------------------------------");

//Ejemplo 3: Uso de aserciones con unknown
let valorDesconocido: unknown = "Este es un valor desconocido"
///console.log(valorDesconocido.length);

//Como no podemos acceder a sus propiedad de forma directa, usamos asercion de tipo

if (typeof valorDesconocido === "string") {
    let longitud: number = (valorDesconocido as string).length
    console.log(`La longitud del string desconocido es: ${longitud}`)
}

//Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles)
let valor: any = 'Este es un valor';
let valorNumerico = (valor as unknown as number)
console.log(`Valor numerico con asercion doble: ${valorNumerico}`);

//Ejemplo 5: Precacuciones en aserciones
let valorErroneo: any = 42;
let textoErroneo = valorErroneo as string;
console.log(textoErroneo.length)
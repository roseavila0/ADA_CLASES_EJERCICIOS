/* Actividad 4: Usar aserciones de tipo

Declara una variable de tipo any y usa una aserción para tratarla como string,
accediendo a la propiedad .length.
*/

let frase: any = "Camarón que se duerme se lo lleva la corriente";
let longitud: number = (frase as string).length;

console.log(`Longitud del string: ${longitud}`);
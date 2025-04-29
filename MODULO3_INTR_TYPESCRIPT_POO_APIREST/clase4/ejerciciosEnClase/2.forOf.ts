//for...of: Se usa para recorrer los valores de un iterable.

//declaramos un array
export let lenguajes = ["Javascript", "Python", "TypeScript"];

for (let lenguaje of lenguajes) {
    console.log(`Ejemplo array: ${lenguaje}`);
}

//En este caso el bucle for...of recorre los valores del array
console.log('----------------------------------------------------');

//Ejemplo de for of con cadena de texto (string)
let saludo = "SALUDOS";

for (let letra of saludo) {
    console.log(`Ejemplo con string: ${letra}`);
}













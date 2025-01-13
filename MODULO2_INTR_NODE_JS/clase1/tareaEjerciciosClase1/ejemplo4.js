/*Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).*/

let texto = "Bienvenido";

function contarVocales(texto){
    let cantidad = 0;
    for (let i=0 ; i<= texto.length; i++){
        if (texto[i].toLowercase() === "a" || texto[i].toLowercase() === "e" || texto[i].toLowercase() === "i" || texto[i].toLowercase() === "o" ||texto[i].toLowercase() === "u");     )
            cantidad ++;
        }
         } return cantidad;
}

console.log(contarVocales(texto));
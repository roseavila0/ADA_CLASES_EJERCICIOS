/*Ejercicio 4: Contando vocales
Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).*/

let texto = "Bienvenido";

function contarVocales(mensaje){
    let cantidad = 0;
    for (let i=0 ; i<mensaje.length; i++){
        if (mensaje[i].toLowerCase() === "a" || mensaje[i].toLowerCase() === "e" || mensaje[i].toLowerCase() === "i" || mensaje[i].toLowerCase() === "o" || mensaje[i].toLowerCase() === "u"){ 
            cantidad ++;
        } 
    } return cantidad;
    }


console.log(contarVocales(texto));


/* OTRA FORMA DE RESOLVER

function contarVocales(mensaje){
    let cantidad = 0;
    let vocales = new Set(['a', 'e', 'i', 'o', 'u']);
    
    for (let i = 0; i < mensaje.length; i++) {
        if (vocales.has(mensaje[i].toLowerCase())) {
            cantidad++;
        }
    }
    return cantidad;
} */
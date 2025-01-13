//Ejercicio 8: Contador de letras
//Crea una función que reciba una cadena de texto y una letra, y devuelva
//cuántas veces aparece esa letra en la cadena.
//Consigna:
//• Usa un bucle for y condicionales.
//• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.


let texto = "Programar es divertido";
let letra = "r";


function contarLetra (frase, letra){
    let contador = 0;
    for (let i=0 ; i<frase.length; i++){
        if(frase[i].toLowerCase() === letra.toLowerCase()){
        contador ++;
        }    
} return contador;
}

console.log(`La letra "${letra}" ingresada aparece ${contarLetra(texto, letra)} veces.`);

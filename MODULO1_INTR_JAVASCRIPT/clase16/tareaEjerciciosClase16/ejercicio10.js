//Ejercicio 10: Construye una frase a partir de una lista de palabras
//Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una
//frase completa concatenando cada palabra en orden, separadas por
//espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.

let listaDePalabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

let fraseOrdenada = listaDePalabras.reduce(function(acum, palabras){
    return ; acum + ' ' + palabras;
}, ' ');

console.log('La frase concatenada es: ', fraseOrdenada.trim());
 

//OTRA FORMA DE RESOLVER ------------------------------------------------------------------------------------------------------
//USANDO JOIN

/*let listaDePalabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

let fraseOrdenada = listaDePalabras.join(' ');

console.log('La frase concatenada es:', fraseOrdenada); */
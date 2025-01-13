//Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
//Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos
//saber cuántas letras hay en total entre todas las palabras. Por ejemplo,
//'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.


let listaDePalabras = ['sol', 'luna', 'estrella'];


let conteoLetras = listaDePalabras.reduce(function(acum, palabras){
        //console.log('Acumulador:', acum, 'palabra actual:', palabras);
        return (acum + palabras.length);
}, 0);

console.log('El total de letras de la lista de palabras es: ', conteoLetras);  


//OTRA FORMA DE RESOLVER  ------------------------------------------------------------------------------------------------------
//RESOLUCIÓN DE LA PROFE 

/*
const words = ['sol', 'luna', 'estrella'];
const totalLetters = words.reduce((total, word) => total + word.length, 0); // Suma las longitudes de las palabras.
console.log(totalLetters);
*/
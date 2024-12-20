//Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
//Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos
//quedarnos solo con los nombres que comiencen con la letra 'A'. Por
//ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza
//con 'L'.


let listaDeNombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresInicianConA = listaDeNombres.filter(function(nombres){
    return nombres.charAt(0) === 'A'; // charAt(0):Este método obtiene el carácter en la posición 0 (es decir, el primero) de cada nombre.
});

console.log('Los nombres que empiezan con la letra "A" son: ', nombresInicianConA);





//OTRA FORMA DE RESOLVER  ------------------------------------------------------------------------------------------------------
//RESOLUCIÓN DE LA PROFE 

/*

const names = ['Ana', 'Luis', 'Andrea', 'María'];
const namesStartingWithA = names.filter(name => name.startsWith('A')); // Filtra los nombres que empiezan con 'A'.
console.log(namesStartingWithA); // Resultado: ['Ana', 'Andrea']
*/
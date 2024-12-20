//Ejercicio 8: Busca un nombre específico
//Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
//saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
//devolverlo.

let listaDeNombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let verificarNombre = listaDeNombres.find(function(nombre){
    return nombre === 'Laura';
});

console.log (verificarNombre + ' si se encuentra en la lista.');





//OTRA FORMA DE RESOLVER  ------------------------------------------------------------------------------------------------------
//RESOLUCIÓN DE LA PROFE 

/*
const names = ['Carlos', 'Daniel', 'Laura', 'Ana'];
const foundName = names.find(name => name === 'Laura'); // Busca el nombre 'Laura'.
console.log(foundName); // Resultado: 'Laura'
// */
//Ejercicio 2: El menú del día
// Escribe una función que reciba un objeto con platos y precios, y devuelva
//los platos cuyo precio sea menor a $20.
//Consigna:
//• Usa un bucle for...in.
//• Usa objetos y arrays.

let menu = {
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta": 18
};

function platosEconomicos (listaDePlatos){
    let platosMenorPrecio = [];

    for (let plato in listaDePlatos){    //for...in recorre cada clave del objeto ("Ensalada", "Sopa", etc.).
        if (listaDePlatos[plato] < 20){
            platosMenorPrecio.push(plato)
        } ;
} return platosMenorPrecio;
}

console.log("Los platos menores de $20 son: " + platosEconomicos(menu).join((", ")));


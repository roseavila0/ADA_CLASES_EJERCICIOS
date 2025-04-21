//Ejemplo1: recorrer un array con for...in y con for...of
let autos = ["toyota", "Honda", "Tesla"];

console.log("Recorremos el array con for...in");
for (let indice in autos) {
    console.log(`Indice: ${indice}, Auto: ${autos[indice]}`);
}

console.log("Recorremos el array con for...of");
for (let auto of autos) {
    console.log(`Auto: ${auto}`);
}


console.log("----------------------------------------------------------")
//Ejemplo2: recorremos un objeto con for...in y for...of

export let auto ={
    marca: "Tesla",
    modelo: "Model S",
    anio: 2023
}

console.log("Recorremos el array con for...in");
for (let propiedad in auto) {
    console.log(`Clave: ${propiedad}, Valor: ${auto[propiedad as keyof typeof auto]}`);
}

console.log("Recorremos el array con for...of");    //es muy probable que salga error xq no es un iterante
for (let valor of auto) {
    console.log(valor);
}
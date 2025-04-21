//ejemplo basico con un objeto
//for...in: Se usa para recorrer las propiedades (claves) de un objeto.

let alumna = {
    nombre: "Lucia",
    edad: 22,
    curso: "Programación"
};


//Este for... in va a iterar sobre la propiedad del objeto alumna. Se imprimen las claves y los valores correspondientes.
for (let propiedad in alumna){
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
};

//keyof typeof: con esto estamos queriendo decir que la variable "propiedad" es una clave válida para el objeto "alumna".





//EJEMPLO DE FOR...IN en arrays --------------------------------------------
let lenguajes = ["Javascript", "Python", "TypeScript"];

for (let lenguaje in lenguajes) {
    console.log(`Ejemplo array: ${lenguaje}`)
}

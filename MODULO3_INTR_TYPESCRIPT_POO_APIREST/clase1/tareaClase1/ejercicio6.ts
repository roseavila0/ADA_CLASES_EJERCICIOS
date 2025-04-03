//Ejercicio 6: Uso de unknown
/*Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
valores.*/

//unknow: Similar a any pero requiere verificacion antes de su uso
let valorUnknown: unknown = "Esto es un dato unknown"
console.log(valorUnknown);

// Necesitamos verificar el tipo antes de usarlos como un string
if (typeof valorUnknown === "string") {      //RECUERDA :  Usar typeof (Es la forma más común de verificar el tipo de dato)
    console.log(valorUnknown.toUpperCase());
};
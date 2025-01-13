//Ejercicio 1: Calcular el precio final con IVA
//Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

const prompt = require ('prompt-sync')();

let precio = parseFloat (prompt('Ingrese el precio del producto: '));
let porcentaje = parseFloat (prompt('Ingrese el porcentaje del IVA: '));

const precioFinal = (precio, porcentaje) => {
    return precio + (precio * porcentaje / 100);
    };
console.log('El precioo final es:', precioFinal(precio, porcentaje));
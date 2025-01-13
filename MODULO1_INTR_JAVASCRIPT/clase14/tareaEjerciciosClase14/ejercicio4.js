//Ejercicio 4: Calcular descuento por cantidad
//Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el 
// total con descuento según la cantidad. // > <

const prompt = require ('prompt-sync')(); 
let cantidadProductos = parseInt(prompt('Ingrese la cantidad de productos comprados: '));
let precioUnitario = parseFloat(prompt('Ingrese el precio unitario de cada producto: '));

const totalConDescuento = (cantidad, precio) =>{
 let total = (cantidad * precio); 
    if (cantidad >= 12){
        console.log('Aplica a descuento del 5%.');
        total = total - total * 5/100;
    } else {
        console.log('No aplica a descuento.');
    }
    return total;
 };

let totalFinal = totalConDescuento (cantidadProductos, precioUnitario);
console.log ('El total a pagar es: $' + totalFinal.toFixed(2));


//OTRA FORMA DE RESOLVER ---USANDO OPERADOR TERNARIO-----------------------------------
/*
const totalConDescuento = (cantidad, precio) => {
    let total = cantidad * precio;
    total = cantidad >= 12 ? total * 0.95 : total; // Descuento si cantidad >= 12
    console.log(cantidad >= 12 ? 'Aplica a descuento del 5%.' : 'No aplica a descuento.');
    return total;
};

let totalFinal = totalConDescuento (cantidadProductos, precioUnitario);
console.log ('El total a pagar es: $' + totalFinal.toFixed(2));
*/


//OTRA FORMA DE RESOLVER ---------------------------------------------------------------
/*// Función que pide los valores directamente CON VARIABLES LOCALES 

const totalConDescuento = () => {
    let cantidad = parseInt(prompt('Ingrese la cantidad de productos comprados: '));
    let precio = parseFloat(prompt('Ingrese el precio unitario de cada producto: '));

    let total = cantidad * precio;
    if (cantidad >= 12) {
        console.log('Aplica a descuento del 5%.');
        total *= 0.95;
    } else {
        console.log('No aplica a descuento.');
    }
    return total;
};

let totalFinal = totalConDescuento();
console.log('El total a pagar es: $' + totalFinal.toFixed(2));
*/



//OTRA FORMA DE RESOLVER ---------------------------------------------------------------
/*//const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let descuento = 0;
    if (cantidad > 10) descuento = 0.15;
    else if (cantidad > 5) descuento = 0.10;
    return (cantidad * precioUnitario) * (1 - descuento);
};

let cantidad = parseInt(prompt("Ingresa la cantidad de productos comprados:"));
let precioUnitario = parseFloat(prompt("Ingresa el precio unitario del producto:"));
let total = calcularTotalConDescuento(cantidad, precioUnitario);

console.log(`El total a pagar con descuento es: ${total}`);
*/
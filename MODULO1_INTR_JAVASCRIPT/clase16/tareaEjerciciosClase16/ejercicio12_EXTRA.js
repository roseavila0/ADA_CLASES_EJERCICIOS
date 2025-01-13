//Calcula el total de ventas de productos seleccionados
//Supón que tienes una lista de productos con sus precios en formato de
//objeto:

//const products = [
// { name: 'Laptop', price: 1000 },
// { name: 'Mouse', price: 25 },
// { name: 'Teclado', price: 50 },
// { name: 'Monitor', price: 200 },
// { name: 'Audífonos', price: 75 }
//];
//Queremos:
//o Seleccionar los productos cuyo precio sea mayor o igual a 50.
//o Obtener solo los nombres de esos productos.
//o Calcular el precio total sumando los precios de los productos seleccionados.
//o Imprime el total y los nombres de los productos seleccionados en la
//consola.

const productsList = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];

let selectedProducts = productsList.filter (function(product){
    return product.price >= 50;
});

let productsName = selectedProducts.map(function(product){
    return product.name;
})

let totalPrice = selectedProducts.reduce(function(acum, product){
    return acum + product.price; 
},0)

console.log('Los productos seleccionados son: ' + productsName.join(', ') );
console.log('El valor total de los productos seleccionados es: ' + totalPrice);
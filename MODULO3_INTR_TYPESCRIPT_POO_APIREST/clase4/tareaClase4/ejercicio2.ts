/* Actividad 2: Usar For...Of para recorrer los valores de un arreglo
Crea un arreglo con al menos 5 números y usa un bucle for...of para imprimir
cada número en consola.*/

let edades = [18, 20, 35, 65, 12];


// Le agrego ordenar el arreglo de menor a mayor 
edades.sort((a, b) => a - b);

for (let edad of edades){
    console.log(`Edad: ${edad}`);
};
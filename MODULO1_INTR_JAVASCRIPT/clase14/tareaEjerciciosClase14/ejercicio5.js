//Ejercicio 5: Verificar origen del auto
//Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si el auto es de origen nacional o importado. 
// Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.
//✓Solicita al usuario que ingrese la marca de un auto.
//✓Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.
//✓Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.

const prompt = require ('prompt-sync')(); 
let marcaDeAutos = prompt('Ingrese la marca de un auto: ');

const verificarMarca = (marca) => {
    const marcasNacionales = ['chevrolet', 'ford' , 'fiat'];
    if (marca.toLowerCase() ==='chevrolet' || marca.toLowerCase() === 'ford' || marca.toLowerCase() ==='fiat') {
        return 'Auto de origen nacional';
    } else {
        return 'Auto de origen importado';   
    }
    }; 
    
console.log (verificarMarca (marcaDeAutos));
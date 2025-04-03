/*  Ejercicio 9: Funciones con retorno void y manipulación de objetos
Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
encendido (booleano). Define una función encenderCoche que acepte el objeto
coche y cambie el valor de encendido a true. Muestra el estado del coche en la
consola antes y después de llamar a la función.
*/


//creamos el objeto
let coche ={
    marca: "Hummer",
    modelo: "Hummer",
    encendido: false
}


// Mostrar el estado inicial del coche
console.log(`Marca: ${coche.marca}, Modelo: ${coche.modelo}, Estado de Encendido: ${coche.encendido}`);

function encenderCoche(coche: {encendido:boolean}): void {
        coche.encendido = true;
}

//llamamos a la funcion para encender el coche
encenderCoche(coche);

console.log(`Marca: ${coche.marca}, Modelo: ${coche.modelo}, Estado de Encendido: ${coche.encendido}`);
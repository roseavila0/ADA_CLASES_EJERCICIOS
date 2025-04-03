//Ejercicio 10: Uso de objetos
/*Declara un objeto en TypeScript con propiedades de tipo string, number y
boolean. Accede a estas propiedades e imprímelas en la consola.*/

let persona = {
    nombre: "Jesús",
    edad: 74,
    esEstudiante: false,
    obtenerSaludo: function() {  //metodo
        return `Hola ${this.nombre}, tienes ${this.edad} años.`;
    }
};

// Accediendo a las propiedades del objeto
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`¿Es estudiante?: ${persona.esEstudiante}`);

// Llamando al método obtenerSaludo()
console.log(persona.obtenerSaludo());

//Ejercicio 2: Conversión de Objetos JavaScript a JSON
//1.En la misma carpeta clase2, crea un nuevo archivo llamado actividad2.js.
//2.Crea un objeto en JavaScript que represente a un estudiante con las
//siguientes propiedades: nombre, edad, curso, notas (un array de números).
//Instrucciones:
//• Convierte este objeto a una cadena JSON usando JSON.stringify().
//• Muestra la cadena JSON en la consola.
//• Luego, convierte la cadena JSON de nuevo a un objeto utilizando
//JSON.parse() y muestra el objeto en la consola.

let estudiante = {
    nombre : "Matteo",
    edad : 20,
    curso : "NodeJs",
    notas : [14,18,16,18,19]
};

let estudianteConvertiraJASON = JSON.stringify (estudiante); //convitiendo a JSON
console.log ("Mostrando la cadena JSON ", estudianteConvertiraJASON);  //mostrar la cadena JSON


let estudianteConvertirObjeto = JSON.parse (estudianteConvertiraJASON);
console.log("Mostrando el objeto", estudianteConvertirObjeto);

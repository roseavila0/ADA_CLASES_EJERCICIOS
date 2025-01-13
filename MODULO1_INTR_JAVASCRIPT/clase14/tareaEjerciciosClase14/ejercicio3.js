//Ejercicio 3: Clasificación de edades
//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.
// > <

const prompt = require ('prompt-sync')(); 
let edad = parseInt(prompt('Ingrese edad: '));
/*const clasificarEdad = (edad) => {
    if (edad <= 11){
        console.log('Niño');
    }else if  (edad > 11 && edad <= 19 ){
        console.log('Adolescente');
    }else if (edad > 19 && edad < 60 ){
        console.log('Adulto');   
    }else {
        console.log ('Adulto mayor');
    }
       
 };
clasificarEdad(edad);
*/

//OTRA FORMA DE SOLUCIONARLO
const clasificarEdad = (edad) =>
    edad <= 11? 'Niño' :
    edad <= 19? 'Adolescente' :
    edad < 60? 'Adulto' :
                'Adulto mayor' ;

console.log(clasificarEdad(edad)); 

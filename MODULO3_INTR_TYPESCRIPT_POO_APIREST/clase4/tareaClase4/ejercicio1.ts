/*Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
bucle for...in para recorrer y mostrar cada propiedad y su valor.*/

let participante = {
    nombre: "Rose",
    edad: 31,
    ciudad: "Guayaquil"
}

for (let propiedad in participante){
    console.log(`Clave: ${propiedad}, Valor: ${participante [propiedad as keyof typeof  participante]}`)
};




//EJEMPLO -RESOLUCION DE LA MAESTRA 
/*

export const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
  };
  
  for (const propiedad in persona) {
    if (Object.prototype.hasOwnProperty.call(persona, propiedad)) {
      console.log(propiedad); // Ej: 'nombre', 'edad', 'ciudad'
      
      // Usamos una aserción de tipo para acceder a los valores
      console.log(persona[propiedad as keyof typeof persona]); // Ej: 'Ana', 25, 'Madrid'
    }
  }

 */

//Cuando haces for...in, estás recorriendo todas las claves: tanto las que tú creaste como las que
//hereda el objeto. hasOwnProperty te ayuda a filtrar solo las que tú definiste.
   
//Crea una promesa que ya está rechazada.
const error = "Algo salio mal"

export const miPromesa = Promise.reject(error)

miPromesa
    .catch((error) =>  {
        console.log("Error de la promesa: ", error);
    
    })
const error = "Algo salio mal"

export const miPromesa = Promise.reject(error)

miPromesa
    .catch((error) =>  {
        console.log("Error de la promesa: ", error);
    
    })
const miPromesa = new Promise ((resolve, reject) =>{
    console.log("Estado: Pending. La operación...");

    //simulamos una operacion asincrona
    setTimeout(() => {
        const exito = Math.random() > 0.5

        if(exito) {
            resolve("Operación completada con exito.")
        }else {
            reject("La operación fallo.")
        }
    },2000)
})

//Manejo de la promesa
miPromesa
.then((resultado) =>{
    console.log("Exito: ", resultado);
})
.catch((error)=> {
    console.error("Error: ", error);
})
.finally(()=>{
    console.log("Promesa finalizada")
})

console.log("promesa creada, esperando resultado...");


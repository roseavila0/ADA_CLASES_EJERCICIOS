/*
Ejercicio 4: Promise.race() - Carrera entre Tareas
Consigna:
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios.
Usa Promise.race() para que el programa imprima solo la primera tarea que se
complete. Luego:
1. Asegúrate de que se imprime qué tarea ganó la carrera.
2. Controla posibles errores si alguna de las promesas falla.
*/

const tarea1 = new Promise ((resolve, reject) => { 
    setTimeout(() => resolve("Tarea 1")
,2000)
})

const tarea2 = new Promise ((resolve, reject) => { 
    setTimeout(() => resolve, ("Tarea 2")
,1000) 
});

const tarea3 = new Promise ((resolve, reject) => { 
    setTimeout(() => resolve, ("Tarea 3")
,4000)
});

Promise.race([tarea1,tarea2, tarea3])
    .then((resultado) =>{
        console.log("Resultado de la tarea resuelta, ganadora: ", resultado)
    })
    .catch((error) => {
      console.error("No se pudo completar la operación:", error);
    });


//1. Intervalo indefinido (cancelación manual)
// El setInterval() seguira ejecutandose hasta que los detengamos manualmente

let contador = 0
const intervalo = setInterval(() => {
    contador ++
    console.log(`Contador (indefinido): ${contador}`);

    //aquí podríamos llamar a clearInterval(intervalo) en algun momento para detener el intervalo.
    //Por ejemploConst, podrias tener alguna lógica
    //condicional externa o un evento que lo detenga, pero en este 
    //caso lo dejamos correr indefinidamente

}, 1000)

console.log("Intervalo indefinido iniciado")
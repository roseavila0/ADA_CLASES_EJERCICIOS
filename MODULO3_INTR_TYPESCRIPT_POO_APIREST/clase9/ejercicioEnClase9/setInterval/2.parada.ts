//2. Intervalo con codicion de parada 
//este intervalo se detendra automaticamente cuadno
//el contador llegue a 5

export let contador =0

const intervalo = setInterval(() => {
    contador ++
    console.log(`Contador (con condición): ${contador}`);

    if (contador === 5){
        clearInterval(intervalo) // cancela el intervalo cuando el contador llegue a 5
        console.log("Intervalo con condición detenido al llegar a 5")
    }
},1000)

/*Este segundo intervalo se ejecuta hasta que el contador llegue a 5
después de lo cual se detiene automaticamente. */
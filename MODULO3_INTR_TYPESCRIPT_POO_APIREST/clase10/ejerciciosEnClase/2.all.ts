//✅ Espera que todas se resuelvan. ❌ Si una falla, se rechaza todo.



//promesas de ejemplo
const promesa1 =  Promise.resolve(3)

//crea una promsa que se resuleve inmediatamente con valor 3

const promesa2 =  new Promise ((resolve, reject) =>{
    //crea una promesa que se resuelve despues de 100ms
    setTimeout(resolve,100,"Hola")
})

const promesa3 =  new Promise ((resolve, reject) =>{
    //crea otra promesa que se resuleve despues de 500ms
    setTimeout(resolve, 500, "chicas!")
})

//usamos el promise.all() para esperar que todas las promesas se resulvan
Promise.all([promesa1, promesa2, promesa3])
.then((resultados) =>{
    console.log("Resultados de todas las promesas: ", resultados);
})
.catch((error) =>{
    console.error("Una de las promesas fue rechazaada: ", error);
})


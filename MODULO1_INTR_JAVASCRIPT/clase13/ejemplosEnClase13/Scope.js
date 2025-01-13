//Ejemplo Scope Global y Local
// 1. Variable con Scope global
//Las variables definidas fuera de cualquier funcion son accesibles
//en todo el programa

let mensajeGlobal = 'Estoy en el Scope Global';

function mostrarMensaje()  {
    //2. Variable con Scope Local
    //las variables definidas dentro de una funcion solo existen
    //dentro de esa funcion
    let mensajeLocal = 'Estoy en el Scope Local'

    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}

mostrarMensaje(); 

//console.log(mensajeLocal); -- Error por llamar a la variable local.
// 

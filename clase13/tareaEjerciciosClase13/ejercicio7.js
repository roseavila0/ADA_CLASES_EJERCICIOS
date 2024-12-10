//Ejercicio 7: Mensaje según la hora
//Declara una variable global llamada horaActual (puedes asignarle un valor fijo). 
//Crea una función declarada llamada mostrarSaludo que imprima "Buenos días" si 
//la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.
// > <

let horaActual = 00;

const mostrarSaludo = function (){
    if(horaActual < 12){
        console.log('Buenos días, son las', horaActual + ':00');
    } else if (horaActual < 18){
        console.log('Buenas tardes, son las', horaActual + ':00');
    }else{
        console.log('Buenas noches, son las', horaActual + ':00');        
    }
} 
mostrarSaludo()


//otra forma de resolver
/*const mostrarSaludo = function () {
    const ahora = new Date(); // Obtén la fecha y hora actual
    const horaActual = ahora.getHours(); // Extrae la hora
    const minutosActuales = ahora.getMinutes(); // Extrae los minutos

    // Formateamos los minutos para que siempre sean dos dígitos
    const minutosFormateados = minutosActuales < 10 ? '0' + minutosActuales : minutosActuales;

    if (horaActual < 12) {
        console.log(`Buenos días, son las ${horaActual}:${minutosFormateados}`);
    } else if (horaActual < 18) {
        console.log(`Buenas tardes, son las ${horaActual}:${minutosFormateados}`);
    } else {
        console.log(`Buenas noches, son las ${horaActual}:${minutosFormateados}`);
    }
};

mostrarSaludo();*/

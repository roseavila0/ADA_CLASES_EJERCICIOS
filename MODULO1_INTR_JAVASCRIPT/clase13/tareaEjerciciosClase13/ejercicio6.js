//Convertir a minutos
//Crea una función declarada llamada convertirHorasAMinutos que 
//reciba un número de horas como parámetro y devuelva el total en minutos.

function convertirHorasAMinutos (horas){
    return horas * 60;
}

let horas = 5;
console.log(horas, 'horas es igual a:', convertirHorasAMinutos (horas), 'minutos.' );

//otra forma  de mostrar por consola sin declarar variable
//console.log('5 horas es igual a: ' + convertirHorasAMinutos(5) + ' minutos.');

//OJO
//Si el código es pequeño y directo, la forma más sencilla es más conveniente porque es clara y eficiente.
//Si el programa es más complejo o necesitas reutilizar la variable horas, la forma original es mejor porque es más adaptable.

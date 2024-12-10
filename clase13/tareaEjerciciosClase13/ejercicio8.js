//Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
//Crea una función expresada llamada convertirCelsiusAFahrenheit 
//que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. Fórmula:

//fahrenheit = (celsius x 9/5) +32

function convertirCelsiusAFahrenheit (temperaturagradoscelsius){
    let fahrenheit = (temperaturagradoscelsius * 9/5) + 32; //esto viene a ser una varible local
    return fahrenheit;
};

console.log((25), 'grados celsius es igual a ', convertirCelsiusAFahrenheit(25), ' grados fahrenheit');
console.log((40), 'grados celsius es igual a ', convertirCelsiusAFahrenheit(40), ' grados fahrenheit');

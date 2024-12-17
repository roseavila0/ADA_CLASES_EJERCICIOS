//Ejemplo 1: Función normal (declarada)

function multiplicarPorDos(num) {
    return num * 2;
}

console.log(multiplicarPorDos(5));


//Ejemplo 2: Función arrow (expresada) // > <
const multiplicarPorDosArrow = (num) => {
    return num *2;
}

console.log(multiplicarPorDosArrow(5));

//Ejemplo 3: Función mas simple todavía
const multiplicarPorDosArrowSimple = num => num*2;
console.log(multiplicarPorDosArrowSimple(5));
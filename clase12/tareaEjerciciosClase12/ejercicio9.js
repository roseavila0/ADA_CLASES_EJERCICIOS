//Ejercicio 9: Última aparición de un modelo de auto
//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.

//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada 
//columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.

//a)Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
//b)La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
//c)Por último, es necesario tener el total de gastos realizados en el mes.
//✓Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
//d)Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
//✓Posibles matrices para comprobar los resultados.

const matrizMes = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28]
];

// a) Suma de gastos de una semana
function gastosPorSemana(matriz, semana) {
    let suma = 0;
    for (let dia = 0; dia < matriz[semana].length; dia++) {
        suma += matriz[semana][dia];
    }
    return suma;
}

// b) Suma de gastos de un día
function gastosPorDia(matriz, dia) {
    let suma = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
        suma += matriz[semana][dia];
    }
    return suma;
}

// c) Suma de todos los gastos del mes
function gastosTotalesMes(matriz) {
    let total = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
        for (let dia = 0; dia < matriz[semana].length; dia++) {
            total += matriz[semana][dia];
        }
    }
    return total;
}

// d) Semana con mayor gasto
function semanaMayorGasto(matriz) {
    let maxGasto = 0;
    let semanaMax = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
        let gastoSemana = gastosPorSemana(matriz, semana);
        if (gastoSemana > maxGasto) {
            maxGasto = gastoSemana;
            semanaMax = semana;
        }
    }
    return semanaMax + 1; // +1 porque las semanas se muestran al usuario como 1, 2, 3, etc.
}

// e) Día con mayor gasto
function diaMayorGasto(matriz) {
    let maxGasto = 0;
    let diaMax = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
        for (let dia = 0; dia < matriz[semana].length; dia++) {
            if (matriz[semana][dia] > maxGasto) {
                maxGasto = matriz[semana][dia];
                diaMax = dia;
            }
        }
    }
    return diaMax + 1; // +1 para que los días se muestren como 1, 2, 3, etc.
}

// Ejemplo de uso
console.log(`El total de gastos de la semana 2 es: ${gastosPorSemana(matrizMes, 1)}`);
console.log(`El total de gastos del día 3 es: ${gastosPorDia(matrizMes, 2)}`);
console.log(`El total de gastos del mes es: ${gastosTotalesMes(matrizMes)}`);
console.log(`La semana con mayor gasto es la semana: ${semanaMayorGasto(matrizMes)}`);
console.log(`El día con mayor gasto es el día: ${diaMayorGasto(matrizMes)}`);

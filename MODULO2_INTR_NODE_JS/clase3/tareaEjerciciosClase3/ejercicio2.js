//Actividad 2: Seguimiento de series de televisión
/*Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la
cantidad de temporadas de una serie.
Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.
• ¿Qué es fs.existsSync()?
• El método fs.existsSync() es parte del módulo fs (file system) en Node.js. Este método se usa para comprobar si un archivo o
directorio existe en el sistema de archivos de manera sincrónica, lo que significa que el código se ejecuta y espera a que la operación se
complete antes de continuar con el siguiente paso.
• Sintaxis: fs.existsSync(path); */



const fs = require('fs');
const filePath = './series.json';

// Leer los argumentos de la consola
const args = process.argv.slice(2);
const comando = args[0];             // Primer argumento: comando (registrar, listar, actualizar)
const nombreSerie = args[1];         // Segundo argumento: nombre de la serie
const temporadas = args[2];          // Tercer argumento: cantidad de temporadas



//const args = process.argv.slice(2); Esa línea es fundamental cuando quieres leer datos desde la consola en Node.js. Vamos a desglosarla paso a paso:

//📌 Significado de const args = process.argv.slice(2);
//process
//Es un objeto global de Node.js que da información y control sobre el proceso de ejecución actual.

//process.argv
//Es un arreglo que contiene los argumentos pasados al ejecutar el programa desde la consola.

//"argv" significa Argument Vector.
//Incluye información como la ruta del ejecutable de Node.js y el archivo que se está ejecutando.
//.slice(2)
//El método .slice(2) elimina los dos primeros elementos del arreglo para quedarnos solo con los argumentos útiles que nosotros escribimos.


// 1️⃣ Leer las series desde el archivo
/*Verifica si el archivo existe.
Si no existe, lo crea con un arreglo vacío.
Lee y devuelve las series.*/

const leerSeries = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');  // Crear el archivo si no existe
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

// 2️⃣ Escribir series en el archivo
const escribirSerie = (series) => {
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2));  // CONVIERTE Y Guarda el arreglo en JSON
};

// 3️⃣ Registrar una nueva serie
const registrarSerie = (nombreSerie, numTemporadas) => {
    const series = leerSeries();
    series.push({ nombre: nombreSerie, temporadas: numTemporadas });
    escribirSerie(series);
    console.log(`Serie registrada: "${nombreSerie}" con ${numTemporadas} temporadas.`);
};

/*Lee las series actuales.
Agrega una nueva serie con su nombre y temporadas.
Guarda los cambios.*/

// 4️⃣ Listar todas las series
//Lee las series y las imprime en consola.

const listarSeries = () => {
    const series = leerSeries();
    console.log("📺 Lista de series:");
    series.forEach(serie => {
        console.log(`- ${serie.nombre}: ${serie.temporadas} temporadas`);
    });
};


// 5️⃣ Actualizar temporadas de una serie
/*Busca la serie por nombre.
Si la encuentra, actualiza el número de temporadas.
Si no, muestra un mensaje de error.*/

const actualizarTemporadas = (nombreSerie, nuevasTemporadas) => {
      const series = leerSeries();
      const serie = series.find (serie => serie.nombre === nombreSerie); //.find() Es un método de los arreglos en JavaScript que busca un elemento que cumpla con una condición.

      //ANALISIS DE LA FUNCION FLECHA (YO NO LE DEJE SOLO LA S, SINO QUE ESCRIBI SERIE PARA ENTENDER MEJOR PERO SI SE PUEDE ABREVIAR COMO INDICA A CONTINUACIÓN)
      /*s => s.nombre === nombreSerie
      Es una función flecha que define la condición de búsqueda.

      s representa cada elemento del arreglo series (es decir, cada serie).
      s.nombre accede al nombre de la serie.
      nombreSerie es el nombre de la serie que queremos buscar (lo que pasa el usuario o el programa).
      La condición s.nombre === nombreSerie compara el nombre de cada serie con el valor de nombreSerie.
      */


      if (serie) {
        serie.temporadas = Number(nuevasTemporadas);
        escribirSerie(series);
        console.log(`📢 Temporadas actualizadas: "${nombreSerie}" ahora tiene ${nuevasTemporadas} temporadas.`);
    } else {
        console.log(`❌ Serie no encontrada: "${nombreSerie}".`);
    }
};



    //Manejo de los comandos
    if (comando === "registrar") {
        if (nombreSerie && temporadas) {
        registrarSerie(nombreSerie, temporadas);
    } else {
        console.log("⚠️ Debes proporcionar el nombre de la serie y el número de temporadas.");
        }
    } else if (comando === "listar"){
        listarSeries();
    } else if (comando === "actualizar") {
        if (nombreSerie && temporadas) {
            actualizarTemporadas(nombreSerie, temporadas);
        } else {
            console.log("⚠️ Debes proporcionar el nombre de la serie y el nuevo número de temporadas.");
        }
    } else {
        console.log("❗ Comando no reconocido. Usa 'registrar', 'listar' o 'actualizar'.");
    }


//como escibir en consola
/*$ node ejercicio2.js registrar "Anne with an e" 3
Serie registrada: "Anne with an e" con 3 temporadas.

$  node ejercicio2.js listar
� Lista de series:
- Vikingos: 6 temporadas
- Outlander: 8 temporadas
- BreakingBad: 5 temporadas
- Anne with an e: 3 temporadas

$  node ejercicio2.js actualizar "Anne with an e" 4
� Temporadas actualizadas: "Anne with an e" ahora tiene 4 temporadas.

$  node ejercicio2.js listar
� Lista de series:
- Vikingos: 6 temporadas
- Outlander: 8 temporadas
- BreakingBad: 5 temporadas
- Anne with an e: 4 temporadas

*/











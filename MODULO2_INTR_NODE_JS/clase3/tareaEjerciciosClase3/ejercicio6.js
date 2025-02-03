//Actividad 6: Gestión de un diario personal
//Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
//1. Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
//2. Listar las entradas: Mostrar todas las entradas registradas.
//3. Eliminar una entrada: Eliminar una entrada específica por su ID.
//Pistas:
//• Usa un archivo JSON para guardar las entradas del diario.
//• Cada entrada tendrá una fecha y un texto.
//• Si el archivo no existe, comienza con un arreglo vacío. 
//=>


const fs = require("fs");
const filePath ="./diario.json";

const args = process.argv.slice(2);
const comando = args[0];
const descripcionAccion = args[1];

/*Los argumentos se dividen y se procesan para identificar el comando 
(e.g., agregar, listar) y los datos necesarios (e.g., texto de la entrada, ID para eliminar).*/


const leerEntradas = (diario) => {
    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, "[]");
    }
    const contenido = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(contenido);
};

//¿Por qué el parametro entradas?
//La función devuelve todas las entradas registradas en el archivo como un arreglo. 
//Por eso, se usa el término entradas para representar una colección de notas o registros.

//EL ARCHIVO ES DIARIO.JS, ENTRADAS ES EL NOMBRE DEL ARREGLO Y TEXTO ES EL CONTENIDO DEL ARREGLO, EL CONTENIDO DE UNA NUEVA ENTRADA.
//id: Es el identificador único para distinguir cada entrada.

const escribirEntradas = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2));  // CONVIERTE Y Guarda el arreglo en JSON
};

const agregarEntrada = (texto) => {
    const entradas = leerEntradas(); // Leemos las entradas existentes
    const fecha = new Date().toLocaleDateString(); // Obtenemos la fecha actual
    entradas.push({ id: entradas.length + 1, fecha, texto }); // Agregamos la nueva entrada
    escribirEntradas(entradas); // Guardamos la lista actualizada
    console.log(`Entrada agregada: "${texto}"`);
};

const listarEntradas = () => {
    const entradas = leerEntradas();
    console.log("Entradas del diario");
    entradas.forEach(entrada => {
        console.log(`${entrada.id}. ${entrada.fecha}: ${entrada.texto}`) 
    });
};

const eliminarEntrada = (idEntrada) => {
    const entradas = leerEntradas ();
    const entradasFiltradas = entradas.filter((entrada) => entrada.id !== parseInt(idEntrada)
    );
     if (entradas.length === entradasFiltradas.length) {
        console.log (`❌ No se encontró ninguna entrada con ID: ${idEntrada}`);
    } else {
        escribirEntradas(entradasFiltradas);
        console.log(`🗑️ Entrada con ID ${idEntrada} eliminada.`);
    }
};

//programar comandos
if (comando === "agregar"){
    if (descripcionAccion){
        agregarEntrada(descripcionAccion);
    }else{ 
        console.log("❗ Debes ingresar un texto para agregar una entrada.");
    }
} else if (comando === "listar") {
    listarEntradas();
} else if (comando === "eliminar") {
    if (descripcionAccion) {
        eliminarEntrada(descripcionAccion);
    } else {
        console.log("❗ Debes ingresar el ID de la entrada a eliminar.");
    }
} else {
    console.log("❗ Comando no reconocido. Usa: agregar, listar o eliminar.");
}


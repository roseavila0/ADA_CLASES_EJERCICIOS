/*
Actividad 3: Registro de tareas pendientes
/Consigna: Crea un programa para gestionar tus tareas pendientes. El
programa debe permitirte:
1. Agregar una tarea: Registrar una tarea pendiente con su
descripción.
2. Listar las tareas: Mostrar todas las tareas registradas.
3. Eliminar una tarea: Eliminar una tarea de la lista.
Pistas:
• Usa un archivo JSON para guardar las tareas.
• Si el archivo no existe, comienza con un arreglo vacío.
• Eliminar una tarea se puede hacer por su ID.
*/

const fs = require('fs');
const filePath = './tareas.json';

const args = process.argv.slice(2);
const comando = args[0];             // Primer argumento: comando (registrar, listar, eliminar)
const descripcionTarea = args[1];         // Segundo argumento: descripción de la tarea o ID para eliminar
     


//leer las tareas desde el archivo
const leerTareas = () => {
    if (!fs.existsSync(filePath)) {
       fs.writeFileSync(filePath, "[]");
    }
    const contenido = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(contenido);
    };

// Escribir tareas en el archivo = 2️⃣ Guardar tareas (escribirTareas) /Guarda las tareas en el archivo tareas.json como formato JSON.
const escribirTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2));  // CONVIERTE Y Guarda el arreglo en JSON
};

//agregar tareas

const agregarTarea = (descripcionTarea) => {
    const tareas = leerTareas();
    tareas.push({id: tareas.length +1 , descripcion: descripcionTarea, completada: false});
    escribirTareas(tareas)
    console.log(`Tarea registrada: "${descripcionTarea}".`)
};


//listar todas las tareas
const listarTareas = () => {
    const tareas = leerTareas();
    console.log("Lista de tareas:");
    tareas.forEach((tarea) => { 
        const estado = tarea.completada ? "✔️" : "❌" ;//mostrar que la tarea esta completada o no
        console.log( `${tarea.id}. ${tarea.descripcion} - ${estado}`);
    })
};

//eliminar una tarea

const eliminarTarea = (id) => {
    const tareas = leerTareas();
    const tareasFiltradas = tareas.filter(tareas => tareas.id !== parseInt(id));

    if (tareas.length === tareasFiltradas.length){
        console.log(`❌ No se encontró ninguna tarea con el ID: ${id}`);
    } else {
        escribirTareas(tareasFiltradas);
        console.log(`🗑️ Tarea con ID ${id} eliminada.`);
    }
};
    //manejo de comandos
    if (comando === "agregar"){
        if (descripcionTarea) {   //Ahora, verifica si el segundo argumento (la descripción de la tarea) fue proporcionado.
            agregarTarea(descripcionTarea); //Si sí hay una descripción, se ejecuta la función agregarTarea(descripcionTarea).
        } else{
        console.log("⚠️ Debes escribir la descripción de la tarea.");
        }
    } else if (comando === "listar") {
    listarTareas();

    } else if (comando === "eliminar") {
      if (descripcionTarea){
        eliminarTarea(descripcionTarea);
      } else {
        console.log ("⚠️ Debes proporcionar el ID de la tarea que deseas eliminar.");
      }
    } else {
    console.log ("❓ Comando no reconocido. Usa 'agregar', 'listar' o 'eliminar'.");
};




//resolución de profe BERNI
/*

const fs = require('fs');
const filePath = './tareas.json'; // Archivo donde se almacenarán las tareas

// Función para leer las tareas desde el archivo
const leerTareas = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

// Función para escribir las tareas en el archivo
const escribirTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)); // Escribimos las tareas en el archivo
};

// Agregar una tarea
const agregarTarea = (descripcion) => {
    const tareas = leerTareas(); // Leemos las tareas existentes
    tareas.push({ id: tareas.length + 1, descripcion }); // Agregamos la nueva tarea
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log(`Tarea agregada: "${descripcion}"`);
};

// Listar las tareas
const listarTareas = () => {
    const tareas = leerTareas(); // Leemos las tareas
    console.log('Lista de tareas pendientes:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion}`);
    });
};

// Eliminar una tarea
const eliminarTarea = (idTarea) => {
    let tareas = leerTareas(); // Leemos las tareas
    tareas = tareas.filter(tarea => tarea.id !== idTarea); // Filtramos para eliminar la tarea por ID
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log(`Tarea eliminada.`);
};

// Ejemplo de uso de las funciones
agregarTarea('Hacer la compra');
listarTareas();
eliminarTarea(1);
listarTareas();

*/
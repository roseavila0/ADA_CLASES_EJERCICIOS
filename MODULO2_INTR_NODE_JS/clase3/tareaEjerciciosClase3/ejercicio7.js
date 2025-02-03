//Actividad 7: Control de tareas diarias
//Consigna: Crea un programa para gestionar tus tareas diarias. El
//programa debe permitirte:
//1. Agregar una tarea diaria: Registrar una nueva tarea con su
//descripción y estado.
//2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
//3. Marcar una tarea como completada: Cambiar el estado de una
//tarea de "pendiente" a "completada".
//Pistas:
//• Usa un archivo JSON para guardar las tareas.
//• El estado de cada tarea puede ser "pendiente" o "completada".
//• Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs');
const filePath = './tareasDiarias.json'; // Archivo donde se almacenarán las tareas

// Función para leer las tareas desde el archivo
const leerTareasDiarias = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

// Función para escribir las tareas en el archivo
const escribirTareasDiarias = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)); // Escribimos las tareas en el archivo
};

// Agregar una tarea
const agregarTareaDiaria = (descripcion) => {
    const tareas = leerTareasDiarias(); // Leemos las tareas existentes
    tareas.push({ id: tareas.length + 1, descripcion, estado: 'pendiente' }); // Agregamos la nueva tarea con estado "pendiente"
    escribirTareasDiarias(tareas); // Guardamos la lista actualizada
    console.log(`Tarea agregada: "${descripcion}"`);
};

// Listar las tareas
const listarTareasDiarias = () => {
    const tareas = leerTareasDiarias(); // Leemos las tareas
    console.log('Lista de tareas diarias:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion} - Estado: ${tarea.estado}`);
    });
};

// Marcar una tarea como completada
const completarTareaDiaria = (idTarea) => {
    const tareas = leerTareasDiarias(); // Leemos las tareas
    const tarea = tareas.find(t => t.id === idTarea); // Buscamos la tarea por ID
    if (tarea) {
        tarea.estado = 'completada'; // Cambiamos el estado a "completada"
        escribirTareasDiarias(tareas); // Guardamos la lista actualizada
        console.log(`Tarea completada: "${tarea.descripcion}"`);
    } else {
        console.log('Tarea no encontrada.');
    }
};

// Ejemplo de uso de las funciones
agregarTareaDiaria('Estudiar Node.js');
agregarTareaDiaria('Conseguir bastidor');
agregarTareaDiaria('Armar propuesta  convocatoria');
agregarTareaDiaria('Armar presupuesto y cronograma');
agregarTareaDiaria('armar portafolio');
listarTareasDiarias();
completarTareaDiaria(1);
completarTareaDiaria(3);
completarTareaDiaria(5);
listarTareasDiarias();


//SEGUNDA FORMA DE RESOLVER Y AL FINAL SE MANEJA UNA FORMA MAS DINAMICA DE INGRESAR LOS DATOS
/*
const fs = require('fs');
const filePath = './tareasDiarias.json';

const args = process.argv.slice(2);
const comando = args[0];
const descripcion = args[1];

// Leer tareas desde el archivo
const leerTareasDiarias = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un objeto JS
};

// Escribir tareas en el archivo
const escribirTareasDiarias = (arregloTarea) => {
    fs.writeFileSync(filePath, JSON.stringify(arregloTarea, null, 2));
};

// 1. Agregar una tarea diaria
const agregarTareasDiarias = (descripcion) => {
    const tareasDiarias = leerTareasDiarias();
    tareasDiarias.push({
        id: tareasDiarias.length + 1,
        tarea: descripcion,
        completada: false,
    });
    escribirTareasDiarias(tareasDiarias);
    console.log(`Tarea agregada: "${descripcion}".`);
};

// 2. Listar las tareas diarias
const listarTareasDiarias = () => {
    const tareasDiarias = leerTareasDiarias();
    console.log('Lista de tareas diarias:');
    tareasDiarias.forEach((tareaDiaria) => {
        const estado = tareaDiaria.completada ? '✔️ Completada' : '❌ Pendiente';
        console.log(`${tareaDiaria.id}. ${tareaDiaria.tarea} - Estado: ${estado}`);
    });
};

// 3. Marcar una tarea como completada
const marcarTareaCompletada = (idTarea) => {
    const tareasDiarias = leerTareasDiarias();
    const tarea = tareasDiarias.find((t) => t.id === parseInt(idTarea));

    if (tarea) {
        tarea.completada = true; // Cambiamos el estado a completada
        escribirTareasDiarias(tareasDiarias);
        console.log(`✔️ Tarea con ID ${idTarea} marcada como completada.`);
    } else {
        console.log(`❗ No se encontró una tarea con el ID ${idTarea}.`);
    }
};

// Manejo de comandos
if (comando === 'agregar') {
    if (descripcion) {
        agregarTareasDiarias(descripcion);
    } else {
        console.log('❗ Debes ingresar una descripción para la tarea.');
    }
} else if (comando === 'listar') {
    listarTareasDiarias();
} else if (comando === 'completar') {
    if (descripcion) {
        marcarTareaCompletada(descripcion);
    } else {
        console.log('❗ Debes ingresar el ID de la tarea a marcar como completada.');
    }
} else {
    console.log('❗ Comando no reconocido. Usa: agregar, listar o completar.');
}
    */
   
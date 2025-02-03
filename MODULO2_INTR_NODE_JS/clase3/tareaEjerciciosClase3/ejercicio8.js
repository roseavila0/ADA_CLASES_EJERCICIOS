//Actividad 8: Seguimiento de proyectos
//Consigna: Crea un programa para gestionar proyectos. El programa debe
//permitirte:
//1. Agregar un proyecto: Registrar un proyecto con su nombre y
//estado (pendiente o en progreso).
//2. Listar los proyectos: Mostrar todos los proyectos registrados.
//3. Actualizar el estado de un proyecto: Cambiar el estado de un
//proyecto a "finalizado" o "en progreso".
//Pistas:
//• Usa un archivo JSON para guardar los proyectos.
//• Si el archivo no existe, comienza con un arreglo vacío.
//• Cada proyecto debe tener un ID único.

const fs = require ("fs");
const filePath = "./gestionPoryectos.json";

const args = process.argv.slice(2);
const comando = args[0];
const nombreProyecto = args[1];
const idProyecto = args[1]; // Esto será el ID del proyecto para "estado"

const leerProyectos = () => {  
    if (!fs.existsSync(filePath)){ 
    fs.writeFileSync(filePath, "[]")
    };
    const contenido = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(contenido);
};

const escribirProyectos = (proyectos) => { 
    fs.writeFileSync(filePath, JSON.stringify(proyectos, null, 2));
 };

 //1. Agregar un proyecto: Registrar un proyecto con su nombre y
//estado (pendiente o en progreso).
 const agregarProyecto = (nombreProyecto) => {  
    const proyectos = leerProyectos();
    proyectos.push({id: proyectos.length +1, nombre: nombreProyecto, estado: "Pendiente"});
    escribirProyectos(proyectos);
    console.log(`Proyecto agregado ${nombreProyecto}`);
 };



//2. Listar los proyectos: Mostrar todos los proyectos registrados.
const listarProyectos = () => {  
    const proyectos = leerProyectos();
    console.log("Lista de proyectos:");
    proyectos.forEach((proyecto) => {
        console.log(`${proyecto.id}. ${proyecto.nombre} - Estado: ${proyecto.estado}`);
    });
};


//3. Actualizar el estado de un proyecto: Cambiar el estado de un
//proyecto a "finalizado" o "en progreso".
const actualizarEstadoProyecto  = (idProyecto) => { 
    const proyectos = leerProyectos();
    const proyecto =  proyectos.find((proyecto) => proyecto.id === parseInt(idProyecto));

    if (proyecto){
        proyecto.estado = "Finalizado";
        escribirProyectos(proyectos);
        console.log (`Proyecto con ID ${idProyecto} marcado como completado`);
    } else { 
        console.log(`❗no se encontro el proyecto con ID ${idProyecto} ingresado.`);
        }
     };

//MANEJO DE COMANDOS
if(comando === "agregar"){
    if (nombreProyecto){
        agregarProyecto(nombreProyecto)
    } else {
        console.log('❗ Debes ingresar el nombre de un proyecto.');
    }
} else if (comando === "listar") {
    listarProyectos();
} else if (comando === "estado") {
    if (idProyecto){
        actualizarEstadoProyecto(idProyecto);
    } else { 
        console.log('❗ Debes ingresar el ID del proyecto para cambiar su estado.');
    }
} else {
    console.log('❗ Comando no reconocido. Usa: agregar, listar o estado.');
};
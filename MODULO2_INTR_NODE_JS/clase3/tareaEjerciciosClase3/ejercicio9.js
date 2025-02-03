//Actividad 9: Registro de eventos
//Consigna: Crea un programa para registrar eventos. El programa debe
//permitirte:
//1. Agregar un evento: Registrar un evento con nombre, fecha y lugar.
//2. Listar los eventos: Mostrar todos los eventos registrados.
//3. Eliminar un evento: Eliminar un evento de la lista.
//Pistas:
//• Usa un archivo JSON para guardar los eventos.
//• Si el archivo no existe, comienza con un arreglo vacío.
//• Cada evento debe tener un ID único.

const fs =  require ("fs");
const filePath = "./registroDeEventos.json";

const args = process.argv.slice(2);
const comando = args[0];  


const leerEventos = () => {  
    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, "[]")
    };
    const contenido = fs.readFileSync(filePath, "utf-8");
    return (JSON.parse(contenido))
 };

const escribirEvento = (eventos) => { 
    fs.writeFileSync(filePath, JSON.stringify(eventos, null, 2))
};

//1. Agregar un evento: Registrar un evento con nombre, fecha y lugar.
const agregarEvento = (nombre, fecha, lugar) => {  
    const eventos = leerEventos();
    eventos.push({id: eventos.length +1, nombre, fecha, lugar});
    escribirEvento(eventos);
    console.log(`Evento agregado: ${nombre}, Fecha: ${fecha}, Lugar: ${lugar}. `)
};


//2. Listar los eventos: Mostrar todos los eventos registrados.
const listarEventos = () => {   
    const eventos = leerEventos();
    console.log("Lista de eventos: ")
    eventos.forEach (evento => { 
        console.log(`${evento.id}. ${evento.nombre} - Fecha: ${evento.fecha}, Lugar: ${evento.lugar }`)
    });
}; 

//3. Eliminar un evento: Eliminar un evento de la lista.
const eliminarEvento = (idEvento) => {  
    const eventos = leerEventos();
    eventosFiltrados = eventos.filter(evento => evento.id !== parseInt (idEvento));

    if (eventos.length === eventosFiltrados.length){
        console.log (`No se encontró ningun evento con ID ${idEvento}`);
    } else {
        escribirEvento(eventosFiltrados)
        console.log(`El evento con ID ${idEvento} ha sido eliminado de la lista`);
    }  
 };

 //comandos

 
if (comando === "agregar") {
    const [nombre, fecha, lugar] = args.slice(1);
    if (nombre && fecha && lugar) {
        agregarEvento(nombre, fecha, lugar);
    } else {
        console.log("❗ Debes proporcionar el nombre, fecha y lugar del evento.");
    }
} else if (comando === "listar") {
    listarEventos();
} else if (comando === "eliminar") {
    const idEvento = args[1];
    if (idEvento) {
        eliminarEvento(idEvento);
    } else {
        console.log("❗ Debes proporcionar el ID del evento a eliminar.");
    }
} else {
    console.log("❗ Comando no reconocido. Usa: agregar, listar o eliminar.");
};


 
 //ejemplo de como usar las funciones
 /*
 agregarEvento ("Rock Sinfónico", "2025-02-26", "Parque Forestal");
 listarEventos ();
 eliminarEvento (1);
 listarEventos;
*/
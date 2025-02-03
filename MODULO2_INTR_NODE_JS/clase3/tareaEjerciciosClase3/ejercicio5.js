/*
Actividad 5: Registro de contactos
Consigna: Crea un programa que permita registrar contactos con
nombre, teléfono y correo electrónico. El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista.
Pistas:
• Usa un archivo JSON para guardar los contactos.
• Si el archivo no existe, comienza con un arreglo vacío.
*/

const fs = require ("fs");
const filePath = "./contactos.json";

const args = process.argv.slice(2);
const comando = args[0];
const descripcionAccion = args[1];

const leerContactos = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, "[]");
    }
    const contenido = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(contenido);
};

const escribirContactos = (contactos) => {
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2 ));
};


const agregarContactos = (nombreContacto, numTelefono, correoElect) => {
    const contactos = leerContactos();
    contactos.push({ID: contactos.length +1, nombre: nombreContacto, telefono: numTelefono, correo: correoElect });
    escribirContactos(contactos);
    console.log(`Contacto registrado: "${nombreContacto}", telefono: "${numTelefono}", correo:"${correoElect}"`);
};

const listarContactos = () => {
    const contactos = leerContactos();
    console.log ("Lista de contactos: ");
    contactos.forEach(contacto => {
        console.log(`${contacto.ID}. ${contacto.nombre} - ${contacto.telefono} -${contacto.correo}`); 
    });   
};

const eliminarContactos = (id) => {
    const contactos = leerContactos();
    const contactoFiltrado = contactos.filter(contacto => contacto.ID !== parseInt(id)); //"si el id del contacto NO ES IGUAL al id que se pasó como argumento". //verifica que los valores sean diferentes tanto en valor como en tipo de dato. //
    //La función filter crea un nuevo arreglo excluyendo el contacto que tiene el mismo ID que el que se pasó como argumento. // Es decir, elimina el contacto con ese ID.
    
    if (contactos.length === contactoFiltrado.length){
        console.log (`❌ No se encontró ningun contacto con el ID: ${id}`);
    } else {
        escribirContactos(contactoFiltrado);
        console.log(`contacto con ID ${id} eliminado.`);
    };
}

//manejo de comandos 
if (comando === "agregar") {
    const [nombreContacto, numTelefono, correoElect] = descripcionAccion.split(",");
    if (nombreContacto && numTelefono && correoElect) {
        agregarContactos(nombreContacto.trim(), numTelefono.trim(), correoElect.trim());
    } else {
        console.log("❗ Debes ingresar: nombre, teléfono y correo separados por comas.");
    }

} else if (comando === "listar") {
    listarContactos();

} else if (comando === "eliminar") {
    if (descripcionAccion) {
        eliminarContactos(descripcionAccion.trim());
    } else {
        console.log("❗ Debes ingresar el ID del contacto a eliminar.");
    }

} else {
    console.log("❗ Comando no reconocido. Usa: agregar, listar o eliminar.");
}
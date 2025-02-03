/*
Ejercicio 6: Tu lista de metas
Consigna:
Es momento de planear tus metas. Crea un archivo llamado metas.json
con una lista vacía al principio. Luego, agrega metas como: “Aprender
Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
 Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
lista.
*/

const fs = require("fs");
const filePath = "./metas.json";

// Crea un archivo llamado metas.json con una lista vacía al principio.  
if (!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, "[]", "utf-8");
    console.log("archivo 'metas.json' creado con una lista vacía");
} else {
    console.log("El archivo 'metas.json' ya esta creado.");
}

//funciones para agregar metas al archivo
const agregarMetas = (nuevaMeta) => {
    const contenido = fs.readFileSync(filePath, "utf-8");
    const metas =  JSON.parse(contenido); //convertir a objeto js

    metas.push({texto: nuevaMeta, estado: "completa"});

//escribir lista actualizada en el archivo.
fs.writeFileSync(filePath, JSON.stringify(metas, null, 2), "utf-8");
console.log(`Meta agregada: " ${nuevaMeta}`);
};

agregarMetas("Terminar ejercicios de node.js - clase 3,4,5.");
agregarMetas("conseguir unas pasantias pagadas en programación mientas termino el curso");
agregarMetas("conseguir un trabajo remoto de programación");
agregarMetas("aprender node.js");
agregarMetas("viajar a japón");


//la profe BERNI resolvio de otra manera
/*

// Importamos el módulo fs para manejar archivos
const fs = require('fs');

// Creamos una lista vacía de metas
let metas = [];

// Agregamos metas a la lista
metas.push("Aprender Node.js");
metas.push("Viajar a Japón");

// Escribimos la lista en el archivo metas.json
fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
    if (err) {
        console.error("Error al crear tu lista de metas:", err);
    } else {
        console.log("¡Lista de metas creada con éxito! 🎯 Revisa metas.json.");
    }
});

*/
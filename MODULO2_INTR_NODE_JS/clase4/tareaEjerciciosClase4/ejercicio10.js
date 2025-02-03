/*
Ejercicio 10: ¡Haz un respaldo de tus metas!
Consigna:
Nunca está de más guardar una copia de seguridad. Escribe un programa
que copie el contenido de metas.json en un archivo llamado
respaldo_metas.json.
 Pista: Usa el método fs.copyFile para copiar archivos de manera
sencilla.
*/

const fs = require ("fs");

//guardo en unas variables las rutas(la original y la de resplado)
const archivoOriginal = "metas.json";
const archivoDeRespaldo = "respaldo_metas.json";

fs.copyFile(archivoOriginal, archivoDeRespaldo, (err) => {
    if(err){
        console.log("Error, no se puede respaldar el archivo", err);
    } else {
        console.log(`El archivo ${archivoOriginal} ha sido respaldado por el archivo ${archivoDeRespaldo}.`)
    }
});
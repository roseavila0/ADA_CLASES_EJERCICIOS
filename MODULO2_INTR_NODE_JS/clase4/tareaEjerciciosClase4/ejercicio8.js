/*
Ejercicio 8: Cuenta tus metas
Consigna:
¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
archivo metas.json y cuente cuántas metas tienes actualmente.
 Pista: Usa length para obtener la cantidad de elementos en la lista.
 */

const fs = require ("fs");

 fs.readFile("metas.json", "utf-8", (err, data) => {
    if(err){
        console.log("no se puede leer el archivo", err);
    } else {
        let metas = JSON.parse(data);


    let cantidadDeMetas =  metas.length;
    console.log (`La cantidad de metas registradas es: ${cantidadDeMetas}`);

     }
 });
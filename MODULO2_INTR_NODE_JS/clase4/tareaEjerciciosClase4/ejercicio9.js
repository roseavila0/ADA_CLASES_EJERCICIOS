/*
Ejercicio 9: Filtra tus metas completas
Consigna:
Supongamos que cada meta tiene un estado: “completa” o “pendiente”.
Filtra las metas que ya completaste y muéstralas en la consola.
 Pista: Modifica las metas para que sean objetos con un atributo
estado. Usa el método filter para obtener las completas.
*/

const fs = require ("fs");

fs.readFile("metas.json", "utf-8", (err, data) => {
    if(err){
         console.log("Error, no se ha podido leer el archivo.", err);
    } else {
        let metas = JSON.parse(data);

        //filtramos las metas completas
    const metasCompletas = metas.filter (meta => meta.estado === "completa");

    //mosstramos las metas completas
    console.log ("metas completas: ", metasCompletas);

    }
});
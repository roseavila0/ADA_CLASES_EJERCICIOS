/*
Ejercicio 7: Encuentra tu meta perdida
Consigna:
Revisa tu lista de metas en el archivo metas.json. Busca si una meta
específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
 Pista: Usa fs.readFile para leer el archivo y un método como find para
buscar en la lista.
*/

const fs = require ("fs");


// Meta que queremos buscar
const metaBuscada = "viajar a japón".toLowerCase();


// Leemos el archivo metas.json
fs.readFile('metas.json', 'utf-8', (err, data) => {
    if (err){
        console.log("Error al leer el archivo metas", err);
    } else {
         // Convertimos el contenido en una lista
        let metas = JSON.parse(data);
        

 // Verificamos si la meta ya está en la lista
        const metaTexto = metas.map(meta => meta.texto.toLowerCase());
       if (metaTexto.includes(metaBuscada)){
        console.log(`La meta "${metaBuscada}" ya esta incluida.`);
       } else {
        // Si no está, la agregamos y actualizamos el archivo
        metas.push({texto: metaBuscada, estado: "pendiente"});
       

       fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
        if (err) {
            console.log("Error al actualizar la lista de metas.",err);
        } else {
            console.log (`Meta "${metaBuscada}" , agregada.`);
        }
       });
    }
  }
});



/*
Ejercicio 4: ¿Existe tu perfil?
Consigna:
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
existe. Si no existe, crea uno nuevo con un perfil básico.
 Pista: Usa fs.existsSync para verificar la existencia del archivo.
 */

 const fs = require ("fs");
 //const filePath = "./perfil.json";

 // aqui se puede poner filePath o el nombre directo del archivo que en este caso es perfil.json
 if (fs.existsSync("perfil.json")) {
     console.log ("El archivo 'perfil.json' ya existe.")
} else { 
     const perfilBasico = {
        nombre: "Isabel",
        edad: 30,
        ciudadFavorita: "Milán"
     };
     
     fs.writeFile('perfil.json',JSON.stringify(perfilBasico, null, 2), (err)=> { 
        if(err){
            console.error("No se pudo crear el perfil básico", err);
        } else {
            console.log("Perfil básico creado exitosamente.");
        }
     })
};
    

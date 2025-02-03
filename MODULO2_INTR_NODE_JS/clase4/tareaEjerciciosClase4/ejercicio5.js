/*|
Ejercicio 5: ¡Despídete de tu perfil!
Consigna:
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
Verifica que el archivo existe antes de intentar borrarlo.
Pista: Usa fs.unlink para eliminar archivos
 */

const fs =  require ("fs");


if (fs.existsSync("perfil.json")){ 

fs.unlink("perfil.json", function(err){
    if(!err) {
        console.log("El archivo se ha eliminado");
    } else {
        throw err;
    }
});

}else { 
    console.log("El archivo perfil.json no existe, nada por eliminar")
};

//SI EJECUTE EL PROGRAMA Y SE ELIMINÓ EL ARCHIVO PERO VOLVI A DEJARLO ARMADO. ENTONCES SEGUIRA APARECIENDO EN LA CARPETA.
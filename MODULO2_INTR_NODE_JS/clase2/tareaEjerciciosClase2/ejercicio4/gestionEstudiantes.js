//3. En gestionEstudiantes.js:
//Importa el array desde estudiantes.js.
//Muestra en la consola los nombres de todos los estudiantes.
//Calcula y muestra el promedio de notas de un estudiante específico.
//Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON.



let estudiantes = require ('./estudiantes.js')    //IMPORTAMOS
//console.log(estudiantes);


function informacionEstudiantes (alumnos){ 
    let nombres = [];

    for (let i=0 ; i<alumnos.length ; i++){
        nombres.push( alumnos[i].nombre);
    } 
    return nombres;
}
console.log ("Los nombres de los estudiantes son: ", informacionEstudiantes(estudiantes));


function promedioNotas (alumno) {
    let sumaNotas = 0 ;

    if (alumno.notas && alumno.notas.length > 0) {
        // Calcular promedio
    } else {
        console.log("El alumno no tiene notas registradas.");
    }

    for (let i=0 ; i<alumno.notas.length ; i++){
        sumaNotas += alumno.notas[i];
    }

    let promedio = sumaNotas / alumno.notas.length;  
    return promedio;
}
console.log("El promedio de Arelys es:", promedioNotas(estudiantes[1]));

let nuevoEstudiante = { 
        nombre : "Violeta",
        edad : 21,
        curso : "JavaScript",
        notas : [19,19,17,18,19]   
}

estudiantes.push(nuevoEstudiante)
console.log("Lista de estudiantes actualizada: ", estudiantes);

const contenidoActualizado = JSON.stringify (estudiantes, null, 2);
console.log("Archivo actualizado correctamente en formato JSON", contenidoActualizado);

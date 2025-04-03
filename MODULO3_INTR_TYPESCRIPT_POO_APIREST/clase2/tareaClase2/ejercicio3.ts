/* Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola.*/


let deportista: {nombre: string, deporte: string, energia: number} = {
    nombre: "Melissa",
    deporte: "atletismo",
    energia: 80
};

//mostramos los datos iniciales
console.log(`Datos del deportista: 
             Nombre: ${deportista.nombre}, Deporte: ${deportista.deporte}, Energía: ${deportista.energia}`)



function entrenar (deportista: { nombre: string; deporte: string; energia: number }, horasEntrenamiento:number ): void {        //void: se usa en funciones que no retornar valor // No hay return, solo modifica deportista.energia, por lo que su tipo es void.
    deportista.energia -= horasEntrenamiento *5;                                     //disminuyendo la energía del deportista en 5 por cada hora de entrenamiento
    if (deportista.energia < 0) {
        deportista.energia = 0; 
    } 
}

//llamamos a la función entrenar
entrenar(deportista, 4);

//mostramos resultados finales, datos actualizados-
console.log(`Después de entrenar 4 horas: 
    Nombre: ${deportista.nombre}, Deporte: ${deportista.deporte}, Energía: ${deportista.energia}`);

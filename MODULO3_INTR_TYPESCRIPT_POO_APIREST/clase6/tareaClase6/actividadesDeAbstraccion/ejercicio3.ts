/*
Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
lectura.
*/

interface Usuario {
    nombre: string,
    edad?: number,
    readonly id: number
}

class UsuarioConcreto implements Usuario {
    constructor(public nombre: string, readonly id: number, public edad?:number){}
} 

//instanciamos un nuevo usuario
const usuario1 = new UsuarioConcreto("Alana", 3,19)
console.log(usuario1.nombre); 
console.log(usuario1.id); 
console.log(usuario1.edad); 

usuario1.id = 4;//mensaje que lanza consola: ejercicio3.ts:28:10 - error TS2540: Cannot assign to 'id' because it is a read-only property.
//xq no podemos modificar un readonly
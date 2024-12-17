//Ejercicio 2: Eliminar al último invitado
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
//El último invitado no puede asistir. Elimina al último invitado y muestra
//quién fue eliminado y el estado actualizado de la lista.

let listaDeInvitados = ["Ana", "Juan", "Carlos", "Sofía"];
let invitadoEliminado = listaDeInvitados.pop();

console.log('Invitado eliminado:', invitadoEliminado);
console.log('Lista actualizada', listaDeInvitados);

/*
4. Redes Sociales: Notificaciones de Amigos

Implementa un sistema de gestión de amigos en una red social. Cada amigo
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
notificación si un amigo se pone en línea.
*/
// Definimos la tupla para la póliza

// Definimos el tipo para un amigo
type Amigo = {
    nombre: string;
    estado: boolean; // true = en línea, false = fuera de línea
};

// Lista de amigos
const amigos: Amigo[] = [
    { nombre: "Mario", estado: false },
    { nombre: "Leo", estado: false },
    { nombre: "Melissa", estado: false }
];

// Simulador de cambio de estado (esto es solo para fines de prueba)
function simularCambioDeEstado() {
    amigos.forEach(amigo => {
        // Cambia aleatoriamente el estado
        amigo.estado = Math.random() < 0.5 ? true : false; //Math.random() genera un número decimal al azar entre 0 y 1. // “Si el número aleatorio es menor a 0.5, pon estado en true, si no, ponlo en false”.
    });
}

// Verifica el estado de los amigos cada 5 segundos
function verificarEstados() {
    setInterval(() => {
        simularCambioDeEstado(); // Simula cambios antes de verificar

        amigos.forEach(amigo => {
            if (amigo.estado) {
                console.log(`🔔 Tu amigo ${amigo.nombre} está en línea.`);
            }
        });

    }, 5000);
}

// Iniciar la verificación
verificarEstados();
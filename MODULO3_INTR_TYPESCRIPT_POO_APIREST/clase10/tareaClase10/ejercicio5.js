/*
Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
Consigna:
Crea una secuencia de promesas que simulen el flujo de un usuario que se
registra en una plataforma y luego recibe un mensaje de bienvenida. La
secuencia debe ser:
1. Registrar Usuario (promesa que tarda 2 segundos).
2. Enviar Email de Bienvenida (promesa que tarda 1 segundo).
3. Mostrar Mensaje Final al completar ambas tareas.
Si alguna de las promesas falla, debe imprimirse un mensaje de error.
*/

/*
const registrarUsuario= new Promise ((resolve, reject) => { 
    setTimeout(() => resolve("Usuario registrado")
,2000)
})

const enviarEmail= new Promise ((resolve, reject) => { 
    setTimeout(() => resolve("Email de Bienvenida enviado")
,1000)
})

Promise.all([registrarUsuario, enviarEmail])
    .then((resultados) =>{
        console.log("Tareas completadas, registro exitoso.", resultados)
    })
    .catch((error) => {
      console.error("No se pudo completar el registro:", error);
    });

    */




    //OTRA FORMA DE RESOLVER PERO CON ANIDADOS, ES MEJOR ESTA FORMA XQ ESPERA QUE PRIMERO SE COMPLETE UNA TAREA Y DE AHI VA A LA OTRA
    function registrarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Usuario registrado.");
            resolve();
        }, 2000);
    });
}

function enviarEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("📧 Email de bienvenida enviado.");
            resolve();
        }, 1000);
    });
}

registrarUsuario()
    .then(() => enviarEmail())
    .then(() => console.log("🎉 ¡Registro completado! Bienvenido."))
    .catch(() => console.error("❌ Hubo un error en el proceso."));
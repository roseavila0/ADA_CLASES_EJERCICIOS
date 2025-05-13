/*
Ejercicio 2: Promesas - Simulador de Envío de Correos Electrónicos
Consigna:
Vas a crear una función llamada enviarCorreo() que simule el envío de un correo
electrónico usando una promesa. La promesa debe cumplir con los siguientes
requisitos:
1. Resolver si el correo fue enviado exitosamente (usa Math.random() para
simular éxito o error).
2. Rechazar si ocurre un fallo en el envío.
3. La operación debe tardar 2 segundos en completarse (usa setTimeout()).
4. Implementa .then(), .catch(), y .finally() para manejar la respuesta:
o Si el correo se envía exitosamente, imprime el mensaje: "Correo
enviado a [destinatario]".
o Si falla, imprime: "Error: No se pudo enviar el correo a [destinatario]".
o En finally(), muestra siempre el mensaje: "Operación finalizada".
Implementa la función para enviar correos a dos destinatarios distintos.
*/

function enviarCorreo(texto, destinatario){
    correoElectronico = texto;
    return new Promise ((resolve, reject) => {
        console.log(`Enviando ${correoElectronico} a ${destinatario}`)


     setTimeout(() => {
        const exito = Math.random() > 0.5     //Math.random() se usa para generar un número aleatorio entre 0 (incluido) y 1 (excluido). Es decir, puede darte un número como: 0.12345, 0.978, etc.

        if(exito) {
            resolve(`Correo enviado a ${destinatario}`)
        }else {
            reject(`No se pudo enviar el correo a ${destinatario}`)
        }
    },2000)
})
}
//Manejo de la promesa
enviarCorreo("Hola Hola", "rose94")
.then((mensaje) =>{
    console.log(mensaje);
})
.catch((error)=> {
    console.error("Error: ", error);
})
.finally(()=>{
    console.log("Operación finalizada")
})



enviarCorreo("Recordatorio de reunión", "jose22")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operación finalizada");
  });


  //¿Entonces el tiempo influye en que unos mensajes si se envien y todo correcto y otroa no?
//No. Aunque el setTimeout tarda 2 segundos, siempre espera lo mismo para todos los envíos. Lo que determina el éxito o fracaso no es el tiempo, sino el resultado de Math.random().

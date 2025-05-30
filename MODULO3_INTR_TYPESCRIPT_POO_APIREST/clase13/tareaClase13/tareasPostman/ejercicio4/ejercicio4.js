/*
Ejercicio 4. Consulta de Aeropuertos (GET)
Objetivo: Realizar una solicitud GET para obtener todos los aeropuertos.
• API: AirportGap API
• URL: https://airportgap.com/api/v1/airports
• Método: GET
• Descripción: Realiza una solicitud GET para obtener todos los aeropuertos
disponibles. Consulta la respuesta y muestra la lista de aeropuertos en la
consola.
Pistas:
• Asegúrate de seleccionar el método GET en Postman y de no olvidar que
la respuesta será un array en formato JSON.

*/

/*NO HICE ESTA OPCION PORQUE LA PAG DE LA API ME PEDIA UNA CONTRASEÑA PARA OBTENER EL TOKEN
Opción 1: Simulación con Postman
Solo escribes cómo lo harías si tuvieras el token. Ejemplo:

Método: GET

URL: https://airportgap.com/api/airports

En la pestaña Authorization, seleccionas:

Tipo: Bearer Token

Token: aquí va el token (simulado)

Le das a Send y en la respuesta aparecerían los aeropuertos (si tuvieras el token).
*/

// Este código simula una solicitud GET a la API de AirportGap para obtener todos los aeropuertos

fetch("https://airportgap.com/api/airports", {
  method: "GET",
  headers: {
    "Authorization": "Bearer TU_TOKEN_AQUI", // aquí iría el token real que te da la página
    "Content-Type": "application/json"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al obtener aeropuertos");
    }
    return response.json();
  })
  .then(data => {
    console.log("Aeropuertos:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });


  /*
   ¿Qué aprendes aquí?
A consumir APIs externas.

A usar tokens (autenticación).

A diferenciar entre pedir datos tuyos (con routers) y pedir datos de terceros (con una API como AirportGap).*/

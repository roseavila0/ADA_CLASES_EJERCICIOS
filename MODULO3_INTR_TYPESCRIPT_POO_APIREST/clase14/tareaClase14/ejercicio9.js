/*
Ejercicio 9: Simular una búsqueda con una API externa
Crea un endpoint GET /external/users que realice una solicitud HTTP a
una API pública para obtener una lista de usuarios. Luego, devuelve los
datos obtenidos al cliente.
• Usa la API pública: https://jsonplaceholder.typicode.com/users.
• Asegúrate de que el cliente reciba los datos correctamente desde la
API externa.
+/
*/
//IMPORTANTE !!!!!
//Axios = una herramienta para hacer solicitudes HTTP y trabajar fácilmente con APIs externas


const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Ruta para obtener usuarios desde una API externa
app.get("/external/users", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const externalUsers = response.data;

    res.json(externalUsers); // enviamos los datos al cliente
  } catch (error) {
    console.error("Error al obtener los usuarios externos:", error.message);
    res.status(500).json({ error: "Error al obtener los usuarios externos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
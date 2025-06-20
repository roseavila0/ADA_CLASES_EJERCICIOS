/*
Ejercicio 10: Buscar un usuario por nombre exacto en una API
externa
Crea un endpoint GET /external/users/search que reciba un parámetro de
consulta (name) y busque un usuario cuyo nombre coincida exactamente
en la API pública https://jsonplaceholder.typicode.com/users.
• Si no se encuentra un usuario con ese nombre, devuelve un error
404.
• Si el parámetro name no está presente, responde con un error 400.
*/

const express = require ("express");
const axios = require ("axios")

const app = express();
const PORT = 3000;

app.get("/external/users/search", async (req, res) => {
const {name} = req.query // Usamos req.query para parámetros como ?name=...


  if (!name) {
    return res.status(400).json({ error: "No se proporcionó el parámetro 'name'." });
  }

try{
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
const externalUsers = response.data;

const user = externalUsers.find(user => user.name === name);

if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.json(user);
    
} catch (error) {
  console.error("Error al obtener los usuarios externos:", error.message);
  res.status(500).json({ error: "Error al obtener los usuarios externos." });
}
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
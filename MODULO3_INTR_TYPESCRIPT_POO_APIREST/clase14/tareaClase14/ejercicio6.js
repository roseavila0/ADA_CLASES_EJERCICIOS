/*
Ejercicio 6: Obtener usuarios ordenados alfabéticamente
Crea un endpoint GET que devuelva la lista de usuarios ordenada
alfabéticamente por su nombre.
• Si se proporciona el parámetro de consulta order con el valor desc,
ordena la lista en orden descendente.
• Si no se especifica order o su valor es diferente de desc, ordena en
orden ascendente.
*/


const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Alina", email: "alina@gmail.com" },
  { id: 2, name: "Lana", email: "lanalana@gmail.com" }
];

// ✅ Endpoint GET para obtener usuarios ordenados
app.get("/users", (req, res) => {
  const { order } = req.query;

  const sortedUsers = [...users].sort((a, b) => {
    return order === "desc"
      ? b.name.localeCompare(a.name) // descendente
      : a.name.localeCompare(b.name); // ascendente por defecto
  });

  res.json(sortedUsers);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
/*
Para API REST Actividades
Ejercicio 1: Actualizar datos de un usuario
Crea un endpoint PUT para actualizar la información de un usuario
existente en la lista. El cliente debe enviar el ID del usuario como
parámetro dinámico en la URL (por ejemplo, /users/1) y los nuevos datos
del usuario en el cuerpo de la solicitud en formato JSON.
• Si el usuario no existe, responde con un error 404.
• Si los datos enviados son incompletos (falta name o email),
responde con un error 400.
• Si todo está correcto, actualiza los datos del usuario y responde con
el usuario actualizado.
*/

const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Rose", email: "rose@example.com" },
  { id: 2, name: "Ana", email: "ana@example.com" },
];

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).send("Usuario no encontrado");
  }

  if (!name || !email) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  user.name = name;
  user.email = email;

  res.json(user);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});

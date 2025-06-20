/*
Ejercicio 8: Obtener estadísticas de usuarios
Crea un endpoint GET /users/stats que devuelva las siguientes
estadísticas sobre los usuarios:
1. Cantidad total de usuarios.
2. Edad promedio de los usuarios.
3. Usuario más joven.
4. Usuario más viejo.
*/

const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Alina", email: "alina@gmail.com", age: 23 },
  { id: 2, name: "Lana", email: "lanalana@gmail.com", age: 15 },
  { id: 3, name: "Valeria", email: "val@gmail.com", age: 30 }
];

app.get("/users/stats", (req, res) => {
  const totalUsers = users.length;

  // Calcular edad promedio
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalUsers ? totalAge / totalUsers : 0;

  /*otra forma de leer average 
  let averageAge;
if (totalUsers) {
  averageAge = totalAge / totalUsers;
} else {
  averageAge = 0;
}
  */

  // Usuario más joven
  const youngest = users.reduce((min, user) =>
    user.age < min.age ? user : min
  );

  // Usuario más viejo
  const oldest = users.reduce((max, user) =>
    user.age > max.age ? user : max
  );

  // Devolver respuesta con las estadísticas
  res.json({
    totalUsers,
    averageAge,
    youngest,
    oldest
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});

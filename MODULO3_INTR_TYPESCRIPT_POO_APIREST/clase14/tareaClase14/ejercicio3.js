/*
Ejercicio 3: Filtrar usuarios por nombre
Crea un endpoint GET que reciba un parámetro de consulta (query
parameter) llamado name y devuelva una lista de usuarios cuyo nombre
coincida parcial o totalmente con el valor enviado. Si no se encuentra
ningún usuario, devuelve un arreglo vacío.

*/

const express = require ("express");
const app = express();
app.use(express.json());

const users =["Ana", "Gabriel", "Nicole", "Jesús"];

app.get("/users/name",(req, res) => {
    const name = req.query.name;

     if (!name) {
    return res.status(400).json({ message: "Falta el parámetro 'name'" });
  }

   const coincidenciaDeUsuarios = users.filter(user =>   
         user.toLowerCase().includes(name.toLowerCase())
   );


    res.json(coincidenciaDeUsuarios); // Devuelve arreglo vacío si no hay coincidencias
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000/users/name");
});
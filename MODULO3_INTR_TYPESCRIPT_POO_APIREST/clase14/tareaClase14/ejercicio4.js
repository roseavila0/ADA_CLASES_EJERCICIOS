/*
Ejercicio 4: Contar usuarios con un dominio específico en su
correo
Crea un endpoint GET que reciba un parámetro de consulta (query
parameter) llamado domain. El endpoint debe contar cuántos usuarios
tienen un correo electrónico que pertenezca a ese dominio (por ejemplo,
@example.com) y devolver el resultado.
• Si no se proporciona el parámetro domain, responde con un error
400.
• Si ningún usuario tiene un correo con ese dominio, devuelve 0.
*/

const express = require("express");
const app = express();
app.use(express.json());

const users =["anita@gmail.com", "eli_@example.com", "vlady0@example.com", "rose_@hotmail.com"]

app.get("/users/domain", (req, res) => {
    const domain = req.query.domain;
   

    if (!domain) {
        return res.status(400).json({message: "Falta el parametro 'domain'"});
    }

  
  // Filtra los usuarios que terminan con el dominio solicitado
     const conteo = users.filter(user =>
    user.toLowerCase().endsWith(domain.toLowerCase())
    ).length;

    res.json(conteo);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000/users/domain");
});


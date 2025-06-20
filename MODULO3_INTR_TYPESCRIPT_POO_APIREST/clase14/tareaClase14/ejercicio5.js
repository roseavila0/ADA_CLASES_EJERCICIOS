/*
Ejercicio 5: Agregar múltiples usuarios con validación
Crea un endpoint POST que permita agregar múltiples usuarios en una
sola solicitud. El cuerpo de la solicitud debe ser un arreglo de objetos con
name y email.
• Si algún objeto del arreglo no tiene los campos requeridos,
responde con un error 400 indicando específicamente qué usuario
es inválido.
• Si todo está correcto, agrega los usuarios a la lista y responde con
la lista actualizada.
*/

const express = require("express");
const app = express();
app.use(express.json());

const users = [
{
    id: 1,
    name: "Alina",
    email: "alina@gmail.com"
},

{
    id: 2,
    name: "Lana",
    email: "lanalana@gmail.com"
}
]

app.post("/users", (req, res) => {
    const newUsers = req.body;

    if (!Array.isArray(newUsers)){
        return res.status(400).send("El cuerpo debe ser una array/arreglo.")
    }

    //si , si es un array se valida cada usuario
    for(let i=0; i < newUsers.length; i++ ){
        const{name, email} = newUsers[i];
        
    if(!name || !email) {
        return res.status(400).send(`El usuario en la posición ${i} tiene datos incompletos.`)
    }
    }

    //Agregamos los usuarios a la lista
    newUsers.forEach(user => {
        const id = users.length ? users [users.length -1].id + 1 : 1; //se genera un ID unico
        users.push({id, ...user});
    })

      res.json(users);
})

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})

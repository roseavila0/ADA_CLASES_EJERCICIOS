/*
Ejercicio 2: Eliminar un usuario
Crea un endpoint DELETE para eliminar un usuario de la lista utilizando un
parámetro dinámico :id en la URL (por ejemplo, /users/1).
• Si el usuario no existe, responde con un error 404.
• Si el usuario es eliminado exitosamente, responde con un mensaje
confirmando la eliminación.
*/

const express = require("express");
const app = express();
app.use(express.json());

app.delete("/users/:id", (req, res) =>{
const {id}= req.params

if (!id) {
    return res.status(400).send('ID no existe');
}

res.json({message: `ID: ${id} eliminado.`})
})

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/add-user');
});
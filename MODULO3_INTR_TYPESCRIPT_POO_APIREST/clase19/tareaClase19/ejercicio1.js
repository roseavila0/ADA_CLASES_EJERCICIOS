/*
Actividad 1: Crear una API REST con un Endpoint de Prueba
Consigna:
1. Crea un proyecto de Node.js en una carpeta nueva.
2. Configura Express y express.json().
3. Define un endpoint GET en la ruta /api/message que devuelva un
mensaje JSON como respuesta.
*/

const express =  require("express");
const app = express();
app.use(express.json());
PORT = 3000;

app.get("/api/message", (req, res) =>{
    res.json({message: "HOLA HOLAAAA..."})
});

app.listen(PORT, () =>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})

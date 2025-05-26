/*
Ejercicio 1: Creando un Endpoint GET para listar usuarios
Consigna: Imagina que tienes una aplicación que necesita mostrar una lista de
usuarios. Tu tarea es crear un endpoint GET en Express que responda con un
listado de usuarios en formato JSON. Cada usuario debe tener un nombre
(name) y un correo electrónico (email).
Utiliza el método res.json() para enviar la respuesta. Asegúrate de que el
servidor funcione correctamente en el puerto 3000 y de imprimir un mensaje en
la consola al iniciarlo.
*/

const express =  require ('express')
const app = express()
const PORT = 3000

const usuarios = [
  { name: 'Ana', email: 'ana@example.com' },
  { name: 'Carla', email: 'carla@example.com' },
  { name: 'Luisa', email: 'luisa@example.com' }
]

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}/usuarios `);
})


//abre el navegador y prueba http://localhost:${PORT}/usuarios

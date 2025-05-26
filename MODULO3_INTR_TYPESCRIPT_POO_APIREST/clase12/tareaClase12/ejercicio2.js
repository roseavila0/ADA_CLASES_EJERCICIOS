/*
Ejercicio 2: Crear un Endpoint POST para agregar usuarios
Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la
lista. Tu tarea es crear un endpoint POST que reciba los datos del usuario desde
el cuerpo de la solicitud en formato JSON. Los datos deben incluir name y email.
Si alguno de estos datos falta, el servidor debe responder con un error (código
400).
Recuerda usar express.json() como middleware para procesar los datos del
cuerpo de la solicitud.
*/

const express =  require ('express')
const app = express()
const PORT = 3000

//Middleware  para poder leer JSON en el body enviados por el cliente
app.use(express.json())

//lista de usuarios
const usuarios = [
  { name: 'Ana', email: 'ana@example.com' },
  { name: 'Carla', email: 'carla@example.com' },
  { name: 'Luisa', email: 'luisa@example.com' }
]


//Endpoint POST para agregar un nuevo usuario
app.post('/usuarios', (req, res) => {
    const {name, email} = req.body;   //(req.body contiene lo que nos pide el cliente )
//req.body es lo que el cliente te está enviando (en este caso, un nuevo usuario).
//❌ No es el servidor el que “requiere” un nombre y correo.
//El servidor revisa que esos datos estén presentes para aceptarlos y guardar el usuario.



//Validación: si falta name o email
if (!name || !email){
return res.status(400).json ({error: 'Faltan datos: name y email son requeridos.'})
}

// Agregar usuario nuevo al arreglo
  const nuevoUsuario = { name, email }
  usuarios.push(nuevoUsuario)

  // Responder con el nuevo usuario agregado  //201 ="Created" → Creado
  res.status(201).json(nuevoUsuario)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/usuarios`)
})
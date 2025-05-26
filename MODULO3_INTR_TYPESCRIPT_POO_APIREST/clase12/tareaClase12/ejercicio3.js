/*
Ejercicio 3: Usar parámetros dinámicos con :id
Consigna: En este ejercicio, vamos a permitir que el cliente busque información
de un usuario por su ID. Crea un endpoint GET que reciba un parámetro
dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar
este valor y busca al usuario correspondiente en una lista. Si no se encuentra el
usuario, responde con un error 404.
*/


const express =  require ('express')
const app = express()
const PORT = 3000


const usuarios = [
  { id: 1, name: 'Ana', email: 'ana@example.com' },
  { id: 2, name: 'Carla', email: 'carla@example.com' },
  { id: 3, name: 'Luisa', email: 'luisa@example.com' }
];

//:id es un marcador de posición para un valor que se enviará como parte de la URL.
//El valor de id puede cambiar según la solicitud
app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params;

    
  // Buscamos el usuario con ese id (conversión a número)
    const usuario = usuarios.find(usuario=>usuario.id === parseInt(id));

        if (usuario){
            res.status(200).json(usuario)
        }else { 
            res.status(404).json ({error: 'Id no encontrado.'})   
        }
    })

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}/usuarios/id `);
})


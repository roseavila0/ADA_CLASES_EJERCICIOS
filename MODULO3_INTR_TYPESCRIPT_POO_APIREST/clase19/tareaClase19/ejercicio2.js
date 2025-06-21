/*
Actividad 2: Implementar Operaciones CRUD en una API REST
Consigna:
1. Usa la misma estructura de proyecto para implementar operaciones
CRUD en una colección de "usuarios".
2. Define los siguientes endpoints:
o GET /api/users para obtener todos los usuarios.
o POST /api/users para crear un nuevo usuario.
o PUT /api/users/:id para actualizar un usuario por ID.
o DELETE /api/users/:id para eliminar un usuario por ID.
*/

const express =  require ("express");
const app = express();
app.use(express.json());
const PORT= 3000;

let users = [{id: 1, nombre: "Lucas", carrera: "Odontologo"},
                 {id: 2, nombre: "Aurora", carrera: "Cantante"},
                 {id: 3, nombre: "Carlos", carrera: "Profesor"}]   


//este middlewareimprime en consola cada request
app.use((req, res, next) => {
    console.log(`[${new Date().toDateString()} ${req.method} ${req.url}]`);
    next();
});

app.get("/users", (req, res, ) =>{
    res.json(users);
})

app.post("/users", (req, res, ) =>{
   const {id, nombre, carrera} = req.body;

   if(!nombre || !carrera){
    return res.status(400).json({error: "Los campos nombre y carrera son obligatorios."})
   }

   const newUser= {id, nombre, carrera};
   users.push(newUser);

   res.status(201).json(newUser);
})

app.put("/users/:id", (req, res) =>{
    const {id} = req.params;
    const {nombre, carrera} = req.body;

    if(!nombre || !carrera) {
        return res.status(400).json({error: "Faltan campos: nombre y carrera son obligatorios"})
    }

    let encontrado = false;
    users= users.map(user =>{
        if(user.id === parseInt(id)){
            encontrado = true;
            return {... user, nombre, carrera}
        }

        return user
    })

    if(!encontrado) {
        return res.status(404).json({error: "User no encontrado."});
    }

    res.status(200).json({mensaje: "user actualizado"})
})

app.delete("/users/:id", (req, res) =>{
 const {id} = req.params;

 const originalLength= users.length;
 users = users.filter(user => user.id !== parseInt(id));

 if(users.length === originalLength){
    return res.status(400).json({error: " no encontrado"});
 }

 res.status(204).send();
})

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

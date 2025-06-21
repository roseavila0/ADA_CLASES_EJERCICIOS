/* Crea una APIREST para gestionar los animales de un zoolóligo. la API debe cumplir las siguientes funciones:

1. permitir obtener una lista de todos los animales.
2. agregar un nuevo animal.
3. actualizar la información de una animal existente mediante su ID.
4. Eliminar un animal mediante su ID.

La API debe validar que cada animal tenga un nombre (name) y una especie (species). Utilliza un middleware para registrar cada solicitud en la consola */

const express = require ("express");
const app =  express();
app.use(express.json());
const PORT= 3000;

let animals = [{id: 1, name: "Lucas", especie: "mamifero"},
                 {id: 2, name: "aurora", especie: "anfibio"},
                 {id: 3, name: "carlitos", especie: "ave"}]    

//Este middleware imprime en consola cada request (obligatorio según el enunciado).
app.use((req, res, next) => {                                                   //Este es un middleware personalizado. ¿Qué hace? //Registra en la consola todas las peticiones que llegan, mostrando: la fecha, el método HTTP (GET, POST, etc.), la ruta que se pidió (/animals, etc.)✍️ Es como tener una bitácora.
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get("/animals", (req, res) =>{
    res.json(animals);
})

app.post("/animals", (req, res) =>{
    const {id, name, especie} = req.body;

    if(!name || !especie) {
        return res.status(400).json ({error: "Los campos name y especie son obligatorios."})
    }

    const newAnimal = {id, name, especie};
    animals.push(newAnimal);

    res.status(201).json(newAnimal);
})

app.put("/animals/:id", (req, res) =>{
    const{id} = req.params;
    const {name, especie} = req.body;

  if (!name || !especie) {
    return res.status(400).json({ error: "Faltan campos: name y especie son obligatorios." });
  }

    let encontrado = false;
    animals = animals.map(animal => {
        if (animal.id === parseInt(id)){
            encontrado = true;
            return {...animal, name, especie}
        }

    return animal
    })

    if (!encontrado) {
    return res.status(404).json({ error: "Animal no encontrado." });
    }

    res.status(200).json({mensaje: "animal acutalizado."})
})

app.delete("/animals/:id", (req, res) =>{
    const {id} = req.params;

    const originalLength = animals.length;
    animals = animals.filter(animal => animal.id !== parseInt(id));

    if (animals.length === originalLength){
        return res.status(404).json({error: "animal no encontrado."});   //se usa 404 Porque es una respuesta vacía, pero exitosa.
    }

    res.status(204).send(); //sin contenido, pero éxito.
});


app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
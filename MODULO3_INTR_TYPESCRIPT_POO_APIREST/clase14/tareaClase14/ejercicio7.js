/*
Ejercicio 7: Buscar usuarios por edad mínima y máxima
Crea un endpoint GET que reciba dos parámetros de consulta (minAge y
maxAge) y devuelva una lista de usuarios cuya edad esté en ese rango.
1. Si no se proporcionan ambos parámetros, responde con un error
400.
2. Si no hay usuarios en ese rango, devuelve un arreglo vacío.
3. Asegúrate de incluir un campo age en los usuarios existentes para
realizar este ejercicio.
*/

const express = require ("express");
const app =  express();
app.use(express.json());

const users = [
  { id: 1, name: "Alina", email: "alina@gmail.com", age: 23 },
  { id: 2, name: "Lana", email: "lanalana@gmail.com", age: 15 },
  { id: 3, name: "Valeria", email: "val@gmail.com", age: 30 }
];

app.get("/users", (req, res) => {
    const {miAge, maxAge} = req.query;

    if (!miAge || !maxAge){
        return res.status(400).send("Debes proporcionar minAge y maxAge como parámetros.")
    } 

   
    // Convertir a número
    const min = parseInt(miAge);
    const max = parseInt(maxAge);

    
  // Validar que sean números válidos
  if (isNaN(min) || isNaN(max)) {
    return res.status(400).send("minAge y maxAge deben ser números.");
  }

  // Filtrar los usuarios por edad
  const result = users.filter(user => user.age >= min && user.age <= max);

  res.json(result); // Devuelve el arreglo filtrado (vacío si no hay resultados)
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});



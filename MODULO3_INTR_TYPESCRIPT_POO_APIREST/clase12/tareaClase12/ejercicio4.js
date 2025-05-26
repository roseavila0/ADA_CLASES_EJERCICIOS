/*
Ejercicio 4: Practicando desestructuración de objetos
Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud:
{
 "name": "Katherine Johnson",
 "email": "katherine@example.com",
 "age": 42
}
Crea un endpoint POST que use desestructuración para extraer name y email.
Luego, responde con un mensaje que incluya estos valores. Si el cliente envía
datos incompletos, responde con un error 400.
*/



/*
Importa Express, el framework que nos facilita crear servidores y manejar rutas más fácilmente que con http nativo.
*/
const express = require('express');

// Crea una instancia de la aplicación Express. A partir de aquí usas app para definir rutas, middlewares, etc.
const app = express();

/* Middleware que permite a tu servidor entender datos en formato JSON enviados en el cuerpo de una solicitud POST o PUT.
🔎 Sin esto, req.body estaría undefined.*/
app.use(express.json());


// Endpoint POST para manejar datos desestructurados
app.post('/add-user', (req, res) => {
    // Extraemos name y email del cuerpo de la solicitud usando desestructuración
    const { name, email } = req.body;   

    // Validamos que ambos campos estén presentes
    if (!name || !email) {
        return res.status(400).send('Faltan datos obligatorios');
    }

    // Respondemos con un mensaje que incluya los valores recibidos
    res.json({ message: `Usuario ${name} con correo ${email} agregado con éxito` });
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/add-user');
});
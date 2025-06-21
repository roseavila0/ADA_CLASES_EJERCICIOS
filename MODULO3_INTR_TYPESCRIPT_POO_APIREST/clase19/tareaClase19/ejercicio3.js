/*
Actividad 3: Crear un Middleware Personalizado
Consigna:
1. Implementa un middleware para registrar en la consola cada
solicitud recibida con su método y URL.
2. Úsalo en la API para registrar todas las solicitudes.
*/


const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// 🔍 Middleware personalizado
const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Sigue al siguiente paso
};

// 🧩 Aplicar middleware globalmente
app.use(logMiddleware);

// Ruta de ejemplo
app.get("/api/message", (req, res) => {
  res.json({ message: "HOLA TERRÍCOLAS..." });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
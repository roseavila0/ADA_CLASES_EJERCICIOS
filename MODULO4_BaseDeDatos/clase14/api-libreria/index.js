const express = require('express');
const connectDB = require('./database');
const dotenv = require("dotenv");

dotenv.config();

connectDB();

const app = express()
app.use(express.json())
app.use("/api/libros", require("./routes/libros"));
app.use("/api/autores", require("./routes/autores"));


// iniciamos el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
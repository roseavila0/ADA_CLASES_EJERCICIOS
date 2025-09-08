const express = require ('express');
const connectDB = require('./database');
const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app = express()
app.use(express.json())
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/pedidos", require("./routes/pedidos"));
app.use("/api/platos", require("./routes/platos"));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
})

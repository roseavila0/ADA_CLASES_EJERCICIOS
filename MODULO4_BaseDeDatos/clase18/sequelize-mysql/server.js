const express = require ("express"); 
const cors = require("cors"); 
const sequelize = require("./configuracion/database"); 
const Usuario = require("./models/usuario");
const rutaUsuarios = require("./routes/usuarios"); 

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.use("/usuario", rutaUsuarios); 

sequelize.sync().then(()=>{
    console.log("Base de datos sincronizada");
    app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"))
})
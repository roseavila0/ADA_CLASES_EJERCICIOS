const express = require ("express")
const cors = require ("cors")
const bodyParser = require ("body-parser")
const path = require ("path")
const contactsRoutes = require ("./routes/contacts")

const app = express();
const PORT = 3000


//middleware   El middleware cors en Express sirve para permitir o restringir el acceso a tu API desde otros dominios. Es una herramienta esencial cuando estás trabajando con frontends que consumen tu backend desde un origen distinto.
//Y lo que hace es controlar si un navegador debe permitir que un sitio web (por ejemplo: http://localhost:5173) haga peticiones a tu servidor (por ejemplo: http://localhost:3000).
app.use(cors());     //Y lo que hace es controlar si un navegador debe permitir que un sitio web (por ejemplo: http://localhost:5173) haga peticiones a tu servidor (por ejemplo: http://localhost:3000).


app.use(express.json())

//usar los archivos del front
app.use(express.static(path.join(__dirname, "public")))

//rutas api
app.use("/api/contacts", contactsRoutes)

//ruta para manejar cualquier solicitud
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public/index.html"))
})

//iniciamos servidor
app.listen(PORT, () =>{
    console.log(`escuchando en el servidor http://localhost:${PORT}`);
})
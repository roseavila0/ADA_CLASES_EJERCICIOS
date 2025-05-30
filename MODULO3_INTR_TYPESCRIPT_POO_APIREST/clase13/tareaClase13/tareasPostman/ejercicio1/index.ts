import express from "express"
import userRouter from "./router/userRouter"

const app = express()

// Middleware global si quieres leer JSON (no es obligatorio aquí pero es buena práctica)
app.use(express.json())

// Conectamos el router
app.use("/users", userRouter)

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
})



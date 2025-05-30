/*
Ejercicio 3: Crear el Archivo app.ts y Configurar el Servidor

Descripción:
1. Crea el archivo app.ts que configurará el servidor Express y los routers.
2. En el archivo app.ts, importa los routers creados en los ejercicios
anteriores y conecta el servidor.
3. Haz que el servidor escuche en el puerto 3000. 
*/
 
import express from "express";
//import userRouter from "../ejercicio1/router/userRouter";
import productsRouter from "../ejercicio2/routers/productsRouter";
import usersRouter from "../ejercicio2/routers/usersRouter"

const app = express()
app.use(express.json())

app.use("/user", userRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
})
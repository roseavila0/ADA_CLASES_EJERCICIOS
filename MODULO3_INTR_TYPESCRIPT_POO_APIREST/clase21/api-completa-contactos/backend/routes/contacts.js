const express = require ("express")
const fs = require ("fs")
const path = require ("path")
const router = express.Router()

const dataPath = path.join(__dirname, "../data/contacts.json") //la rut del archivo json

//RUTAS
//Obtener todos los contactos
router.get("/", (req, res) => {
    const contacts =  JSON.parse(fs.readFileSync(dataPath, "utf-8")) //leemos y parseamos el archivo
    res.json(contacts)
})


//agregar un nuevo contacto
router.post("/", (req, res) => {
    const newContact = req.body  //obtenemos el nuevo contacto del cuerpo de la solicitud
    const contacts = JSON.parse(fs.readFileSync(dataPath, "utf-8")) //leemos y parseamos el archivo
    contacts.push(newContact) //agregamos
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)) //guardalo en un array
    res.json({message: "contacto agendado", contact: newContact})
})

//agregar un nuevo contacto
router.put("/:id", (req, res) =>{
    const {id} = req.params //obtener el id de los parametros de la url
    const updateContact = req.body //obtenemos los nuevos datos del cuerpo de la solicitud
    let contacts = JSON.parse(fs.readFileSync(dataPath, "utf-8")) // leemos y parseamos el archivo
    contacts =  contacts.map(contact => (contact.id === id ? updateContact : contact)) //Está recorriendo todo el array de contacts y buscando al contacto que tenga el id que recibiste en la URL (req.params.id).Y si lo encuentra, lo reemplaza por updateContact (los datos nuevos que llegaron en el req.body).Si no es ese contacto, lo deja igual.
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)) // guardalo en un array
    res.json({message: "contacto actualizado", contact: updateContact})
})

//eliminar un contacto
router.delete("/:id", (req, res) =>{
    const {id} = req.params //obtener el id de los parametros de la url
    let contacts = JSON.parse(fs.readFileSync(dataPath, "utf-8")) //leemos y parseamos el archivo
    contacts = contacts.filter(contact => String(contact && contact.id) !== String(id))//elimina el contacto con el id te paso
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)) // guardamos en el array
    res.json({message: "Contacto eliminado"})
})


module.exports = router
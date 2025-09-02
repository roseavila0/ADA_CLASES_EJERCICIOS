// importamos mongoose
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    edad: {
        type: Number
    }
})

module.exports = mongoose.model("User", UserSchema)
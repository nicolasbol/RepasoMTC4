const mongoose = require("mongoose");

const UsuariiiosSchema = mongoose.Schema({
    nombre: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true},
    registro: { type: Date, default: Date.now()}
});

//denfinir el modelo
module.exports = mongoose.model("Usuariiio", UsuariiiosSchema);
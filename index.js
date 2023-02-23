const express = require("express");
const conectarDB = require("./config/db");

//Conexión con la base de datos
conectarDB();

const app = express();

let port = 4000;

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: "+ port);
});
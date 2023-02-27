/* const { request, response } = require("express"); */
const express = require("express");
const conectarDB = require("./config/db");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters");

//Conexión con la base de datos
conectarDB();

const app = express();

//habilitar express.json
app.use(express.json({ extended : true }));

//Rutas o routes
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);

/* app.use("/", (req, res) =>{
    res.send("Hola mundo repaso");
});
 */

let port = 4000;

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: " + port);
});
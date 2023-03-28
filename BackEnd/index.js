/* const { request, response } = require("express"); */
const express = require("express");
const conectarDB = require("./config/db");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters");
const categoriaRouters = require("./routers/categoriaRouters");
const productoRouters = require("./routers/productoRouters");
const cors = require('cors');

//Conexión con la base de datos
conectarDB();

const app = express();

//Habilitar los cors
app.use(cors());

//habilitar express.json
app.use(express.json({ extended : true }));

//Rutas o routes
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);
app.use("/api/categoria", categoriaRouters);
app.use("/api/producto", productoRouters);

/* app.use("/", (req, res) =>{
    res.send("Hola mundo repaso");
});
 */

let port = 4000;

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: " + port);
});
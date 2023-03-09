const express = require("express");
const router = express.Router();
const usuarioController =  require("../controllers/usuariosController");

router.post(
    "/",
    usuarioController.crearUsuario
);

/* router.get("/", (req, res) => {
    res.json({msg: "Desde router, el get"});
});

router.post("/", (req, res) => {
    res.json({msg: "Desde router, el post"});
});

router.put("/", (req, res) => {
    res.json({msg: "Desde router, el put"});
});

router.delete("/", (req, res) => {
    res.json({msg: "Desde router, el delete"});
}); */

module.exports = router;
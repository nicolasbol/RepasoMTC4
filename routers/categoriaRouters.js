const express = require("express");
const { leerCategoria, crearCategoria, actualizarCategoria, borrarCategoria } = 
        require("../controllers/categoriaController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");



router.get("/", authMiddleware, leerCategoria);

router.post("/", authMiddleware, crearCategoria);

router.put("/:id", authMiddleware, actualizarCategoria);

router.delete("/:id", authMiddleware, borrarCategoria);

module.exports = router;
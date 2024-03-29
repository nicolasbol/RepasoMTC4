const express = require("express");
const { leerCategoria, crearCategoria, actualizarCategoria, borrarCategoria, leerCategoriaById, leerCategoriaHome } = 
        require("../controllers/categoriaController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/home", leerCategoriaHome);

router.get("/", authMiddleware, leerCategoria);

router.get("/:id", authMiddleware, leerCategoriaById);

router.post("/", authMiddleware, crearCategoria);

router.put("/:id", authMiddleware, actualizarCategoria);

router.delete("/:id", authMiddleware, borrarCategoria);

module.exports = router;
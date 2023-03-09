const express = require("express");
const { leerProducto, crearProducto, actualizarProducto, borrarProducto } = require("../controllers/productoController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");



router.get("/", authMiddleware, leerProducto);

router.post("/", authMiddleware, crearProducto);

router.put("/:id", authMiddleware, actualizarProducto);

router.delete("/:id", authMiddleware, borrarProducto);

module.exports = router;
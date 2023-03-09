const Producto = require("../models/producto");

exports.leerProducto = async ( req, res ) => {
    res.json({ msg: "Se ejecutó leerProducto"});
};

exports.crearProducto = async ( req, res ) => {
    res.json({ msg: "Se ejecutó crearProducto"});
};

exports.actualizarProducto = async ( req, res ) => {
    res.json({ msg: "Se ejecutó actualizarProducto"});
};

exports.borrarProducto = async ( req, res ) => {
    res.json({ msg: "Se ejecutó borrarProducto"});
};
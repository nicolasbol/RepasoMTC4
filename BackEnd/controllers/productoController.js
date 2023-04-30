const Producto = require("../models/producto");

exports.leerProducto = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó leerProducto"});
    const { id } = req.params;
    const producto =  await Producto.find().where("categoriaId").equals(id);
    res.json(producto);
};

exports.crearProducto = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó crearProducto"});
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.json(producto);
        console.log(producto);
        
    } catch (error) {
        res.json({ msg: "Ha habido un error"});
        console.log(error);
    }
        
};

exports.actualizarProducto = async ( req, res ) => {
    res.json({ msg: "Se ejecutó actualizarProducto"});
};

exports.borrarProducto = async ( req, res ) => {
    res.json({ msg: "Se ejecutó borrarProducto"});
};
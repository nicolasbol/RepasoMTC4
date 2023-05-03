const Categoria = require("../models/categoria");

exports.leerCategoriaHome = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó leerCategoria"});
    try {
        const categoria = await Categoria.find();
        res.json({ categoria });  
    } catch (error) {
        console.log(error);
    }
};

exports.leerCategoria = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó leerCategoria"});

    try {

        const categoria = await Categoria.find({ creador: req.usuario.id});
        res.json({ categoria });
        
    } catch (error) {

        console.log(error);

    }

};
exports.leerCategoriaById = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó leerCategoria"});
    const { id } = req.params;

    try {

        const categoria = await Categoria.findById( id );
        res.json({ categoria });
        
    } catch (error) {

        console.log(error);

    }

};

exports.crearCategoria = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó crearCategoria"});
    try {

        const categoria = new Categoria(req.body);
        categoria.creador = req.usuario.id;
        categoria.save();
        res.json(categoria);

    } catch (error) {

        console.log(error);
        
    }
};

exports.actualizarCategoria = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó actualizarCategoria"});

    const { id } = req.params;
    const categoria = await Categoria.findById(id);

    if (!categoria) {
        return res.status(400).json({ msg: "Categoría no encontrada"} );       
    }

    // Si el usuario "logeado" no es el creador de la categoría, no podrá actualizarla
    if (categoria.creador.toString() !== req.usuario.id.toString()) {
        return res.status(400).json({ msg: "Acción no válida para este usuario"} );
    } 

    // Si viene algo dentro del body, actualice, sino, mantener el actual.
    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.imagen = req.body.imagen || categoria.imagen;
    categoria.save();
    res.json({ categoria });

};

exports.borrarCategoria = async ( req, res ) => {
    // res.json({ msg: "Se ejecutó borrarCategoria"});

    try {

        // console.log(req);
        // console.log(req.params.id);
        await Categoria.deleteOne({ _id: req.params.id });
        res.json({ msg: "Categoria eliminada"} );

    } catch (error) {
        
        console.log(error);

    }

};

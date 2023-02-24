const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async ( req, res ) => {
    // console.log(req.body);
    const { password } = req.body;

    try {
    
        //Crear nuevo usuario
        let usuario = new Usuario(req.body);

        //hash o encriptado
        usuario.password = await bcryptjs.hash(password, 10);
    
        //Guardar usuario en la bd
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    
    } catch (error) {
        
        console.log(error);
    
    }
    //res.json({ msg: "Desde controller, el POST, primer request"});
};

const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");


exports.crearUsuario = async ( req, res ) => {
    // console.log(req.body);
    const { password, email } = req.body;

    try {
        
        //Busca en la db si se encuentra el email
        let usuario = await Usuario.findOne({ email });
        
        //Si lo encuentra (usuario = true), ya existe
        if(usuario){
            return res.status(400).json({ msg: "El usuario ya está registrado"});
        }
        
        //Crear nuevo usuario
        usuario = new Usuario(req.body);

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

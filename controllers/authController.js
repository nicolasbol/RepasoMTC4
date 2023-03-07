const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env"});

exports.autenticarUsuario = async (req, res) => {
    
    const { password, email } = req.body;

    try {

        //Revisar que el correo esté registrado
        let usuario = await Usuario.findOne({ email });

        if(!usuario){
            return res.status(400).json({ msg: "El usuario no existe"});
        }

        // console.log("Permitir ingresar");
        
        //Validación del password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);

        if(!passwordCorrecto){
            return res.status(404).json({msg: "password incorrecto"});
        }

        //Si todo es correcto, se crea y firma un token de ingreso
        let payload = {
            usuario: {id: usuario.id},
        };
        // res.json(payload);
        
        jwt.sign(

            payload,
            process.env.SECRETA,
            {
                expiresIn: "30d" //expira en 1 dia
            },
            (error, token) =>{

                if (error) throw error;

                //Mensaje de confirmación con el token creado
                res.json({token});
            }
            
        );

    } catch (error) {
        console.log(error);
    }
}


exports.usuarioAutenticado = async ( req, res) => {

    try {
        
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({ usuario });

    } catch (error) {

        res.status(403).json({ msg: "Hubo un error" });

    }

}
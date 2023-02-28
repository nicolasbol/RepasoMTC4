const jwt = require("jsonwebtoken");

module.exports = function ( req, res, next ){
    //Leer el token desde el header del postman
    const token = req.header("x-auth-token");
    // console.log(token);

    // Revisar si hay token o no
    if(!token){
        return res.status(400).json({ msg: "No hay token "});
    }

    // Validación del token
    try {

        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        // req.mipoez = "eso";
        console.log(req.usuario);
        next();

    } catch (error) {
        res.status(403).json({ msg: "Token no valido" });
    }

}
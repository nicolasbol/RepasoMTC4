import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
    <div>
        <h1>Hola mundo Repaso</h1>
        <h1>Inicio de Sesión</h1>
        <h2>Bienvenidos, ingrese sus credenciales</h2>
        <input placeholder="Email"/>
        <input placeholder="Password"/>
        <button>Ingresar</button>
        {/* <button>Crear cuenta</button> */}
        <Link to = { "/crear-cuenta" }>Crear cuenta</Link>
    </div>
    );
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
    return(
    <div>
        <h1>Hola mundo Repaso</h1>
        <h1>Crear Cuenta</h1>
        <h2>Ingresar los datos del usuario</h2>
        <input placeholder="Nombre"/>
        <input placeholder="Email"/>
        <input placeholder="Password"/>
        <input placeholder="Confirmar"/>
        <button>Crear cuenta</button>
        <Link to = { "/" }>Regresar</Link>
    </div>
    );
}

export default CrearCuenta;
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
            <div className='md:w-2/3 lg:w-2/5'>
                <h1 className='text-center bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 
                                bg-clip-text font-display text-5xl tracking-tight text-transparent '>
                    Inicio de Sesión
                </h1>

                <form className='my-10 bg-white rounded-lg p-5'>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
                        <input 
                            type="email"
                            placeholder='Email'            
                            className='w-full my-3 p-3 border rounded-lg bg-gray-100'                  
                        />    

                        <label className='uppercase text-gray-600 block text-xl font-bold'>password</label>
                        <input 
                            type="password"
                            placeholder='Contraseña'            
                            className='w-full mt-3 p-3 border rounded-lg bg-gray-100'                  
                        />
                    </div>

                        <input 
                            type="submit"
                            value="Iniciar Sesión"
                            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                        />

                    <Link 
                        to = { "/crear-cuenta" }
                        className='block text-center my-1 text-violet-600 uppercase text-sm'
                        >Crear cuenta
                    </Link>
                    
                </form> 

                                
                
            </div>
        </main>


    // <div>
    //     <h1>Hola mundo Repaso</h1>
    //     <h1>Inicio de Sesión</h1>
    //     <h2>Bienvenidos, ingrese sus credenciales</h2>
    //     <input placeholder="Email"/>
    //     <input placeholder="Password"/>
    //     <button>Ingresar</button>
    //     {/* <button>Crear cuenta</button> */}
    //     <Link to = { "/crear-cuenta" }>Crear cuenta</Link>
    // </div>
    );
}

export default Login;
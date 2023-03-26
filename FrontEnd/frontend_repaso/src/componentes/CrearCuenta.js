import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    })

    //Esta función guarda cualquier cambio dentro de los inputs
    //automáticamente, en tiempo real.
    const onChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        })
        // console.log(e.target.name+" = "+ e.target.value)
    }
    
    const { nombre, email, password, confirmar } = usuario;

    
    const crearCuenta = async () =>{
        if (password !== confirmar) {
            console.log("Las contraseñas son diferentes");
            const mensaje = "Las contraseñas son diferentes";  
            // swal('Error', 'Las contraseñas son diferentes', 'error');
            swal({
                title: 'Error',
                text: mensaje,
                icon: 'error',
                buttons:{
                    confirm:{
                        text:'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            })

        } else {

            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            console.log(data);

        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return(

        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
            <div className='md:w-2/3 lg:w-2/5'>
                <h1 className='text-center bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 
                                bg-clip-text font-display text-5xl tracking-tight text-transparent '>
                    Creación de Cuenta
                </h1>
 
                <form 
                    onSubmit={onSubmit}
                    className='my-10 bg-white rounded-lg p-5'
                >
                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
                        <input 
                            type="nombre"
                            id="nombre"
                            name="nombre"
                            placeholder='Nombre'            
                            className='w-full my-3 p-3 border rounded-lg bg-gray-100'                  
                            value={nombre}
                            onChange={onChange}
                        />  

                        <label className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email'            
                            className='w-full my-3 p-3 border rounded-lg bg-gray-100'                  
                            value={email}
                            onChange={onChange}
                        />    

                        <label className='uppercase text-gray-600 block text-xl font-bold'>password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Contraseña'            
                            className='w-full my-3 p-3 border rounded-lg bg-gray-100'                  
                            value={password}
                            onChange={onChange}
                        />

                        <label className='uppercase text-gray-600 block text-xl font-bold'>confirmar password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder='Confirme su contraseña'            
                            className='w-full mt-3 p-3 border rounded-lg bg-gray-100'                  
                            value={confirmar}
                            onChange={onChange}
                        />

                    </div>

                        <input 
                            type="submit"
                            value="Crear Cuenta"
                            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                        />

                    <Link 
                        to = { "/" }
                        className='block text-center my-1 text-violet-600 uppercase text-sm'
                        >Regresar
                    </Link>
                    
                </form>                                         
            </div>
        </main>



    // <div>
    //     <h1>Hola mundo Repaso</h1>
    //     <h1>Crear Cuenta</h1>
    //     <h2>Ingresar los datos del usuario</h2>
    //     <input placeholder="Nombre"/>
    //     <input placeholder="Email"/>
    //     <input placeholder="Password"/>
    //     <input placeholder="Confirmar"/>
    //     <button>Crear cuenta</button>
    //     <Link to = { "/" }>Regresar</Link>
    // </div>
    );
}

export default CrearCuenta;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import swal from 'sweetalert';

const ActualizarCategoria = () => {

    const { idCategoria } = useParams();

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        nombre: '',
        imagen: '',
    })

    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }
    
    const cargarCategoria = async () => {
        const response = await crud.GET(`/api/categoria/${idCategoria}`);
        console.log(response);
        setCategoria(response.categoria);
    }
    
    const { nombre, imagen } = categoria;
    
    useEffect(() => {
        cargarCategoria();
    }, [])
    
    const actualizarCategoria = async () => {
        const data = {
            nombre: categoria.nombre,
            imagen: categoria.imagen,
        }
        console.log(data);
        const response = await crud.PUT(`/api/categoria/${idCategoria}`, data);
        console.log(response);
        
        if (response.msg) {
            swal('Error', response.msg, 'error');
        } else {
            swal('Información', 'Categoria actualizada correctamente', 'success');
        }
        navigate("/admin");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        actualizarCategoria();
    }

    
    return (
        <>
            <Header />

            <div className='md:flex md:min-h-screen'>
                <Sidebar />
                <main className='flex-1'>
                    <div className='mt-10 flex justify-center'>
                        <h1 className='inline text-center bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent'>
                            Actualizar Categorias
                        </h1>
                    </div>

                    <div className='mt-10 flex justify-center'>
                        <form
                            onSubmit={onSubmit}
                            className='my-10 bg-white rounded-lg p-5'
                        >
                            <div className='my-5'>
                                <label className='uppercase text-gray-600 block text-xl font-bold'>Nombre de la categoria</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder='Nombre'
                                    className='w-full my-3 p-3 border rounded-lg bg-gray-100'
                                    value={nombre}
                                    onChange={onChange}
                                />

                                <label className='uppercase text-gray-600 block text-xl font-bold'>Enlace de imagen</label>
                                <input
                                    type="text"
                                    id="imagen"
                                    name="imagen"
                                    placeholder='Enlace'
                                    className='w-full my-3 p-3 border rounded-lg bg-gray-100'
                                    value={imagen}
                                    onChange={onChange}
                                />
                            </div>

                            <input
                                type="submit"
                                value="Actualizar Categoria"
                                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                            />

                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
export default ActualizarCategoria;
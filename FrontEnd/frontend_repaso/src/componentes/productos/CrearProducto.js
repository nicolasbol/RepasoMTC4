import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import crud from '../../conexiones/crud';
import swal from 'sweetalert';

const CrearProducto = () => {

    const navigate = useNavigate();

    const { idCategoria } = useParams();

    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        stock: '',
        precio: '',
        imagen: '',
        categoriaId: '',
    })

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        })
    }

    const { nombre, descripcion, stock, precio, imagen } = producto;

    const crearProducto = async () => {
        const data = {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precio: producto.precio,
            imagen: producto.imagen,
            categoriaId: idCategoria,
        }
        console.log(data);
        const response = await crud.POST(`/api/producto`, data);
        console.log(response);

        if (response.msg) {
            swal('Error', response.msg, 'error');
        } else {
            swal('Información', 'Producto creado correctamente', 'success');
        }
        navigate(`/home-productos/${idCategoria}`);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearProducto();
    }

    return (
        <>
            <Header />

            <div className='md:flex md:min-h-screen'>
                <Sidebar />
                <main className='flex-1'>
                    <div className='mt-10 flex justify-center'>
                        <h1 className='inline text-center bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent'>
                            Crear Productos
                        </h1>
                    </div>

                    <div className='mt-10 flex justify-center'>
                        <form
                            onSubmit={onSubmit}
                            className='my-10 bg-white rounded-lg p-5'
                        >
                            <div className='my-5'>
                                <label className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder='Nombre'
                                    className='w-full my-3 p-3 border rounded-lg bg-gray-100'
                                    value={nombre}
                                    onChange={onChange}
                                />
                              
                                <label className='uppercase text-gray-600 block text-xl font-bold'>Descripción</label>
                                <input
                                    type="text"
                                    id="descripcion"
                                    name="descripcion"
                                    placeholder='Descripción'
                                    className='w-full my-3 p-3 border rounded-lg bg-gray-100'
                                    value={descripcion}
                                    onChange={onChange}
                                />

                                <label className='uppercase text-gray-600 block text-xl font-bold'>Stock</label>
                                <input
                                    type="text"
                                    id="stock"
                                    name="stock"
                                    placeholder='Stock'
                                    className='w-full my-3 p-3 border rounded-lg bg-gray-100'
                                    value={stock}
                                    onChange={onChange}
                                />

                                <label className='uppercase text-gray-600 block text-xl font-bold'>Precio</label>
                                <input
                                    type="number"
                                    id="precio"
                                    name="precio"
                                    placeholder='Precio'
                                    className='w-full my-3 p-3 border rounded-lg bg-gray-100'
                                    value={precio}
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
                                value="Crear Producto"
                                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                            />

                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
export default CrearProducto;
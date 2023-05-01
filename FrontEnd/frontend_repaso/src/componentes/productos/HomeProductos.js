import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import crud from '../../conexiones/crud';
import swal from 'sweetalert';
import { ViewProductos } from './ViewProductos';

const HomeProductos = () => {

    const navigate = useNavigate();

    const { idCategoria } = useParams();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            //console.log(token)
            if (!token) {
                navigate("/login");
            }
        }
        autenticarUsuario()
    }, [navigate]);// [] hacen que solo se ejecute una vez el useEffect

    const [productos, setProductos] = useState([]);

    const cargarProductos = async () => {
        const response = await crud.GET(`/api/producto/${idCategoria}`);
        console.log(response);
        setProductos(response);
    }

    useEffect(() => {
        cargarProductos();
    }, [])

    const borrarProducto = async (idProducto) => {
        const response = await crud.DELETE(`/api/producto/${idProducto}`);
        if (response.msg === "Producto eliminado") {
            swal('Información', response.msg, 'success');
        } else {
            swal('Error', "Ha habido un error", 'error');
        }
        console.log(response);
        console.log(idProducto);
        cargarProductos();
    }

    return (

        <>
            <Header />
            <div className='md:flex md:min-h-screen'>
                <Sidebar />
                <main className='flex-1'>
                    <div className='mt-10 flex justify-center'>
                        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                            Listado de Productos
                        </h1>
                    </div>

                    <div className='p-10'>
                        <Link
                            className='bg-violet-600 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg'
                            to={`/crear-producto/${idCategoria}`}
                        >Crear Producto</Link>
                    </div>

                    <div className='bg-gray-600 shadow mt-10 rounded-lg'>
                        {
                            productos.map( producto =>
                                <ViewProductos
                                    key={producto._id}
                                    producto={producto}
                                />
                            )
                        }
                    </div>

                </main>
            </div>
        </>



        // <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
        //     <div className='md:w-2/3 lg:w-2/5'>
        //         <h1 className='text-center bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 
        //                         bg-clip-text font-display text-5xl tracking-tight text-transparent '>
        //             Panel de Administrador
        //         </h1>

        //         <input 
        //             type="submit"
        //             value="Cerrar Sesión"
        //             className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
        //             onClick={cerrarSesion}
        //         />
        //     </div>
        // </main>

    );
}
export default HomeProductos;
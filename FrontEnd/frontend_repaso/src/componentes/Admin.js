import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import swal from 'sweetalert';

const Admin = () => {

    const navigate = useNavigate();

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

    const [categoria, setCategorias] = useState([]);

    const cargarCategoria = async () => {
        const response = await crud.GET(`/api/categoria`);
        // console.log(response);
        setCategorias(response.categoria);
    }

    useEffect(() => {
        cargarCategoria();
    }, [])// [] hace que solo se ejecute una vez (al inicio) el useEffect, es decir cuando se llame y antes de que se renderize el componente de "Admin"

    const borrarCategoria = async (idCategoria) => {
        
        // //Al parecer al utilizar el 'await', puedo recibir de forma correcta el response.msg
        // const response =  await crud.DELETE(`/api/categoria/${idCategoria}`);
        // console.log(response);
        // if (response.msg === "Categoria eliminada") {
        //     swal('Información', response.msg, 'success');
        // } else {
        //     swal('Error', "Ha habido un error", 'error');
        // }
        
        //Pero si no uso el 'await' como en este caso, puesto que tengo un 'if', no es posible recibir bien el mensage desde response.msg
        //Otra solución es incluir un 'async' antes del primer 'willDelete' e incluir el 'await' al hacer la petición 'DELETE'.
        swal({
            title: "¿Estas seguro de eliminar esta categoría?",
            text: "Esta acción no se puede revertir",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                const response =  await crud.DELETE(`/api/categoria/${idCategoria}`);
                if(response){
                    swal(response.msg, {
                        icon: "success",
                    });

                    console.log(response);
                }
                else {
                    swal('Error', "Ha habido un error", 'error');
                  }
            } 
            cargarCategoria();
        });       
       
    }

    return (
        <>
            <Header />
            <div className='md:flex md:min-h-screen'>
                <Sidebar />
                <main className='flex-1'>
                    <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                        Listado de categorias
                    </h1>
                    <table className="table table-bordered">
                        <thead className='bg-white'>
                            <tr>
                                <th style={{ width: '10%' }}>Imagen</th>
                                {/* <th style={{ width: '10%' }}>Id</th> */}
                                <th style={{ width: '75%' }}>Nombre</th>
                                <th style={{ width: '15%' }}>Opciones</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            {
                                categoria.map(
                                    item =>
                                        <tr key={item._id}>
                                            <td>
                                                <img src={item.imagen}></img>
                                            </td>
                                            {/* <td>{item._id}</td> */}
                                            <td >{item.nombre}</td>
                                            <td>
                                                <Link
                                                    to = {`/home-productos/${item._id}`}
                                                >crear producto</Link>&nbsp;&nbsp;
                                                <Link
                                                     to = {`/actualizar-categoria/${item._id}`}
                                                >Editar</Link>&nbsp;&nbsp;
                                                <button
                                                    onClick={() => borrarCategoria(item._id)}
                                                >Eliminar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                        <tbody>
                        </tbody>
                    </table>
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
export default Admin;